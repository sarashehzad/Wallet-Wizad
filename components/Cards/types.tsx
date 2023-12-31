import { ImageSourcePropType, ImageStyle, StyleProp, ViewComponent, GestureResponderEvent } from "react-native";
export interface CardProps {
  id: number;
  accountNum: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
  noMargin?: boolean;
  onPress?: ((id:number) => void);
}

export interface CardSectionProps {
  data: Array<CardProps>;
  onPress?: ((id:number) => void);
}