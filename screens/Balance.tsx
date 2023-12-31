import { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { StackScreenProps } from "@react-navigation/stack";
import { colors } from "../theme/colors";
import { Container } from "../shared/shared";
import { RootStackProps } from "../navigators/RootStack";
import {AmountSection, BalanceCardSection, ButtonSection} from "../components/Balance";
import { useNavigation } from "@react-navigation/native";

type BalanceProps = StackScreenProps<RootStackProps, 'Balance'>

export const BalanceContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  padding: 25px;
  flex: 1;
`

const Balance: FC<BalanceProps> = ({route}) => {
  const navigation = useNavigation<BalanceProps['navigation']>()

  const handlePress = () => {
    navigation.navigate('Home')
  }
  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance}/>
      <BalanceCardSection {...route?.params} />
      <ButtonSection onPress={handlePress} />
    </BalanceContainer>
  )
}

export default Balance