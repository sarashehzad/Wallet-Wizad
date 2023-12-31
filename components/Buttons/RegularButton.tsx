import { FC } from 'react';
import styled from 'styled-components/native';

import { colors } from '../../theme/colors';
import { RegularText } from '../Texts';

import { ButtonProps } from './types';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.mainOrange};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

export const RegularButton: FC<ButtonProps> = (props) => {

  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles} >
      <RegularText textStyles={props.textStyles}>
        {props.children}
      </RegularText>
    </ButtonView>
  )
}