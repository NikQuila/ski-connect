import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomTopNavigation = ({ title }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#6E7B8B", "#3B4A61"]} style={styles.gradient}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 20,
    marginTop: 14,
  },
});

export default CustomTopNavigation;
