import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
// screens
import HomeScreen from "../screens/Athlete/HomeScreen";
import CalendarScreen from "../screens/Athlete/CalendarScreen";
import UserScreen from "../screens/Athlete/UserScreen";
// nested navs
import NavigationChat from "./NavigationChat";
// utils
import { screens } from "../utils/screens";
// gradient

import fonts from "../utils/fonts";

const Tab = createBottomTabNavigator();

function NavigationApp() {
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
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
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
        {/* <Tab.Screen
          options={{ title: "Chat" }}
          name={screens.nestedChats}
          component={NavigationChat}
        /> */}
        <Tab.Screen
          name={screens.user}
          component={UserScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationApp;
