import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import fonts from "../utils/fonts";

const StadisticCard = ({ label, value, backgroundColor, iconName }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      flex: 1,
      margin: 10,
      alignItems: "center",
      borderRadius: 10,
      minHeight: 150,
      minWidth: 150,
    },
    icon: {
      marginTop: 10,
      backgroundColor: "rgba(238, 221, 221, 0.2)",
      borderRadius: 30,
      padding: 10,
      color: "white",
    },
    valueText: {
      fontFamily: fonts.poppinsSemiBold,
      color: "white",
      fontSize: 24,
      marginTop: 10,
    },
    labelText: {
      fontFamily: fonts.poppinsRegular,
      marginBottom: 10,
      marginTop: 6,
      color: "white",
    },
  });
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} style={styles.icon} size={40} />
      <Text style={styles.valueText}>{value}</Text>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );
};

export default StadisticCard;
