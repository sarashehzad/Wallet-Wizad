import { FC } from "react";
import styled from "styled-components/native";
import Card from "./Card";
import { CardSectionProps } from "./types";

const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`

const CardSection: FC<CardSectionProps> = (props) => {
  return (
    <CardList 
      data={props.data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 25,
        alignItems: 'center',
      }}
      keyExtractor={({id}: any) => id.toString()}
      renderItem={({item}: any) => <Card {...item} onPress={props.onPress}/>}
    />
  )
}

export default CardSection