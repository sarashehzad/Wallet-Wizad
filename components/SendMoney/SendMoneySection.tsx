import { FC, useRef } from "react";
import BottomSheet from "reanimated-bottom-sheet";
import { RegularText, SmallText } from "../Texts";
import { colors } from "../../theme/colors";
import { SendMoneySectionProps } from "./types";
import {
  SendMoneyRow,
  SendMoneyList,
  SendMoneySectionBg,
  TextButton,
} from "./styles";
import SendMoney from "./SendMoney";

const SendMoneySection: FC<SendMoneySectionProps> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);

  const renderContent = () => {
    return (
      <SendMoneySectionBg>
        <SendMoneyRow style={{ marginBottom: 25 }}>
          <RegularText textStyles={{ fontSize: 19, color: colors.darkBlue }}>
            Send money to:
          </RegularText>
          <TextButton onPress={() => alert("Add friends")}>
            <SmallText
              textStyles={{ fontWeight: "bold", color: colors.lightBlue }}
            >
              + Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={props.data}
          contentContainerStyle={{
            alignItems: "flex-start",
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <SendMoney {...item} />}
        />
      </SendMoneySectionBg>
    );
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={1}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SendMoneySection;
