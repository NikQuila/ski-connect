import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import { activitiesCalendar } from "../utils/activities";
import { formatDateForCalendar } from "../utils/dateHelpers";

const OneWeekCalendar = ({ onPress }) => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const today = new Date();
  const days = [];

  for (let i = -2; i <= 4; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    days.push(currentDate);
  }

  const getDayInitials = (day) => {
    const daysOfWeek = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
    return daysOfWeek[day.getDay()];
  };

  const onDayPress = (day) => {
    setSelectedDay(day);
    onPress(day);
  };

  const getMonthYear = (date) => {
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return `${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{getMonthYear(today)}</Text>
      <View style={styles.container}>
        {days.map((day, index) => {
          const isSelected =
            selectedDay.getDate() === day.getDate() &&
            selectedDay.getMonth() === day.getMonth() &&
            selectedDay.getFullYear() === day.getFullYear();
          const hasActivities = activitiesCalendar[formatDateForCalendar(day)];

          return (
            <TouchableOpacity key={day} onPress={() => onDayPress(day)}>
              <View
                style={[styles.dateContainer, isSelected && styles.currentDay]}
              >
                <Text
                  style={[styles.dayInitials, isSelected && { color: "white" }]}
                >
                  {getDayInitials(day)}
                </Text>
                <Text
                  style={[styles.dayText, isSelected && { color: "white" }]}
                >
                  {day.getDate()}
                </Text>
                {hasActivities && (
                  <View
                    style={
                      isSelected
                        ? [styles.dot, { backgroundColor: "white" }]
                        : styles.dot
                    }
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 10, // Ajusta el margen izquierdo según tus necesidades
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: fonts.poppinsRegular,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  dayInitials: {
    fontSize: 12,
    marginBottom: 4,
    fontFamily: fonts.poppinsRegular,
    color: "gray",
  },
  dateContainer: {
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    minHeight: 78,
    minWidth: 40,
  },
  currentDay: {
    backgroundColor: colors.lightBlue,
  },
  dayText: {
    fontSize: 14,
    fontFamily: fonts.poppinsSemiBold,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.lightBlue,
    marginTop: 2,
  },
});

export default OneWeekCalendar;
