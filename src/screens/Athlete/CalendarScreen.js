import React from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Text, Card, Icon } from "@ui-kitten/components";
import moment from "moment";
// componets
import LegendItem from "../../components/LegendItem";
import BackgroundWrapper from "../../components/BackgroundWrapper";
// utils
import disciplines from "../../utils/discipline";
import colors from "../../utils/colors";
import { ScrollView } from "react-native";
import ProgramDetails from "../../components/ProgramDetails";
import fonts from "../../utils/fonts";
import ShortProgramCalendar from "../../components/ShortProgramCalendar";

const exampleProgramData2 = {
  image:
    "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.6435-9/118437125_3175338599224523_987090527362274779_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_ohc=L_FH614jG34AX8zhns5&_nc_ht=scontent.fscl1-1.fna&oh=00_AfA9-POHyUl_D50j219PDFA9mNeA00rPr691ccjW_OYwMQ&oe=64447111",
  titleTraining: "Entrenamiento Físico",
  horario: "16:00 - 17:30",
  lugarEncuentro: "Canchas de Fútbol",
  iconName: "barbell",
  resumen: "Fútbol",
};

const exampleProgramData = {
  image:
    "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.6435-9/95126465_2869403606484692_6032929475933503488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=AyvBuwgxk4EAX9R57rn&_nc_ht=scontent.fscl1-1.fna&oh=00_AfB5zBzErWeoNvoiS93FxD2cCNDtWMo_wmR8OJFLjvKM4A&oe=64440322",
  titleTraining: "Entrenamiento de Ski",
  horario: "09:00 - 12:00",
  lugarEncuentro: "Base Alpha",
  iconName: "snow",
  resumen: "Gigante en nevada",
};

const colorsArray = [
  colors.dh,
  colors.gs,
  colors.sg,
  colors.sl,
  colors.gym,
  colors.fs,
  colors.race,
];

const getRandomColor = () => {
  return colorsArray[Math.floor(Math.random() * colorsArray.length)];
};

const generateMarchDates = () => {
  const startDate = moment("2023-03-01");
  const endDate = moment("2023-03-24");
  const dates = {};
  let count = 0;
  while (startDate.isSameOrBefore(endDate)) {
    if (count < 3) {
      const dateString = startDate.format("YYYY-MM-DD");
      dates[dateString] = {
        day: "12-02-2022",
        selected: true,
        // marked: true,
        selectedColor: getRandomColor(),
        dotColor: "black",
        discipline: "GS",
        hora: "9:00",
        lugar: "Base Alpha",
        notasEntrenador:
          "Haremos Gigante palo largo, traigan las protecciones, agua y cosas para comer",
      };
      count += 1;
    } else {
      count = 0;
    }
    startDate.add(1, "days");
  }

  return dates;
};

export default function CalendarScreen() {
  const [selectedDayInfo, setSelectedDayInfo] = React.useState({
    day: "12-02-2022",
    selected: true,
    marked: true,
    selectedColor: getRandomColor(),
    discipline: "GS",
    hora: "9:00",
    lugar: "Base Alpha",
    notasEntrenador:
      "Haremos Gigante palo largo, traigan las protecciones, agua y cosas para comer",
  });
  const marchDates = generateMarchDates();
  const onDayPress = (day) => {
    console.log("Day pressed:", day);
    const dayInfo = marchDates[day.dateString];
    console.log(dayInfo);
    setSelectedDayInfo(dayInfo);
  };

  return (
    <ScrollView style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={marchDates}
        theme={{
          selectedDayBackgroundColor: "#4285F4",
          todayTextColor: "#4285F4",
          textDayStyle: { fontFamily: fonts.poppinsRegular },
          textMonthFontFamily: fonts.poppinsSemiBold, // Cambiar la fuente del título del mes
          textMonthFontSize: 20,
        }}
        style={{ marginHorizontal: 0 }}
      />
      <View style={styles.legend}>
        {disciplines.map((item) => (
          <LegendItem
            key={item.id}
            discipline={item.disciplineName}
            color={item.color}
          />
        ))}
      </View>
      {selectedDayInfo && (
        <View style={{ gap: 10, marginTop: 10, marginBottom: 20 }}>
          <Text style={{ fontFamily: fonts.poppinsRegular, marginLeft: 10 }}>
            Eventos Realizados (2)
          </Text>
          <ShortProgramCalendar programData={exampleProgramData} />
          <ShortProgramCalendar programData={exampleProgramData2} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
});
