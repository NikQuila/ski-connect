import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Layout, Text, Card, Button } from "@ui-kitten/components";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import CustomButton from "../../components/CustomButton";

const categories = [
  {
    id: 0,
    name: "Peques",
    athleteCount: 15,
    activityCount: 5,
    attendance: 90,
    imageUrl:
      "https://www.clubskilaparva.cl/images/secciones-bann/programas/peques.jpg",
  },
  {
    id: 1,
    name: "Mini",
    athleteCount: 15,
    activityCount: 5,
    attendance: 90,
    imageUrl:
      "https://www.clubskilaparva.cl/images/secciones-bann/programas/minis.jpg",
  },
  {
    id: 2,
    name: "U-10",
    athleteCount: 20,
    activityCount: 8,
    attendance: 85,
    imageUrl:
      "https://www.clubskilaparva.cl/images/secciones-bann/programas/u10.jpg",
  },
  {
    id: 3,
    name: "U-12",
    athleteCount: 25,
    activityCount: 10,
    attendance: 80,
    imageUrl:
      "https://www.clubskilaparva.cl/images/secciones-bann/programas/u12.jpg",
  },
  {
    id: 4,
    name: "U-14",
    athleteCount: 30,
    activityCount: 12,
    attendance: 75,
    imageUrl:
      "https://www.clubskilaparva.cl/images/secciones-bann/programas/u14.jpg",
  },
  {
    id: 5,
    name: "U-16",
    athleteCount: 35,
    activityCount: 15,
    attendance: 70,
    imageUrl:
      "https://www.clubskilaparva.cl/images/secciones-bann/programas/u16.jpg",
  },
];

const AdminHomePageScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    // navigation.navigate("CategoryDetails", { category });
    console.log(category);
  };

  return (
    <ScrollView>
      <Layout style={styles.container}>
        <Text style={styles.title}>Categorías</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <Card
              key={category.id}
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(category)}
            >
              <Image
                source={{
                  uri: category.imageUrl,
                  height: 120,
                  width: "100%",
                }}
              />
              <Text style={styles.categoryName}>{category.name}</Text>
              <View style={styles.categoryDataContainer}>
                <Text style={styles.categoryData}>
                  {category.athleteCount} Atletas
                </Text>
                <Text style={styles.categoryData}>
                  {category.activityCount} Entrenamientos
                </Text>
                <Text style={styles.categoryData}>
                  {category.attendance}% Asistencia
                </Text>
              </View>
              <View style={styles.buttonCategory}>
                <CustomButton
                  title={"Ver Categoría"}
                  onPress={() => console.log("sape")}
                  backgroundColor={colors.lightBlue}
                  height={40}
                  width={150}
                  textColor={"white"}
                  fontSize={12}
                />
              </View>
            </Card>
          ))}
        </View>
      </Layout>
    </ScrollView>
  );
};

export default AdminHomePageScreen;

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
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryCard: {
    width: "100%",
    marginBottom: 16,
  },
  categoryName: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 8,
  },
  categoryDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryData: {
    fontSize: 12,
    textAlign: "center",
    color: colors.grayLabel,
  },
  buttonCategory: {
    alignSelf: "center",
    marginTop: 10,
  },
});
