import { CardProps } from "../Cards/types";

export interface AmountProps {
  balance: number;
}

export interface BalanceProps extends CardProps {}

export interface ButtonSectionProps {
  onPress: () => void
}