import { createStackNavigator } from "@react-navigation/stack";
// utils
import { screens } from "../utils/screens";
import CreateAthleteScreen from "../screens/Coaches/CreateAthleteScreen";
import AllAthletesScreen from "../screens/Admins/AllAthletescreens";

const ChatStack = createStackNavigator();

function NavigationAthletes() {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen
        name={screens.coaches.yourKids}
        component={AllAthletesScreen}
      />
      <ChatStack.Screen
        name={screens.coaches.createKId}
        component={CreateAthleteScreen}
      />
    </ChatStack.Navigator>
  );
}

export default NavigationAthletes;
