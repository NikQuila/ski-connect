import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Card } from "@ui-kitten/components";
import fonts from "../utils/fonts";

const DailyTraining = ({ trainingData }) => {
  const { name, location, time, notes } = trainingData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Programa del día</Text>
      <Card style={styles.card}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>Lugar de encuentro: {location}</Text>
        <Text style={styles.time}>Hora: {time}</Text>
        <Text style={styles.notes}>Notas del entrenador: {notes}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: fonts.poppinsRegular,
  },
  card: {
    padding: 10,
    borderRadius: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: fonts.poppinsRegular,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: fonts.poppinsRegular,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: fonts.poppinsRegular,
  },
  notes: {
    fontSize: 16,
    fontFamily: fonts.poppinsRegular,
  },
});

export default DailyTraining;
