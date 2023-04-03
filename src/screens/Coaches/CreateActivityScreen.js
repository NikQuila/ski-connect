import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Input, Button } from "@ui-kitten/components";
import fonts from "../../utils/fonts";
// import { getTimeStringFromDate } from "../utils/dateHelpers";
import DateTimePicker from "@react-native-community/datetimepicker";
import colors from "../../utils/colors";
import CustomButton from "../../components/CustomButton";
import YesNoButton from "../../components/YesNoButton";
import DatePicker from "../../components/DatePicker";

const getTimeStringFromDate = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes}`;
};

const CreateActivityScreen = () => {
  const [activityName, setActivityName] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const onStartTimeChange = (event, selectedDate) => {
    setShowStartTimePicker(false);
    setStartTime(selectedDate || startTime);
  };

  const onEndTimeChange = (event, selectedDate) => {
    setShowEndTimePicker(false);
    setEndTime(selectedDate || endTime);
  };

  const showStartTimepicker = () => {
    setShowStartTimePicker(true);
  };

  const showEndTimepicker = () => {
    setShowEndTimePicker(true);
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>Crear Entrenamiento</Text>
      <Input
        style={styles.input}
        label="Nombre Entrenamiento"
        placeholder="Ej: Entrenamiento SKI "
        value={activityName}
        onChangeText={setActivityName}
      />
      <DatePicker
        label={"Día del entrenamiento"}
        value={date}
        onChange={setDate}
      />
      <View style={styles.timesContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeLabel}>Hora Inicio</Text>
          <Text style={styles.timeText} onPress={() => showStartTimepicker()}>
            {getTimeStringFromDate(startTime)}
          </Text>
          {showStartTimePicker && (
            <DateTimePicker
              value={startTime}
              mode="time"
              display="default"
              onChange={onStartTimeChange}
            />
          )}
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeLabel}>Hora Fin</Text>
          <Text style={styles.timeText} onPress={() => showEndTimepicker()}>
            {getTimeStringFromDate(endTime)}
          </Text>
          {showEndTimePicker && (
            <DateTimePicker
              value={endTime}
              mode="time"
              display="default"
              onChange={onEndTimeChange}
            />
          )}
        </View>
      </View>
      <Input
        style={styles.input}
        label="Lugar de Encuentro"
        placeholder="Ej: Base Alpha"
        value={location}
        onChangeText={setLocation}
      />
      <Input
        style={styles.input}
        label="Nota del Entrenador"
        placeholder="Ej: Nos juntamos en base alpha a las 9 con skis de Slalom, para luego empezar el día con un par de bajadas libres por franciscanos y empezar con el trabajo de plumillas en nevada"
        value={note}
        onChangeText={setNote}
        multiline={true}
        numberOfLines={4}
      />
      <YesNoButton
        label={"Entrenamiento Obligatorio?"}
        onChange={() => console.log("NATI")}
      />
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <CustomButton
          title={"Crear Entrenamiento"}
          backgroundColor={colors.lightBlue}
          textColor={"white"}
          width={200}
          height={50}
          onPress={console.log("CHUPALA")}
        />
      </View>
    </Layout>
  );
};

export default CreateActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: fonts.poppinsSemiBold,
  },
  input: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 8,
    fontFamily: fonts.poppinsRegular,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#d3d3d3",
  },
  buttonContainer: {
    marginVertical: 32,
    alignItems: "center",
  },
  button: {
    width: "50%",
    borderRadius: 24,
    marginTop: 16,
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: fonts.poppinsSemiBold,
  },
  timesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  timeContainer: {},
  timeLabel: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.grayLabel,
    paddingBottom: 4,
  },
  timeText: {
    backgroundColor: "#f8f9fd",
    borderColor: "#eef1f5",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 16,
  },
});
