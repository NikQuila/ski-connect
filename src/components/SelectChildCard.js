import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, Card } from "@ui-kitten/components";
import { useNavigate } from "react-router-dom";
import fonts from "../utils/fonts";

const SelectChildCard = ({ child, onPress }) => {
  return (
    <TouchableOpacity style={styles.childCard} onPress={onPress}>
      <View style={styles.childImageView}>
        <Image
          source={{ uri: child.image }}
          style={styles.childImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.childName}>{child.name}</Text>
      <Text style={styles.childCategory}>{child.category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  childCard: {
    width: "40%",
    alignItems: "center",
  },
  childImageView: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#d3d3d3",
    overflow: "hidden",
  },
  childImage: {
    width: 100,
    height: 100,
  },
  childName: {
    marginTop: 8,
    fontFamily: fonts.poppinsSemiBold,
    textAlign: "center",
  },
  childCategory: {
    marginTop: 2,
    fontFamily: fonts.poppinsRegular,
    textAlign: "center",
  },
});

export default SelectChildCard;
