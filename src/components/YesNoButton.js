import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import colors from "../utils/colors";

const YesNoButton = ({ label, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("yes");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onChange(option === "yes" ? true : false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOption === "yes" ? styles.selectedButton : null,
          ]}
          onPress={() => handleOptionSelect("yes")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedOption === "yes" ? { color: "white" } : {},
            ]}
          >
            Si
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOption === "no" ? styles.selectedButton : null,
          ]}
          onPress={() => handleOptionSelect("no")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedOption === "no" ? { color: "white" } : {},
            ]}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.grayLabel,
    marginBottom: 8,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#f8f9fd",
    borderColor: "#eef1f5",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 8,
  },
  selectedButton: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.lightBlue,
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    color: colors.grayLabel,
  },
});

export default YesNoButton;
