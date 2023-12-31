import { FC } from 'react'
import styled from 'styled-components/native'
import { TextProps } from './types';

import { colors } from '../../theme/colors'

const StyledText = styled.Text`
  font-size: 32px;
  color: ${colors.white};
  text-align: left;
  font-family: Inter-Bold;
`;

export const BigText: FC<TextProps> = (props) => {
  return (
    <>
      <StyledText style={props.textStyles}>
        {props.children}
      </StyledText>
    </>
  )
}