import { FC } from "react";
import styled from "styled-components/native";
import { BalanceProps } from "./types";
import Card from "../Cards/Card";

const BalanceCardSectionBg = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;
const BalanceCardSection: FC<BalanceProps> = (props) => {
  return (
    <BalanceCardSectionBg>
      <Card noMargin={true} {...props} />
    </BalanceCardSectionBg>
  );
};

export default BalanceCardSection;
