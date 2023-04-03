import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import {
  Layout,
  Text,
  Avatar,
  ListItem,
  Divider,
  Button,
  Card,
} from "@ui-kitten/components";
// utils
import fonts from "../../utils/fonts";
import { Ionicons } from "@expo/vector-icons";
import { Grid, Col, Row } from "react-native-easy-grid";
import StatisticCard from "../../components/StadisticCard";
import colors from "../../utils/colors";
import CustomBarChart from "../../components/CustomBarChart";

const user = {
  name: "Juan Pérez",
  birthdate: "2005-02-12",
  skiingLevel: "Intermedio",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  contactInfo: "juan.perez@example.com",
  daysSkied: 15,
  behaviorEvaluation: "Buen comportamiento",
  seasonObjectives: "Mejorar habilidades en slalom y esquí en polvo",
  coachNotes:
    "Juan ha mostrado un gran progreso durante la temporada, sigue así.",
};

export default function User() {
  const [userName, setUserName] = useState("Matilde");
  const [lastName, setLastName] = useState("Olivares");

  return (
    <ScrollView style={{ paddingTop: 20, paddingHorizontal: 10 }}>
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
              <Text style={[styles.titleSemiBold]}>
                {userName} {lastName}
              </Text>
            </View>
            <Text style={styles.subtitle}>12/05/2006</Text>
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
      <View style={styles.content}>
        <Text style={styles.titleRegular}>
          Matilde, aquí tienes tus estadísticas :)
        </Text>
        <Grid style={styles.stadisticsCardContainers}>
          <Row>
            <StatisticCard
              backgroundColor={colors.lightBlue}
              value={32}
              label={"Días de ski"}
              iconName={"star-outline"}
            />
            <StatisticCard
              backgroundColor={colors.race}
              value={"83%"}
              label={"Asistencia"}
              iconName={"checkmark-done-outline"}
            />
          </Row>
          <Row>
            <StatisticCard
              backgroundColor={colors.orange}
              value={"24"}
              label={"Días de Fisico"}
              iconName={"barbell-outline"}
            />
            <StatisticCard
              backgroundColor={colors.greenEmerald}
              value={"4 / 5"}
              label={"Comportamiento"}
              iconName={"heart-outline"}
            />
          </Row>
        </Grid>
        <View style={{ marginBottom: 50 }}>
          <CustomBarChart />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  titleRegular: {
    fontSize: 16,
    fontFamily: fonts.poppinsRegular,
    marginLeft: 10,
  },
  titleSemiBold: {
    fontSize: 18,
    fontFamily: fonts.poppinsSemiBold,
  },
  subtitleEvent: {
    marginLeft: 10,
    fontFamily: fonts.poppinsRegular,
    color: "gray",
    fontSize: 14,
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
  content: {
    marginTop: 20,
  },
  stadisticsCardContainers: {},
});
