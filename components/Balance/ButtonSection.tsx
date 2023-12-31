import { FC } from "react";
import { Linking } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RegularButton } from "../Buttons/RegularButton";
import { colors } from "../../theme/colors";
import { RegularText } from "../Texts";
import { ButtonSectionProps } from "./types";

const ButtonSectionBg = styled.View`
  width: 100%;
  align-items: center;
  flex: 3;
`;

const ButtonSection: FC<ButtonSectionProps> = ({onPress}) => {
  return (
    <ButtonSectionBg>
      <RegularButton btnStyles={{ width: "50%", marginTop: 10 }} onPress={() => onPress()}>
        Cancel <Ionicons size={17} name="card" color={colors.white} />
      </RegularButton>
      <RegularText
        textStyles={{
          fontSize: 18,
          color: colors.darkBlue,
          padding: 30,
          paddingBottom: 0,
          textAlign: "center",
        }}
      >
        We hope that our services helps you to keep your asstets safe and sound!{" "}
      </RegularText>
      <RegularText
        onPress={() => Linking.openURL("https://github.com/EiffelIKE")}
        textStyles={{
          fontSize: 18,
          color: colors.lightBlue,
          padding: 20,
          paddingBottom: 0,
          textAlign: "center",
          textDecorationLine: "underline",
        }}
      >
        Visit our web page for more info.{" "}
      </RegularText>
    </ButtonSectionBg>
  );
};

export default ButtonSection;
