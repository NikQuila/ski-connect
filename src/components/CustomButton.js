import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import fonts from "../utils/fonts";

function CustomButton({
  onPress,
  title,
  backgroundColor,
  textColor,
  width,
  height,
  fontSize,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor, width, height }]}
      activeOpacity={0.5}
    >
      <Text style={[styles.buttonText, { color: textColor, fontSize }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default CustomButton;
