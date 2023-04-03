import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Layout,
  TopNavigation,
  Divider,
  Button,
  Text,
  Card,
  Avatar,
} from "@ui-kitten/components";
// firebase
import { logOutUser } from "../../firebase";
// components
import Weather from "../../components/Weather";
import CustomButton from "../../components/CustomButton";
import ProgramDetails from "../../components/ProgramDetails";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import OneWeekCalendar from "../../components/OneWeekCalendar";
import DailyTraining from "../../components/DailyTraining";
import ProgramGeneral from "../../components/ProgramGeneral";
import Prueba from "../../components/prueba/componentePrueba";
// utils
import programMock from "../../utils/programMock";
import fonts from "../../utils/fonts";
import { formatDateForCalendar } from "../../utils/dateHelpers";
import { activitiesCalendar } from "../../utils/activities";
// icons
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import ModalProgramDetails from "../../components/ModalProgramDetails";
import DailyReportModal from "../../components/DailyReportModal";

function HomeScreen() {
  const [userName, setUserName] = useState("Matilde");
  const [visible, setIsVisible] = useState(false);
  const [daySelected, setDaySelected] = useState(new Date());
  const [selectedActivity, setSelectedActivity] = useState(
    activitiesCalendar[formatDateForCalendar(new Date())]
  );

  const handleDaySelected = (day) => {
    setDaySelected(day);
    const dayFormatted = formatDateForCalendar(day);
    console.log(dayFormatted);
    const activity = activitiesCalendar[dayFormatted];
    setSelectedActivity(activity);
  };

  return (
    <ScrollView style={styles.content}>
      <DailyReportModal visible={visible} onClose={() => setIsVisible(false)} />
      {/* Header  */}
      <View style={styles.rowHeader}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Avatar
            source={{
              uri: "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/260696410_4488510624573974_4533940920309902918_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=dSBp7NA2-K4AX8Olb9n&_nc_ht=scontent.fscl1-1.fna&oh=00_AfBpbn-obIDxvsfMewG4ubvHWgsNp8xoJX8tiGuUGAzBiA&oe=6421F274",
            }}
            size="large"
          />
          <View>
            <View style={styles.row}>
              <Text style={[styles.regular, styles.titleRegular]}>Hola,</Text>
              <Text style={[styles.semiBold, styles.titleSemiBold]}>
                {userName}!
              </Text>
            </View>
            <Text style={styles.subtitle}>Hoy tienes entrenamiento!</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Ionicons name={"body-outline"} size={24} />
          <Text style={styles.subtitle}>Deportista</Text>
          <Text style={styles.subtitle}> Cat-U16</Text>
        </View>
      </View>
      {/* Fin Header */}
      {/* Inicio Content */}
      <View style={{ marginTop: 20, gap: 10, marginBottom: 40 }}>
        <OneWeekCalendar onPress={handleDaySelected} />
        <Text style={[styles.titleRegular, { marginLeft: 10 }]}>
          Programa del día!
        </Text>
        <Text style={styles.subtitleEvent}>2 eventos restantes</Text>
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 20 }}
        >
          {selectedActivity ? (
            <>
              {selectedActivity.activities.map((item, index) => (
                <ProgramGeneral key={index} programData={item} />
              ))}
            </>
          ) : (
            <Text> no hay nada </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  titleRegular: {
    fontSize: 18,
  },
  titleSemiBold: {
    fontSize: 18,
  },
  subtitleEvent: {
    marginLeft: 10,
    fontFamily: fonts.poppinsRegular,
    color: "gray",
    fontSize: 14,
  },
  regular: {
    fontFamily: fonts.poppinsRegular,
  },
  semiBold: {
    fontFamily: fonts.poppinsSemiBold,
  },
  rowHeader: {
    flexDirection: "row",
    marginTop: 40,
    gap: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    gap: 6,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: fonts.poppinsRegular,
    color: "gray",
  },
});

export default HomeScreen;
