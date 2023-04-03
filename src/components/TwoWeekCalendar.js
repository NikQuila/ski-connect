import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";
import moment from "moment";

export default function TwoWeekCalendar() {
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));

  const onDayPress = (day) => {
    console.log("Day pressed:", day);
    setCurrentDate(day.dateString);
  };

  const minDate = moment(currentDate).startOf("week").format("YYYY-MM-DD");
  const maxDate = moment(currentDate)
    .add(1, "weeks")
    .endOf("week")
    .format("YYYY-MM-DD");

  return (
    <View style={styles.container}>
      <CalendarList
        onDayPress={onDayPress}
        minDate={minDate}
        maxDate={maxDate}
        pastScrollRange={0}
        futureScrollRange={0}
        pagingEnabled
        horizontal
        markedDates={{
          currentDate: { selected: true, marked: true },
        }}
        theme={{
          selectedDayBackgroundColor: "#4285F4",
          todayTextColor: "#4285F4",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
