export const streamMessages = async (callback, onComplete) => {
  try {
    const response = await fetch('http://localhost:3000/stream');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    const read = async () => {
      const { done, value } = await reader.read();
      if (done) {
        onComplete();
        return;
      }
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n\n');
      for (const line of lines) {
        if (line.startsWith('data:')) {
          const data = line.substring(5);
          if (data.trim()) {
            callback(JSON.parse(data));
          }
        }
      }
      read();
    };

    read();
  } catch (error) {
    console.error('Error streaming messages:', error);
    onComplete();
  }
};