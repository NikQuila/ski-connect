import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { registerWithEmailAndPassword } from "../../firebase";
// utils
import { screens } from "../../utils/screens";
import { TouchableOpacity } from "react-native";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await registerWithEmailAndPassword("nik", email, password);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://www.clubskilaparva.cl/images/volvitos/copa_volvitos_0.jpg",
      }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <Layout style={styles.container}>
        <Text category="h1" style={styles.title}>
          Registro
        </Text>
        <Input
          label="Correo electrónico"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          label="Contraseña"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <Button onPress={() => handleRegister()}>Registrarse</Button>
        <View style={styles.row}>
          <Text>Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(screens.login)}>
            <Text style={styles.textLogIn}>Inicia Sesion</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    gap: 4,
  },
  textLogIn: {
    color: "blue",
  },
});
