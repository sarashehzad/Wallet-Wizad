import { FC } from "react";
import { SendMoneyProps } from "./types";
import { colors } from "../../theme/colors";
import { SendMoneyContainer } from "./styles";
import { SmallText, RegularText } from "../Texts";
import Profile from "../Header/Profile";

const SendMoney: FC<SendMoneyProps> = (props) => {
  return (
    <SendMoneyContainer
      underlayColor={colors.darkBlue}
      style={{ backgroundColor: props.background }}
      onPress={() => alert("Send Money to...!")}
    >
      <>
        <Profile img={props.img} imgContainerStyle={{ marginBottom: 10 }} />
        <SmallText
          textStyles={{
            textAlign: "left",
            color: colors.white,
            fontSize: 12,
          }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{
            textAlign: "left",
            color: colors.white,
            fontSize: 13,
          }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyContainer>
  );
};

export default SendMoney;
