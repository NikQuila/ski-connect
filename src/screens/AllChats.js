// screens/AllChats.js
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { screens } from "../utils/screens";
// components
import BackgroundWrapper from "../components/BackgroundWrapper";

const chatData = [
  {
    id: "1",
    name: "Sildi Xhepa",
    avatar:
      "https://www.clubskilaparva.cl/images/entrenadores-2020/Silldl_Xhepa.jpg",
    lastMessage: "Hola, ¿cómo estás?",
  },
  {
    id: "2",
    name: "Walter Alca",
    avatar:
      "https://www.clubskilaparva.cl/images/entrenadores-2020/Walter_Alca.jpg",
    lastMessage: "Recuerda la práctica de mañana.",
  },
  {
    id: "3",
    name: "U-12 Grupo A",
    avatar:
      "https://www.clubskilaparva.cl/planen/resources/uploads/prensa/multimedia/galeria/images/medium/24af2c216c9c5391b9cebe26be8f4002.jpeg",
    lastMessage: "Al gym.",
  },
  // Agrega más conversaciones aquí
];

export default function AllChats({ navigation }) {
  const handleChatPress = (chatName) => {
    console.log("Chat seleccionado:", chatName);
    navigation.navigate(screens.chat, { chatName });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={({ item }) => (
          <ChatListItem
            chat={item}
            onPress={() => handleChatPress(item.name)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
