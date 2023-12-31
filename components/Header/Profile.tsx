import { FC } from "react";
import styled from "styled-components/native";
import {
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { StyledView, StyledImg } from "./styles";

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FC<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
      <StyledImg style={props.imgStyle} source={props.img} />
    </StyledView>
  );
};

export default Profile;
