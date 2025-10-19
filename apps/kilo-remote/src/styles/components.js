// components.js — compact (VS Code–dense) version
import { StyleSheet } from 'react-native';

export const getChatInputStyles = (theme) => {
  const pickerSelectStyles = {
    inputIOS: {
      fontSize: 14,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 4,
      color: theme.accent,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 14,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 4,
      color: theme.accent,
      paddingRight: 30,
    },
    iconContainer: {
      top: 10,
      right: 12,
    },
  };

  const styles = StyleSheet.create({
    container: {
      padding: 6, // compact
      borderWidth: 1,
      borderColor: theme.border || theme.dim,
      borderRadius: 8, // slightly reduced
      margin: 6, // compact
      backgroundColor: theme.cardBackground || theme.background,
      shadowColor: theme.shadow || '#000',
      shadowOpacity: 0.08,
      shadowRadius: 2,
      elevation: 1,
    },
    textInput: {
      borderWidth: 0,
      padding: 8, // compact
      minHeight: 48, // smaller
      maxHeight: 120,
      textAlignVertical: 'top',
      color: theme.primaryText,
      fontFamily: theme.fonts.main,
      fontSize: 13,
      lineHeight: 18,
    },
    bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 6,
    },
    pickerContainer: {
      flex: 1,
      marginRight: 8,
    },
    icon: {
      paddingRight: 6,
    },
    sendButton: {
      padding: 6,
    },
    sendIcon: {
      color: theme.accent, // magenta action color
      fontSize: 16,
    },
    cancelButton: {
      padding: 6,
    },
    cancelIcon: {
      color: theme.error,
      fontSize: 16,
    },
  });

  return { ...styles, pickerSelectStyles };
};

export const getHeaderTitleStyles = (theme) => {
  return StyleSheet.create({
    title: {
      fontSize: 20, // compact
      fontWeight: '700',
      color: theme.primaryText,
      textShadowColor: theme.borderActive || 'transparent',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 3,
      lineHeight: 20,
    },
    subtitle: {
      fontSize: 11,
      color: theme.secondaryText,
      lineHeight: 14,
    },
    url: {
      fontSize: 11,
      color: theme.dim,
      lineHeight: 14,
    },
  });
};

export const getHomeScreenStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 14, // compact
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 12,
      color: theme.primary,
    },
    input: {
      width: '100%',
      height: 44,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 12,
      backgroundColor: theme.cardBackground,
      color: theme.primaryText,
      fontSize: 13,
    },
    button: {
      width: '100%',
      height: 42,
      backgroundColor: theme.accent,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '700',
    },
  });
};

export const getApiRequestMessageStyles = (theme) => {
  return StyleSheet.create({
    headerText: {
      color: theme.highlight,
      fontSize: 14,
      fontWeight: '600',
      lineHeight: 18,
    },
    icon: {
      color: theme.highlight,
      fontSize: 14,
    },
    content: {
      marginTop: 4,
      marginLeft: 12,
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.cardBackground,
    },
    codeText: {
      fontFamily: 'Menlo',
      fontSize: 12,
      color: theme.primaryText,
      lineHeight: 16,
    },
  });
};

export const getCommandMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.accent,
      fontSize: 14,
    },
    commandBox: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: theme.cardBackground,
      borderRadius: 6,
    },
    commandText: {
      fontFamily: 'monospace',
      fontSize: 13,
      color: theme.primaryText,
      lineHeight: 18,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopColor: theme.dim,
      borderTopWidth: 1,
      paddingVertical: 6,
      paddingHorizontal: 10,
    },
    footerText: {
      marginLeft: 6,
      color: theme.secondaryText,
      fontSize: 11,
    },
  });
};

export const getKiloSaidMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.secondary,
      fontSize: 14,
    },
    body: {
      color: theme.secondaryText,
      fontSize: 13,
      lineHeight: 18,
    },
    code_inline: {
      backgroundColor: theme.codeBlocks,
      padding: 2,
      borderRadius: 4,
      fontSize: 12,
    },
  });
};

/* ✅ Single correct version of getKiloQuestionMessageStyles */
export const getKiloQuestionMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.primary,
      fontSize: 14,
    },
    markdownContainer: {
      marginLeft: 2,
    },
    markdownBody: {
      color: theme.primaryText,
      fontSize: 13,
      lineHeight: 18,
    },
    code_inline: {
      backgroundColor: theme.codeBlocks,
      padding: 2,
      borderRadius: 4,
      fontSize: 12,
    },
    answersContainer: {
      marginTop: 6,
    },
    suggestionButton: {
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 6,
      paddingVertical: 6,
      paddingHorizontal: 8,
      marginBottom: 6,
      backgroundColor: theme.cardBackground,
    },
    suggestionText: {
      color: theme.highlight,
      fontSize: 13,
    },
  });
};

