import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { Welcome, Home, Balance } from "../screens";

import { colors } from "../theme/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";

import avatar from "../assets/avatar/avatar.png";
import { CardProps } from "../components/Cards/types";

export type RootStackProps = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps
};

const Stack = createStackNavigator<RootStackProps>();

const RootStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.grayLight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.darkBlue,
          headerLeftContainerStyle: {
            paddingHorizontal: 10,
          },
          headerRightContainerStyle: {
            paddingHorizontal: 25,
          },
          headerRight: () => (
            <Profile
              img={avatar}
              imgStyle={{ resizeMode: "cover" }}
              imgContainerStyle={{
                backgroundColor: colors.lightBlue,
              }}
            />
          ),
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Sara!"
                secondText="Welcome again"
                {...props}
              />
            ),
          }}
        />
        <Stack.Screen 
          name="Balance"
          component={Balance}
          options={({route}) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerBackImage: (props) => (
              <Ionicons
                {...props} 
                name="chevron-back"
                size={25}
                color={colors.darkBlue}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
