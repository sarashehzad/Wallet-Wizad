import { ReactNode } from "react";
import { StyleProp, TextStyle, TextProps as RNTextProps } from "react-native";

export interface TextProps extends RNTextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode
}