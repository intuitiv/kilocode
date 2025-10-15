import { StyleSheet } from 'react-native';

export const getChatInputStyles = (theme) => {
  return StyleSheet.create({
    container: {
      padding: 8,
      borderWidth: 1,
      borderColor: theme.border || theme.dim,
      borderRadius: 10,
      margin: 8,
      backgroundColor: theme.cardBackground || theme.background,
      shadowColor: theme.shadow || '#000',
      shadowOpacity: 0.12,
      shadowRadius: 4,
    },
    textInput: {
      borderWidth: 0,
      outlineStyle: 'none',
      padding: 10,
      minHeight: 60,
      textAlignVertical: 'top',
      color: theme.primaryText,
      fontFamily: theme.fonts.main,
    },
    bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    pickerContainer: {
      width: 130,
    },
    picker: {
      inputIOS: {
        fontSize: 14,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: theme.dim,
        borderRadius: 6,
        color: theme.primaryText,
        backgroundColor: theme.cardBackground,
      },
      inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: theme.dim,
        borderRadius: 6,
        color: theme.primaryText,
        backgroundColor: theme.cardBackground,
      },
    },
    icon: {
      paddingRight: 8,
    },
    sendButton: {
      padding: 8,
    },
    sendIcon: {
      color: theme.accent, // magenta action color
    },
    cancelButton: {
      padding: 8,
    },
    cancelIcon: {
      color: theme.error,
    },
  });
};

export const getHeaderTitleStyles = (theme) => {
  return StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.primary,
      textShadowColor: theme.borderActive || 'transparent',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 4,
    },
    subtitle: {
      fontSize: 12,
      color: theme.secondaryText,
    },
  });
};

export const getHomeScreenStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.primary,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: theme.cardBackground,
      color: theme.primaryText,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: theme.accent,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

export const getApiRequestMessageStyles = (theme) => {
  return StyleSheet.create({
    headerText: {
      color: theme.highlight,
      fontSize: 17,
      fontWeight: '600',
    },
    icon: {
      color: theme.highlight,
      fontSize: 17,
    },
    content: {
      marginTop: 4,
      marginLeft: 22,
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.cardBackground,
    },
    codeText: {
      fontFamily: 'Menlo',
      fontSize: 13,
      color: theme.primaryText,
    },
  });
};

export const getCommandMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.accent,
    },
    commandBox: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      backgroundColor: theme.cardBackground,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 8,
    },
    commandText: {
      fontFamily: 'monospace',
      fontSize: 15,
      color: theme.primaryText,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopColor: theme.dim,
      borderTopWidth: 1,
      paddingVertical: 6,
      paddingHorizontal: 14,
    },
    footerText: {
      marginLeft: 6,
      color: theme.secondaryText,
      fontSize: 12,
    },
  });
};

export const getKiloSaidMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.secondary,
    },
    body: {
      color: theme.secondaryText,
    },
    code_inline: {
      backgroundColor: theme.codeBlocks,
      padding: 2,
      borderRadius: 4,
    },
  });
};

/* ✅ Single correct version of getKiloQuestionMessageStyles */
export const getKiloQuestionMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.primary,
    },
    markdownContainer: {
      marginLeft: 2,
    },
    markdownBody: {
      color: theme.primaryText,
    },
    code_inline: {
      backgroundColor: theme.codeBlocks,
      padding: 2,
      borderRadius: 4,
    },
    answersContainer: {
      marginTop: 8,
    },
    suggestionButton: {
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 10,
      marginBottom: 6,
      backgroundColor: theme.cardBackground,
    },
    suggestionText: {
      color: theme.highlight,
    },
  });
};

export const getReadFileMessageStyles = (theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.codeBlocks,
    },
    icon: {
      color: theme.primaryText,
    },
    headerText: {
      color: theme.primaryText,
    },
    pathText: {
      color: theme.secondary,
    },
    approveButton: {
      backgroundColor: theme.accent,
    },
    approveButtonText: {
      color: '#ffffff',
    },
    rejectButton: {
      backgroundColor: theme.error,
    },
    rejectButtonText: {
      color: '#ffffff',
    },
  });
};

export const getTodoListMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.primary,
    },
    task: {
      fontSize: 14,
      marginVertical: 2,
      marginLeft: 16,
      lineHeight: 20,
      color: theme.primaryText,
    },
    toggleButton: {
      color: theme.accent,
      marginLeft: 16,
      marginTop: 6,
      fontSize: 13,
    },
  });
};

export const getCompletionResultMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.success,
    },
    markdownBody: {
      color: theme.primaryText,
      fontSize: 14,
      lineHeight: 20,
    },
    markdownParagraph: {
      marginBottom: 4,
    },
    markdownBullet: {
      color: theme.secondaryText,
    },
    markdownListItem: {
      color: theme.primaryText,
    },
    code_inline: {
      backgroundColor: theme.codeBlocks,
      padding: 2,
      borderRadius: 4,
    },
  });
};

export const getCheckpointMessageStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: theme.highlight,
    },
    text: {
      color: theme.highlight,
      fontWeight: '600',
      marginHorizontal: 6,
    },
    gradient: {
      flex: 1,
      height: 2,
      borderRadius: 1,
      backgroundColor: theme.border,
    },
  });
};

