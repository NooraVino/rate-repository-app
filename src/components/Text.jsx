import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
   
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
    margin: 7
  },
  colorPrimary: {
    color: theme.colors.primary,
    margin: 7
  
  },
  fontSizeSubheading: {
    fontWeight: theme.fontWeights.bold,
    margin: 7
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
    margin: 7,
    textAlign: 'center',

  },
  colorTextTab: {
    color: theme.colors.textWhite,
    fontWeight: theme.fontWeights.bold,
    margin: theme.marginTop.tab,
   
  },

  buttonStyle: {
    padding: 4,
    color: 'white',
    backgroundColor: theme.backgroundColor.primary,
    borderRadius: 4,
    margin: 7,
    textAlign: 'center',
    alignSelf: 'flex-start',
  },

  buttonStyleFlex: {
    padding: 4,
    color: 'white',
    backgroundColor: theme.backgroundColor.primary,
    borderRadius: 4,
    margin: 7,
    textAlign: 'center',
  },


});

const Text = ({ color, fontSize, fontWeight, style, buttonStyle, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'tab' && styles.colorTextTab,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold, 
    buttonStyle === 'button' && styles.buttonStyle,
    buttonStyle === 'buttonFlex' && styles.buttonStyleFlex,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;