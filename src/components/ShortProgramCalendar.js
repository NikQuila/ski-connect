import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Text, Modal } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import fonts from "../utils/fonts";
// components
import CustomButton from "./CustomButton";
import colors from "../utils/colors";
import ModalProgramDetails from "./ModalProgramDetails";

const ShortProgramCalendar = ({ programData, onViewDetails }) => {
  const {
    image,
    attendees,
    titleTraining,
    horario,
    lugarEncuentro,
    iconName,
    resumen,
  } = programData;
  const [visible, setVisible] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: image }}
          style={styles.backgroundImage}
          imageStyle={{ opacity: 1 }}
        >
          <Ionicons
            name={iconName}
            size={12}
            color="white"
            style={styles.snowIcon}
          />
          {/* <View style={styles.trainingTitleContainer}>
            <Text style={styles.trainingTitle}>{titleTraining}</Text>
          </View> */}
        </ImageBackground>
        <View>
          <View style={styles.timeAndLocationContainer}>
            <View style={styles.timeAndLocationRow}>
              <Text style={{ fontFamily: fonts.poppinsSemiBold, fontSize: 14 }}>
                {titleTraining}
              </Text>
            </View>
            <View style={styles.timeAndLocationRow}>
              <Ionicons
                name="location"
                size={14}
                color="gray"
                style={{ marginTop: 2 }}
              />
              <Text style={styles.timeAndLocationText}>{resumen}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={toggleModal}
              style={{
                backgroundColor: colors.lightBlue,
                borderColor: colors.lightBlue,
              }}
            >
              Ver detalles
            </Button>
          </View>
        </View>
      </View>
      <ModalProgramDetails visible={visible} onClose={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    width: "95%",
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.poppinsRegular,
  },
  backgroundImage: {
    height: 100,
    width: 160,
    padding: 10,
  },
  snowIcon: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(189, 188, 189, 0.3)",
    padding: 5,
  },
  trainingTitleContainer: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginTop: 20,
    marginRight: 30,
    position: "absolute",
  },

  timeAndLocationContainer: {
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
  },
  timeAndLocationRow: {
    flexDirection: "row",
    marginBottom: 0,
  },
  timeAndLocationText: {
    fontSize: 14,
    color: "gray",
    marginLeft: 4,
    marginRight: 20,
    fontFamily: fonts.poppinsRegular,
  },

  buttonContainer: {
    paddingHorizontal: 20,
    minWidth: 180,
  },

  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: fonts.poppinsRegular,
  },
  modalCloseButton: {
    marginTop: 10,
  },
});

export default ShortProgramCalendar;
