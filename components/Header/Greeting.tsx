import { FC } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";
import { colors } from "../../theme/colors";
import { RegularText, SmallText } from "../Texts";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

interface GreeTingProps {
  mainText: string;
  secondText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  secondTextStyles?: StyleProp<TextStyle>
}

const Greeting: FC<GreeTingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {
            color: colors.darkBlue,
            fontSize: 22,
          },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText
        textStyles={[
          {
            color: colors.grayDark
          },
          props.secondTextStyles,
        ]}
      >
        {props.secondText}
      </SmallText>
    </StyledView>
  )
}

export default Greeting