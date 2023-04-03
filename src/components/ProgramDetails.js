import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Icon } from "@ui-kitten/components";
// Components
import CustomButton from "./CustomButton";
import fonts from "../utils/fonts";

const dataForLabel = [
  {
    iconName: "flag",
    text: "Disciplina",
    value: "GS",
  },
  {
    iconName: "clock",
    text: "Hora",
    value: "09:00",
  },
  {
    iconName: "pin",
    text: "Lugar",
    value: "Base Alpha",
  },
  {
    iconName: "book",
    text: "Disciplina",
    value: "GS",
  },
];

function ProgramDetails({
  selectedDayInfo,
  title,
  haveButtons,
  isFromCalendar,
}) {
  return (
    <View style={styles.containerCard}>
      <Card style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        {isFromCalendar ? (
          <></>
        ) : (
          <Text style={styles.subTitle}>({selectedDayInfo.day})</Text>
        )}
        <View style={styles.row}>
          <Icon style={styles.icon} fill="#3366FF" name="flag" />
          <Text style={styles.text}>
            Disciplina: {selectedDayInfo.discipline}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon style={styles.icon} fill="#3366FF" name="clock" />
          <Text style={styles.text}>Hora: {selectedDayInfo.hora}</Text>
        </View>
        <View style={styles.row}>
          <Icon style={styles.icon} fill="#3366FF" name="pin" />
          <Text style={styles.text}>
            Lugar de Encuentro: {selectedDayInfo.lugar}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon style={[styles.icon]} fill="#3366FF" name="book" />
          <Text style={styles.text}>
            Notas: {selectedDayInfo.notasEntrenador}
          </Text>
        </View>
      </Card>
    </View>
  );
}

const Label = ({ iconName, text, value }) => {
  return (
    <View style={styles.row}>
      <Icon style={styles.icon} fill="#3366FF" name={iconName} />
      <Text>
        {text}:{value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    padding: 4,
    borderRadius: 10,
  },
  title: {
    fontFamily: fonts.poppinsSemiBold,
  },
  text: {
    fontFamily: fonts.poppinsRegular,
  },
  subTitle: {
    marginBottom: 8,
    fontFamily: fonts.poppinsRegular,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginTop: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 2,
    marginTop: 5,
  },
});

export default ProgramDetails;
