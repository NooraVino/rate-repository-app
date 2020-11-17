import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    marginTab: theme.margin.tab
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
    margin: 4
  },
  colorPrimary: {
    color: theme.colors.primary,
    margin: 4
  
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
    margin: 4
  },
  colorTextTab: {
    color: theme.colors.textWhite,
   
  },
  marginTab: {
    margin: theme.margin.tab
  },
  buttonStyle: {
    padding: 4,
    color: 'white',
    backgroundColor: theme.backgroundColor.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    margin: 4
  },


});

const Text = ({ color, fontSize, fontWeight, style, marginTab, buttonStyle, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'tab' && styles.colorTextTab,
    fontSize === 'subh eading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    marginTab === 'margin' && styles.marginTab,
    buttonStyle === 'button' && styles.buttonStyle,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;