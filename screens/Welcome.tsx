import { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../theme/colors";
import { Container } from "../shared/shared";
import { BigText } from "../components/Texts/BigText";
import { SmallText } from "../components/Texts/SmallText";
import { RegularButton } from "../components/Buttons/RegularButton";
import { RootStackProps } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

import topBg from "../assets/backgrounds/bg.png";

type Props = StackScreenProps<RootStackProps, 'Welcome'>

const WelcomeContainer = styled(Container)`
  background-color: ${colors.darkBlue};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Welcome: FC<Props> = ({navigation}) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={topBg} style={{ resizeMode: "stretch" }} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best Way to track your money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment methods, connects your money to your friends or family!
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Get Started!
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
