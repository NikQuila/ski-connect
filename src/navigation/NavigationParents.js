import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
// screens
import HomeScreen from "../screens/Athlete/HomeScreen";
import CalendarScreen from "../screens/Athlete/CalendarScreen";
import UserScreen from "../screens/Athlete/UserScreen";
import ChooseChildScreen from "../screens/Parents/ChooseChildScreen";
// utils
import { screens } from "../utils/screens";
// gradient

import fonts from "../utils/fonts";

const Tab = createBottomTabNavigator();

function NavigationParents() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleStyle: {
            fontFamily: fonts.poppinsSemiBold,
          },
          tabBarIcon: ({ size, color }) => {
            let iconName;

            if (route.name === screens.home) {
              iconName = "home-outline";
            } else if (route.name === screens.calendar) {
              iconName = "calendar-outline";
            } else if (route.name === screens.nestedChats) {
              iconName = "chatbubble-ellipses-outline";
            } else if (route.name === screens.user) {
              iconName = "person-circle-outline";
            } else if (route.name === screens.chooseChild) {
              iconName = "apps-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={screens.chooseChild}
          component={ChooseChildScreen}
          options={{ headerShown: false, title: "Atletas" }}
        />
        <Tab.Screen
          name={screens.home}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={screens.calendar}
          component={CalendarScreen}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name={screens.user}
          component={UserScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationParents;
