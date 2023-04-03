import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
// utils
import { screens } from "../../utils/screens";
// firebase
import { sendPasswordReset } from "../../firebase";

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    sendPasswordReset(email);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://www.clubskilaparva.cl/images/volvitos/copa_volvitos_0.jpg",
      }}
      style={styles.backgroundImage}
    >
      <Layout style={styles.container}>
        <Text category="h1" style={styles.title}>
          Restablecer contraseña
        </Text>
        <Input
          label="Correo electrónico"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Button onPress={handleResetPassword}>Restablecer contraseña</Button>
        <Text style={styles.text}>
          ¿Ya tienes una cuenta?
          <Text
            style={styles.link}
            onPress={() => navigation.navigate(screens.login)}
          >
            Iniciar sesión
          </Text>
        </Text>
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
  text: {
    marginTop: 16,
    textAlign: "center",
  },
  link: {
    color: "#3366BB",
  },
});
