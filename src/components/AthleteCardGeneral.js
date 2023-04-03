// components/AthleteCardGeneral.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "@ui-kitten/components";
import fonts from "../utils/fonts";
import colors from "../utils/colors";

const AthleteCardGeneral = ({ name, image, attendance }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.attendance}>{attendance}% de asistencia</Text>
      </View>
      <TouchableOpacity style={styles.buttonAthlete}>
        <Text style={styles.textAthlete}>Ver atleta</Text>
      </TouchableOpacity>
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
  },
  attendance: {
    fontFamily: fonts.poppinsRegular,
  },
  buttonAthlete: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: colors.lightBlue,
    borderColor: colors.lightBlue,
  },
  textAthlete: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 10,
    color: "white",
  },
});

export default AthleteCardGeneral;
