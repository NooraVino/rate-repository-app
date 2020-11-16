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
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  colorTextTab: {
    color: theme.colors.tab,
  },
  marginTab: {
    margin: theme.margin.tab
  },


});

const Text = ({ color, fontSize, fontWeight, style, marginTab, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'tab'&& styles.colorTextTab,
    fontSize === 'subh eading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    marginTab === 'margin' && styles.marginTab,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;