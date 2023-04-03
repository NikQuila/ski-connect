import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
// firebase
import { logInWithEmailAndPassword } from "../../firebase";
// utils
import { screens } from "../../utils/screens";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import CustomButton from "../../components/CustomButton";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    await logInWithEmailAndPassword(email, password);
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
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://www.clubskilaparva.cl/cloudinary/f_auto,q_auto/https://www.clubskilaparva.cl/images/logo.png",
              height: 150,
              width: 150,
            }}
          />
          <Text style={styles.subTitle}>By Ski Connect</Text>
        </View>
        <View style={styles.form}>
          <Input
            label="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={styles.input}
            textStyle={{ fontFamily: fonts.poppinsRegular }}
          />
          <Input
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            style={styles.input}
            textStyle={{ fontFamily: fonts.poppinsRegular }}
            secureTextEntry
          />
          {/* <Button onPress={() => handleLogin()}>Log in</Button> */}
          <CustomButton
            title={"Iniciar sesion"}
            backgroundColor={colors.lightBlue}
            fontSize={16}
            height={40}
            width={290}
            onPress={handleLogin}
            textColor="white"
          />
          {error && <Text style={styles.error}>{error}</Text>}
          <View style={styles.row}>
            <Text style={styles.text}>Don't have an account?</Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate(screens.register)}
            >
              Register
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate(screens.resetPassword)}
          >
            Olvide mi contraseña
          </Text>
        </View>
      </Layout>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ajusta la opacidad según
  },
  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
  subTitle: {
    marginTop: 4,
    fontSize: 12,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 10,
    padding: 4,
    fontFamily: fonts.poppinsSemiBold,
  },
  form: {
    width: "80%",
  },
  input: {
    marginBottom: 16,
    fontFamily: fonts.poppinsRegular,
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
  text: {
    textAlign: "center",
    fontFamily: fonts.poppinsRegular,
  },
  link: {
    color: "#3366BB",
    fontFamily: fonts.poppinsRegular,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    gap: 4,
    marginTop: 16,
    alignSelf: "center",
  },
});
