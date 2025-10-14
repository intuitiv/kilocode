export const messageStyles = {
  kiloSpeaks: {
    variants: [
      '💬 > [KILO OUTPUT]',
      '🔹 *Kilo whispers through the datastream...*',
    ],
  },
  kiloThinks: {
    variants: ['🤔 :: compiling thoughts ::', '⚡ *Neural circuits buzzing...*'],
  },
  createdFile: {
    variants: [
      '✨ 📁 + touch <filename>',
      '🪄 *Kilo conjured <filename> from raw bits!*',
    ],
  },
  updatedFile: {
    variants: ['🔧 ⚙️ patch <filename>', '🧠 *Refined logic — now optimized.*'],
  },
  deletedFile: {
    variants: ['💣 🗑 rm -rf <filename>', '🫥 *<filename> erased from reality.*'],
  },
  renamedFile: {
    variants: ['🎭 mv <old> → <new>', '🔄 *<old> now masquerades as <new>.*'],
  },
  savedChanges: {
    variants: ['💾 write() successful', '🌙 *Data crystallized and saved.*'],
  },
  runningCommand: {
    variants: ['🚀 $ <command>', '⚙️ *Engines roaring... executing.*'],
  },
  commandSuccess: {
    variants: ['✅ exit code 0', '🌟 *Smooth execution.*'],
  },
  commandFailed: {
    variants: ['💀 exit code 1', '⚡ *Error pulse detected.*'],
  },
  taskAdded: {
    variants: ['🧠 #TODO: <task>', '📜 *New mission logged.*'],
  },
  taskUpdated: {
    variants: ['🔧 ~ task.refresh()', '♻️ *Progress evolving...*'],
  },
  taskComplete: {
    variants: ['🎉 [✓] done()', '💚 *Objective achieved.*'],
  },
  allTasksDone: {
    variants: [
      '🌌 #TODO list → null',
      '🕊 *System calm. Awaiting new directive.*',
    ],
  },
};

export const getTextMessageStyles = (theme) => ({
  userMessage: {
    body: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
    },
  },
  kiloMessage: {
    body: {
      color: theme.text,
    },
    code_inline: {
      backgroundColor: theme.codeBackground,
      color: theme.codeText,
      padding: 2,
      borderRadius: 4,
    },
  },
  kiloGreeting: {
    color: theme.text,
    marginBottom: 8,
    opacity: 0.7,
  },
});

export const getFileOperationMessageStyles = (theme) => ({
  container: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: theme.secondaryBackground,
    alignSelf: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.primaryText,
  },
  pathContainer: {
    marginLeft: 16,
  },
  markdownPath: {
    code_inline: {
      backgroundColor: theme.codeBackground,
      color: theme.codeText,
      padding: 2,
      borderRadius: 4,
    },
  },
  contentContainer: {
    marginTop: 8,
    marginLeft: 16,
  },
  markdownContent: {
    body: {
      color: theme.text,
    },
  },
});