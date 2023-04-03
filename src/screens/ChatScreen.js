import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
// Components
import BackgroundWrapper from "../components/BackgroundWrapper";

export default function ChatScreen({ route }) {
  console.log(route.params.chatName);
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Hola, ¿cómo estás?",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Entrenador",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
    {
      _id: 2,
      text: "¡Estoy bien, gracias!",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "Esquiador",
        avatar: "https://placeimg.com/140/140/any",
      },
    },
  ]);

  const onSend = (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderUsernameOnMessage={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
