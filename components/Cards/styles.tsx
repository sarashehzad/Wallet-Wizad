import styled from "styled-components/native";
import { colors } from "../../theme/colors";
import { ScreenWidth } from "../../shared/shared";

export const CardBackGround = styled.ImageBackground`
  height: 88%;
  width: ${ScreenWidth * 0.71}px;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
`;

export const CardTouch = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

export const TouchView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 80%;
  flex: 1;
`;
