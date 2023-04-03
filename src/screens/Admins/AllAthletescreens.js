import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import AthleteCardGeneral from "../../components/AthleteCardGeneral";
import fonts from "../../utils/fonts";
import athletes from "../../utils/athletes";
import colors from "../../utils/colors";
import { screens } from "../../utils/screens";

const AllAthletesScreen = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>Atletas a cargo</Text>
      <Text style={styles.subTitle}>Categoria: U-10</Text>
      <View style={styles.athleteList}>
        {athletes.map((athlete) => (
          <AthleteCardGeneral
            key={athlete.id}
            name={athlete.name}
            image={athlete.imageUrl}
            attendance={athlete.data.asistencia}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.buttonAddKid}
        onPress={() => navigation.navigate(screens.coaches.createKId)}
      >
        <Text style={styles.textAddKid}>+</Text>
      </TouchableOpacity>
    </Layout>
  );
};

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
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.poppinsRegular,
    color: "gray",
  },
  athleteList: {
    marginTop: 8,
  },
  buttonAddKid: {
    position: "absolute",
    borderRadius: 30,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    right: 20,
    bottom: 10,
  },
  textAddKid: {
    color: "white",
    fontFamily: fonts.poppinsRegular,
    fontSize: 26,
    marginTop: 5,
  },
});

export default AllAthletesScreen;
