import styled from "styled-components/native";
import { ScreenWidth } from "../../shared/shared";
import { colors } from "../../theme/colors";

export const SendMoneySectionBg = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

export const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`;

export const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding: 0 25px;
`;

export const TextButton = styled.TouchableOpacity``;

export const SendMoneyContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0 10px 10px 0;
`;
