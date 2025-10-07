import * as http from "http"
import * as vscode from "vscode"
import { ClineProvider } from "../core/webview/ClineProvider"
import { Task } from "../core/task/Task"
import { RooCodeEventName, ClineMessage } from "@roo-code/types"

const PORT = 8080
const HOST = "127.0.0.1"

export function startMobileBridge() {
	const server = http.createServer(async (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*")
		res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
		res.setHeader("Access-Control-Allow-Headers", "Content-Type, Last-Event-ID")

		if (req.method === "OPTIONS") {
			res.writeHead(204)
			res.end()
			return
		}

		if (req.method === "POST" && req.url === "/new-task") {
			let body = ""
			req.on("data", (chunk) => {
				body += chunk.toString()
			})
			req.on("end", async () => {
				try {
					const { message } = JSON.parse(body)
					const provider = await ClineProvider.getInstance()
					if (!provider) {
						res.writeHead(500, { "Content-Type": "application/json" })
						res.end(JSON.stringify({ error: "Kilo Code is not running" }))
						return
					}

					res.writeHead(200, {
						"Content-Type": "text/event-stream",
						"Cache-Control": "no-cache",
						Connection: "keep-alive",
						"Transfer-Encoding": "chunked",
					})

					const taskPromise = new Promise<Task>((resolve) => {
						provider.once(RooCodeEventName.TaskCreated, (task) => {
							resolve(task as Task)
						})
					})

					await vscode.commands.executeCommand("kilo-code.newTask", { prompt: message })

					const task = await taskPromise

					// Send taskId as the first event
					res.write(`id: ${Date.now()}\n`)
					res.write(`event: taskId\n`)
					res.write(`data: ${JSON.stringify({ taskId: task.taskId })}\n\n`)

					// Send message history
					task.clineMessages.forEach((msg) => {
						res.write(`id: ${msg.ts}\n`)
						res.write(`data: ${JSON.stringify(msg)}\n\n`)
					})

					const listener = (e: { message: ClineMessage }) => {
						res.write(`id: ${e.message.ts}\n`)
						res.write(`data: ${JSON.stringify(e.message)}\n\n`)
					}

					task.on(RooCodeEventName.Message, listener)

					const heartbeat = setInterval(() => {
						res.write(":heartbeat\n\n")
					}, 10000)

					task.once(RooCodeEventName.TaskCompleted, () => {
						clearInterval(heartbeat)
						task.off(RooCodeEventName.Message, listener)
						res.end()
					})

					req.on("close", () => {
						clearInterval(heartbeat)
						task.off(RooCodeEventName.Message, listener)
						res.end()
					})
				} catch (error) {
					res.writeHead(500, { "Content-Type": "application/json" })
					res.end(JSON.stringify({ error: error.message }))
				}
			})
		} else if (req.method === "POST" && req.url === "/send-followup") {
			let body = ""
			req.on("data", (chunk) => {
				body += chunk.toString()
			})
			req.on("end", async () => {
				try {
					const { taskId, message } = JSON.parse(body)
					const provider = await ClineProvider.getInstance()
					if (!provider) {
						res.writeHead(500, { "Content-Type": "application/json" })
						res.end(JSON.stringify({ error: "Kilo Code is not running" }))
						return
					}

					const task = provider.getCurrentTask()
					if (!task || task.taskId !== taskId) {
						res.writeHead(404, { "Content-Type": "application/json" })
						res.end(JSON.stringify({ error: "Task not found" }))
						return
					}

					task.handleWebviewAskResponse("messageResponse", message)
					res.writeHead(200, { "Content-Type": "application/json" })
					res.end(JSON.stringify({ status: "ok" }))
				} catch (error) {
					res.writeHead(500, { "Content-Type": "application/json" })
					res.end(JSON.stringify({ error: error.message }))
				}
			})
		} else {
			res.writeHead(404, { "Content-Type": "application/json" })
			res.end(JSON.stringify({ error: "Not Found" }))
		}
	})

	server.listen(PORT, HOST, () => {
		console.log(`Kilo Code Mobile Bridge listening on http://${HOST}:${PORT}`)
	})
}
