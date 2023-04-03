import { createStackNavigator } from "@react-navigation/stack";
// utils
import { screens } from "../utils/screens";
import AllChats from "../screens/AllChats";
import ChatScreen from "../screens/ChatScreen";

const ChatStack = createStackNavigator();

function NavigationChat() {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen name={screens.allChats} component={AllChats} />
      <ChatStack.Screen name={screens.chat} component={ChatScreen} />
    </ChatStack.Navigator>
  );
}

export default NavigationChat;
