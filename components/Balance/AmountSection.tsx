import { FC } from "react";
import styled from "styled-components/native";
import { AmountProps } from "./types";
import { RegularText, SmallText } from "../Texts";
import { colors } from "../../theme/colors";

const AmountSectionBg = styled.View`
  width: 100%;
  padding-top: 5px;
  align-items: center;
  flex: 1;
`;

const AmountSection: FC<AmountProps> = (props) => {
  return (
    <AmountSectionBg>
      <SmallText textStyles={{ color: colors.darkBlue, marginBottom: 15 }}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{ color: colors.darkBlue, fontSize: 28 }}>
        $ {props.balance}
      </RegularText>
    </AmountSectionBg>
  );
};

export default AmountSection;
