import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import LoginScreen from "../screens/Auth/Login";
import RegisterScreen from "../screens/Auth/Register";
import HomeScreen from "../screens/Athlete/HomeScreen";
import ResetPasswordScreen from "../screens/Auth/ResetPasswordScreen";
// Utils
import { screens } from "../utils/screens";

const Stack = createStackNavigator();

const NavigationAuth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screens.login} component={LoginScreen} />
        <Stack.Screen name={screens.register} component={RegisterScreen} />
        <Stack.Screen
          name={screens.resetPassword}
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationAuth;
