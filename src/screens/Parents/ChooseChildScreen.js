import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import fonts from "../../utils/fonts";
import SelectChildCard from "../../components/SelectChildCard";
import { screens } from "../../utils/screens";

const ChooseChildScreen = ({ navigation }) => {
  const children = [
    {
      id: 1,
      category: "U-10",
      name: "Laura Quiroga",
      image:
        "https://scontent.fscl9-1.fna.fbcdn.net/v/t39.30808-6/260702525_4488510611240642_6369597067853345101_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=DS6bCfVn4wUAX8BMn_T&_nc_zt=23&_nc_ht=scontent.fscl9-1.fna&oh=00_AfAeKZrYpkOO6jW5ZU4iTKXSuOTD4TZmx2iB4uF872mv6A&oe=642547CD",
    },
    {
      id: 2,
      category: "U-12",
      name: "María Del Solar",
      image:
        "https://scontent.fscl9-2.fna.fbcdn.net/v/t39.30808-6/260696410_4488510624573974_4533940920309902918_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=lh4u5kWgSQ4AX8-egYO&_nc_zt=23&_nc_ht=scontent.fscl9-2.fna&oh=00_AfDsJToiMxL0-ljzNxJUhtuCryWOGP5oD2E5dRgO6fmhog&oe=6425E6F4",
    },
    {
      id: 3,
      category: "U-16",
      name: "Patricio Peña",
      image:
        "https://scontent.fscl9-2.fna.fbcdn.net/v/t39.30808-6/261424076_4488510607907309_9053381772345896131_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=srxr0-EQYj0AX8C_FJg&_nc_zt=23&_nc_ht=scontent.fscl9-2.fna&oh=00_AfAUIfpO1RFISocrXtX3NEbACoCH-hntjUHVjibJxN4hYg&oe=642660FF",
    },
  ];

  const handleClick = (child) => {
    console.log(child.name);
    navigation.navigate(screens.home);
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>Selecciona al Atleta</Text>
      <View style={styles.cardContainer}>
        {children.map((child) => (
          <SelectChildCard
            key={child.id}
            child={child}
            onPress={() => handleClick(child)}
          />
        ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: fonts.poppinsSemiBold,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    rowGap: 10,
  },
});

export default ChooseChildScreen;
