import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import fonts from "../utils/fonts";

const LegendItem = ({ discipline, color }) => {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.colorIndicator, { backgroundColor: color }]} />
      <Text style={styles.text}>{discipline}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 10,
    marginRight: 8,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.poppinsRegular,
  },
});

export default LegendItem;