export const getReadFileMessageStyles = (theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.codeBlocks,
      padding: 6,
      borderRadius: 6,
    },
    icon: {
      color: theme.primaryText,
      fontSize: 14,
    },
    headerText: {
      color: theme.primaryText,
      fontSize: 13,
    },
    pathText: {
      color: theme.secondary,
      fontSize: 12,
    },
    approveButton: {
      backgroundColor: theme.accent,
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 6,
    },
    approveButtonText: {
      color: '#ffffff',
      fontSize: 13,
    },
    rejectButton: {
      backgroundColor: theme.error,
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 6,
    },
    rejectButtonText: {
      color: '#ffffff',
      fontSize: 13,
    },
  });
};

export const getTodoListMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.primary,
      fontSize: 14,
    },
    task: {
      fontSize: 13,
      marginVertical: 2,
      marginLeft: 12,
      lineHeight: 18,
      color: theme.primaryText,
    },
    toggleButton: {
      color: theme.accent,
      marginLeft: 12,
      marginTop: 6,
      fontSize: 12,
    },
  });
};

export const getCompletionResultMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.success,
      fontSize: 14,
    },
    markdownBody: {
      color: theme.primaryText,
      fontSize: 13,
      lineHeight: 18,
    },
    markdownParagraph: {
      marginBottom: 4,
    },
    markdownBullet: {
      color: theme.secondaryText,
    },
    markdownListItem: {
      color: theme.primaryText,
      fontSize: 13,
    },
    code_inline: {
      backgroundColor: theme.codeBlocks,
      padding: 2,
      borderRadius: 4,
      fontSize: 12,
    },
  });
};

export const getCheckpointMessageStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 2,
    },
    icon: {
      color: theme.highlight,
      fontSize: 12,
    },
    text: {
      color: theme.highlight,
      fontWeight: '600',
      marginHorizontal: 6,
      fontSize: 12,
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
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 8,
      marginHorizontal: 8,
      marginVertical: 4,
      shadowColor: theme.shadow || '#000',
      shadowOpacity: 0.06,
      shadowRadius: 2,
      elevation: 1,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    taskText: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.primaryText,
      flexShrink: 1,
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    metaText: {
      fontSize: 12,
      color: theme.secondaryText,
    },
    tokenRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    tokenText: {
      fontSize: 13,
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
      fontSize: 13,
      fontWeight: '600',
      color: theme.costText || theme.highlight,
    },
    icon: {
      marginRight: 6,
    },
    iconSmall: {
      marginRight: 4,
    },
  });
};

export const getPinnedMessageStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      backgroundColor: theme.cardBackground,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    icon: {
      marginRight: 8,
      color: theme.dim,
      fontSize: 14,
    },
    text: {
      fontSize: 18,
      fontWeight: '700',
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
  small: 11,
  medium: 13,
  large: 16,
  xlarge: 20,
};

export const getTextMessageStyles = (theme) => ({
  userMessage: {
    body: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.primaryText,
    },
  },
  kiloMessage: {
    body: {
      color: theme.secondaryText,
      fontSize: 13,
    },
    code_inline: {
      backgroundColor: theme.codeBlocks,
      color: theme.primaryText,
      padding: 2,
      borderRadius: 4,
      fontSize: 12,
    },
  },
  kiloGreeting: {
    color: theme.primaryText,
    marginBottom: 6,
    opacity: 0.9,
  },
});

export const textTreatments = {
  neonGlow: (color) => ({
    textShadowColor: color,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  }),
};

export const getMessageCardStyles = (theme) => {
  return StyleSheet.create({
    card: {
      backgroundColor: theme.background,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 4,
      marginHorizontal: 6,
      marginVertical: 3,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
    },
    headerText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.primaryText,
      flexShrink: 1,
    },
    icon: {
      marginRight: 6,
    },
    body: {
      marginTop: 4,
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
        fontSize: 13,
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: 18,
        tabSize: 4,
        hyphens: 'none',
      },
      'pre[class*="language-"]': {
        color: theme.primaryText,
        background: theme.codeBlocks || '#2d2d2d',
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        fontSize: 13,
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: 18,
        tabSize: 4,
        hyphens: 'none',
        padding: 8,
        margin: 4,
        overflow: 'auto',
        borderRadius: 6,
      },
      ':not(pre) > code[class*="language-"]': {
        background: theme.codeBlocks || '#2d2d2d',
        padding: '.08em',
        borderRadius: '.2em',
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
      padding: 6,
      marginVertical: 3,
      marginHorizontal: 6,
      borderRadius: 6,
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
      fontSize: 13,
      fontWeight: '700',
      color: theme.primaryText,
    },
    icon: {
      color: theme.primaryText,
      fontSize: 13,
    },
    pathContainer: {
      marginLeft: 12,
    },
    pathText: {
      color: theme.primaryText || '#C4FCDC',
      fontSize: 12,
    },
    markdownPath: {
      code_inline: {
        backgroundColor: theme.codeBlocks,
        color: theme.primaryText,
        padding: 2,
        borderRadius: 4,
        fontSize: 12,
      },
    },
    contentContainer: {
      marginTop: 6,
      marginLeft: 12,
    },
    markdownContent: {
      body: {
        color: theme.primaryText,
        fontSize: 13,
      },
    },
  });
};

export const getToolMessageStyles = (theme) => {
  return StyleSheet.create({
    icon: {
      color: theme.primaryText,
      fontSize: 14,
    },
  });
};
