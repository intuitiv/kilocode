import { StyleSheet } from 'react-native';

export const getChatInputStyles = (theme) => {
  return StyleSheet.create({
    container: {
      padding: 8,
      borderWidth: 1,
      borderColor: theme.accent,
      borderRadius: 10,
      margin: 8,
      backgroundColor: theme.background,
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
        backgroundColor: theme.background,
      },
      inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: theme.dim,
        borderRadius: 6,
        color: theme.primaryText,
        backgroundColor: theme.background,
      },
    },
    icon: {
      paddingRight: 8,
    },
    sendButton: {
      padding: 8,
    },
    sendIcon: {
      color: theme.accent,
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
      color: theme.primaryText,
    },
    subtitle: {
      fontSize: 12,
      color: theme.dim,
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
      color: theme.primaryText,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: theme.dim,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: theme.background,
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
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

export const getApiRequestMessageStyles = (theme) => {
  return StyleSheet.create({
    headerText: {
      color: theme.dim,
      fontSize: 17,
      fontWeight: '600',
    },
    icon: {
      color: theme.dim,
      fontSize: 17,
    },
    content: {
      marginTop: 4,
      marginLeft: 22,
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.dim,
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
      color: theme.primaryText,
    },
    commandBox: {
      paddingHorizontal: 16,
      paddingVertical: 10,
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
      color: theme.dim,
      fontSize: 12,
    },
  });
};

export const getKiloSaidMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.primaryText,
    },
    body: {
      color: theme.secondary,
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
      color: theme.primaryText,
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
      borderColor: theme.dim,
      borderWidth: 1,
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 10,
      marginBottom: 6,
    },
    suggestionText: {
      color: theme.primaryText,
    },
  });
};



export const getTodoListMessageStyles = (theme) => {
  return StyleSheet.create({
    title: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.primaryText,
    },
    task: {
      fontSize: 14,
      marginVertical: 2,
      marginLeft: 16,
      lineHeight: 20,
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
      color: theme.primaryText,
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
      color: theme.accent,
    },
    text: {
      color: theme.accent,
      fontWeight: '600',
      marginHorizontal: 6,
    },
    gradient: {
      flex: 1,
      height: 2,
      borderRadius: 1,
    },
  });
};

export const getTaskItemStyles = (theme) => {
  return StyleSheet.create({
    card: {
      backgroundColor: theme.background,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.dim,
      padding: 14,
      marginHorizontal: 12,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
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
      color: theme.dim,
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
      color: theme.primaryText,
    },
    tokenTotal: {
      fontWeight: '700',
      color: theme.accent,
    },
    costRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    costText: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.success,
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
      backgroundColor: theme.background,
      borderBottomWidth: 1,
      borderBottomColor: theme.dim,
    },
    icon: {
      marginRight: 10,
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
      backgroundColor: theme.background,
      borderTopWidth: 1,
      borderTopColor: theme.dim,
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
      color: theme.text,
    },
  },
  kiloMessage: {
    body: {
      color: theme.secondary,
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
      borderColor: theme.dim,
      padding: 14,
      marginHorizontal: 12,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
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
      marginRight: 8,
    },
    body: {
      marginTop: 8,
    },
  });
};
export const getCodeBlockStyles = (theme) => {
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
    icon: {
      color: theme.primaryText,
    },
    pathContainer: {
      marginLeft: 16,
    },
    pathText: {
      color: theme.secondary,
    },
    contentContainer: {
      marginTop: 8,
      marginLeft: 16,
    },
  });
};