import styled from "styled-components/native";

export const TransactionBackground = styled.View`
  width: 100%;
  padding: 5px 25px 0;
  flex: 2;

`
export const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  width: 100%;
`

export const TransactionList = styled.FlatList`
  width: 100%;
`

export const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex: 2;
`
export const RightView = styled.View`
  flex: 1;
`