import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import CoachCardGeneral from "../../components/CoachCardGeneral";
import fonts from "../../utils/fonts";
import coaches from "../../utils/coaches";

const AllCoachesScreen = () => {
  // Agrupamos los entrenadores por categoría
  const coachesByCategory = coaches.reduce((coachesByCat, coach) => {
    const cat = coach.category;
    if (!coachesByCat[cat]) {
      coachesByCat[cat] = [];
    }
    coachesByCat[cat].push(coach);
    return coachesByCat;
  }, {});

  return (
    <ScrollView>
      <Layout style={styles.container}>
        <Text style={styles.title}>Entrenadores</Text>
        {/* Mostramos los entrenadores por categoría */}
        {Object.entries(coachesByCategory).map(([category, coaches]) => (
          <View key={category} style={styles.coachCategory}>
            <Text style={styles.categoryTitle}>{category}</Text>
            {coaches.map((coach) => {
              console.log(coach.name);
              return <CoachCardGeneral coach={coach} />;
            })}
          </View>
        ))}
      </Layout>
    </ScrollView>
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
  coachCategory: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default AllCoachesScreen;
