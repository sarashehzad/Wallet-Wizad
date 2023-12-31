import { FC } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TransactionSectionProps } from "./types";
import { RegularText, SmallText } from "../Texts";
import { colors } from "../../theme/colors";
import {
  TransactionBackground,
  TransactionList,
  TransactionRow,
} from "./styles";
import Transaction from "./Transaction";

const TransactionSection: FC<TransactionSectionProps> = (props) => {
  return (
    <TransactionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 19, color: colors.darkBlue }}>
          Transaction
        </RegularText>
        <SmallText textStyles={{ color: colors.darkBlue }}>
          Recent
          <Ionicons name="caret-down" size={13} color={colors.grayDark} />
        </SmallText>
      </TransactionRow>
      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <Transaction {...item} />}
      />
    </TransactionBackground>
  );
};

export default TransactionSection;