export const getTaskItemStyles = (theme) => {
  return StyleSheet.create({
    card: {
      backgroundColor: theme.cardBackground,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 14,
      marginHorizontal: 12,
      marginVertical: 8,
      shadowColor: theme.shadow || '#000',
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    taskText: {
      fontSize: 17,
      fontWeight: '600',
      color: theme.primaryText,
      flexShrink: 1,
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    metaText: {
      fontSize: 14,
      color: theme.secondaryText,
    },
    tokenRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    tokenText: {
      fontSize: 14.5,
      color: theme.primaryText,
    },
    tokenLabel: {
      fontWeight: '500',
      color: theme.secondaryText,
    },
    tokenTotal: {
      fontWeight: '700',
      color: theme.highlight,
    },
    costRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    costText: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.costText || theme.highlight,
    },
    icon: {
      marginRight: 8,
    },
    iconSmall: {
      marginRight: 6,
    },
  });
};

export const getPinnedMessageStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: theme.cardBackground,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    icon: {
      marginRight: 10,
      color: theme.highlight,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.primaryText,
    },
  });
};

export const getChatViewStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.background,
    },
    inputContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.cardBackground,
      borderTopWidth: 1,
      borderTopColor: theme.border,
    },
  });
};

export const modeStyles = {
  architect: {
    accent: '#FF4473',
    font: 'IBMPlexSerif-Regular',
  },
  code: {
    accent: '#78DCAA',
    font: 'JetBrainsMono-Regular',
  },
  debug: {
    accent: '#FF5555',
    font: 'VictorMono-Regular',
  },
  task: {
    accent: '#50FA7B',
    font: 'Inter-Regular',
  },
  explain: {
    accent: '#FFD166',
    font: 'Sora-Regular',
  },
};

export const fonts = {
  monospace: 'JetBrains Mono',
  codingFuturistic: 'Victor Mono',
  geometricSans: 'Sora',
  modernSerif: 'IBM Plex Serif',
  playfulNerdTitle: 'Orbitron',
  alternativeNerdyTouch: 'Share Tech Mono',
};

export const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export const getTextMessageStyles = (theme) => ({
  userMessage: {
    body: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.primaryText,
    },
  },
  kiloMessage: {
    body: {
      color: theme.secondaryText,
    },
    code_inline: {
      backgroundColor: theme.codeBlocks,
      color: theme.primaryText,
      padding: 2,
      borderRadius: 4,
    },
  },
  kiloGreeting: {
    color: theme.primaryText,
    marginBottom: 8,
    opacity: 0.85,
  },
});

export const textTreatments = {
  neonGlow: (color) => ({
    textShadowColor: color,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  }),
};

export const getMessageCardStyles = (theme) => {
  return StyleSheet.create({
    card: {
      backgroundColor: theme.background,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.accent,
      padding: 14,
      marginHorizontal: 12,
      marginVertical: 8,

      // ✨ Neon glow magic:
      shadowColor: theme.accent,
      shadowOpacity: 0.9,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 0 },

      // Web + Android fallback
      elevation: 2,
      ...(true
        ? { filter: `drop-shadow(0 0 1px ${theme.accent})` }
        : {}),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    headerText: {
      fontSize: 17,
      fontWeight: '600',
      color: theme.primaryText,
      flexShrink: 1,
    },
    icon: {
      marginRight: 12,
      color: theme.accent,
    },
    body: {
      marginTop: 8,
    },
  });
};


export const getCodeBlockStyles = (theme) => {
  // NOTE: These are CSS-in-JS style shapes meant for markdown renderers that accept style objects.
  return StyleSheet.create({
    icon: {
      color: theme.primaryText,
    },
    codeStyle: {
      'code[class*="language-"]': {
        color: theme.primaryText,
        background: 'none',
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        fontSize: 14,
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: 1.5,
        tabSize: 4,
        hyphens: 'none',
      },
      'pre[class*="language-"]': {
        color: theme.primaryText,
        background: theme.codeBlocks || '#2d2d2d',
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        fontSize: 14,
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: 1.5,
        tabSize: 4,
        hyphens: 'none',
        padding: 10,
        margin: 5,
        overflow: 'auto',
        borderRadius: 5,
      },
      ':not(pre) > code[class*="language-"]': {
        background: theme.codeBlocks || '#2d2d2d',
        padding: '.1em',
        borderRadius: '.3em',
        whiteSpace: 'normal',
      },
      comment: {
        color: '#999',
      },
      'block-comment': {
        color: '#999',
      },
      string: {
        color: theme.success || '#7ec699',
      },
      keyword: {
        color: theme.accent || '#cc99cd',
      },
      number: {
        color: theme.warning || '#f08d49',
      },
      function: {
        color: theme.secondary || '#67cdcc',
      },
      'class-name': {
        color: theme.warning || '#f08d49',
      },
      punctuation: {
        color: theme.primaryText,
      },
    },
  });
};

export const getFileOperationMessageStyles = (theme) => {
  return StyleSheet.create({
    container: {
      padding: 8,
      marginVertical: 4,
      marginHorizontal: 8,
      borderRadius: 8,
      backgroundColor: theme.cardBackground,
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: theme.border,
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
        backgroundColor: theme.codeBlocks,
        color: theme.primaryText,
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
        color: theme.primaryText,
      },
    },
  });
};

export const getToolMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.primaryText,
    },
  });
};
