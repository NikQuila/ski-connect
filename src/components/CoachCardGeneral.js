import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import fonts from "../utils/fonts";
import colors from "../utils/colors";
import CustomButton from "./CustomButton";

const CoachCardGeneral = ({ coach }) => {
  const { name, rol, category, imageUrl } = coach;
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        {/* <Text style={styles.category}>{category}</Text> */}
        <Text style={styles.rol}>{rol}</Text>
      </View>
      <CustomButton
        title={"Ver Entrenador"}
        onPress={() => console.log("Ver entrenador")}
        backgroundColor={colors.lightBlue}
        width={90}
        height={35}
        textColor={"white"}
        fontSize={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 16,
  },
  category: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.grayLabel,
    marginBottom: 4,
  },
  rol: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: colors.grayLabel,
  },
});

export default CoachCardGeneral;
