import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Icon } from "@ui-kitten/components";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "../utils/dateHelpers";
import colors from "../utils/colors";

const DatePicker = ({ label, value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker((prevState) => !prevState);
  };

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    onChange(selectedDate || value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => togglePicker()}>
        <Text style={styles.dateText}>{formatDate(value)}</Text>
        <Icon
          style={styles.dateIcon}
          name="calendar-outline"
          fill={colors.grayLabel}
        />
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
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
    textAlign: "left",
    color: colors.grayLabel,
    marginBottom: 4,
  },
  dateInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f9fd",
    borderColor: "#eef1f5",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  dateText: {
    fontSize: 16,
  },
  dateIcon: {
    width: 24,
    height: 24,
  },
});

export default DatePicker;
