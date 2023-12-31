import { FC } from "react";
import { View } from "react-native";
import { TransactionProps } from "./types";
import { RegularText, SmallText } from "../Texts";
import { colors } from "../../theme/colors";
import { TransactionRow, LeftView, RightView } from "./styles";
import TransactionIcon from "./TransactionIcon";

const Transaction: FC<TransactionProps> = (props) => {
  return (
    <TransactionRow style={{ marginBottom: 25 }}>
      <LeftView>
        <TransactionIcon
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 10 }}>
          <RegularText
            textStyles={{
              color: colors.darkBlue,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            {props.title}
          </RegularText>
          <SmallText
            textStyles={{
              color: colors.grayDark,
              textAlign: "left",
            }}
          >
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          textStyles={{
            color: colors.darkBlue,
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          {props.amount}
        </RegularText>
        <SmallText
          textStyles={{
            textAlign: "right",
            color: colors.grayDark,
          }}
        >
          {props.date}
        </SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default Transaction;
