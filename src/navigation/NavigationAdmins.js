import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
// screens
import HomeScreen from "../screens/Athlete/HomeScreen";
import CalendarScreen from "../screens/Athlete/CalendarScreen";
import UserScreen from "../screens/Athlete/UserScreen";
import AllAthletesScreen from "../screens/Admins/AllAthletescreens";
import CreateActivityScreen from "../screens/Coaches/CreateActivityScreen";
import AdminHomePageScreen from "../screens/Admins/AdminHomePageScreen";

// nested navs
import NavigationChat from "./NavigationChat";
import NavigationAthletes from "./NavigationAthletes";
// utils
import { screens } from "../utils/screens";
// gradient

import fonts from "../utils/fonts";
import AllCoachesScreen from "../screens/Admins/AllCoachesScreen";

const Tab = createBottomTabNavigator();

function NavigationAdmins() {
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
            } else if (route.name === screens.coaches.nested) {
              iconName = "people-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={screens.home}
          component={AdminHomePageScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={screens.coaches.nested}
          component={NavigationAthletes}
          options={{ headerShown: false, title: "Tus Atletas" }}
        />
        <Tab.Screen
          name={screens.coaches.createActivity}
          component={AllCoachesScreen}
          options={{ headerShown: false, title: "Entrenadores" }}
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

export default NavigationAdmins;
