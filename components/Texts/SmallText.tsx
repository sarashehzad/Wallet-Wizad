import { FC } from 'react'
import styled from 'styled-components/native'
import { TextProps } from './types';

import { colors } from '../../theme/colors'

const StyledText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: Inter-Regular;
`;

export const SmallText: FC<TextProps> = (props) => {
  return (
    <>
      <StyledText style={props.textStyles}>
        {props.children}
      </StyledText>
    </>
  )
}