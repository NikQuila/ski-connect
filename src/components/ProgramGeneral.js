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

const ProgramGeneral = ({ programData, onViewDetails }) => {
  const {
    image,
    titleTraining,
    horarioInicio,
    horarioFinal,
    lugarEncuentro,
    iconName,
  } = programData;
  const attendees = [
    {
      avatar:
        "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/260768476_4488510601240643_3108343227378160473_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=dcCc9XBgVf8AX_JzDUu&_nc_ht=scontent.fscl1-1.fna&oh=00_AfAcp1iueezAV0GjxB5px578jb10wkZGu89cOvJeotCtiw&oe=6421D54A",
    },
    {
      avatar:
        "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/260735924_4485477228210647_5574462533727125785_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=M-BPrZCENQoAX9soryU&_nc_ht=scontent.fscl1-1.fna&oh=00_AfBN2gVyK-Fx5YkQzSDSESX7VtWdiPKS-ZmBD3_5ndkPdw&oe=642245EE",
    },
    {
      avatar:
        "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/261424076_4488510607907309_9053381772345896131_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=U9gnU7RNKtIAX-TaJHS&_nc_ht=scontent.fscl1-1.fna&oh=00_AfAYY-5VycnqxplyPHVrjcPvcQDW5rO9qv2ClWAPdJ5-vg&oe=64226C7F",
    },
    {
      avatar:
        "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/219683713_4099631426795231_3593284197995411363_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=UuKId0UUqY4AX_UxUtB&_nc_ht=scontent.fscl1-1.fna&oh=00_AfCavcIJRFFvlgczamrau1fTjqhCi875F_WRUR231F0agQ&oe=6420C84C",
    },
    {
      avatar:
        "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/219683713_4099631426795231_3593284197995411363_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=UuKId0UUqY4AX_UxUtB&_nc_ht=scontent.fscl1-1.fna&oh=00_AfCavcIJRFFvlgczamrau1fTjqhCi875F_WRUR231F0agQ&oe=6420C84C",
    },
    {
      avatar:
        "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/219683713_4099631426795231_3593284197995411363_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=UuKId0UUqY4AX_UxUtB&_nc_ht=scontent.fscl1-1.fna&oh=00_AfCavcIJRFFvlgczamrau1fTjqhCi875F_WRUR231F0agQ&oe=6420C84C",
    },
    {
      avatar:
        "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/219683713_4099631426795231_3593284197995411363_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=UuKId0UUqY4AX_UxUtB&_nc_ht=scontent.fscl1-1.fna&oh=00_AfCavcIJRFFvlgczamrau1fTjqhCi875F_WRUR231F0agQ&oe=6420C84C",
    },
  ];

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
            size={24}
            color="white"
            style={styles.snowIcon}
          />
          <View style={styles.trainingTitleContainer}>
            <Text style={styles.trainingTitle}>{titleTraining}</Text>
          </View>
        </ImageBackground>
        <View style={styles.timeAndLocationContainer}>
          <View style={styles.timeAndLocationRow}>
            <Ionicons
              name="time"
              size={14}
              color={"gray"}
              style={{ marginTop: 2 }}
            />
            <Text style={styles.timeAndLocationText}>
              Horario: {horarioInicio} - {horarioFinal}{" "}
            </Text>
          </View>
          <View style={styles.timeAndLocationRow}>
            <Ionicons
              name="location"
              size={14}
              color="gray"
              style={{ marginTop: 2 }}
            />
            <Text style={styles.timeAndLocationText}>
              Lugar de Encuentro: {lugarEncuentro}
            </Text>
          </View>
        </View>
        <View style={styles.attendeesContainer}>
          <Ionicons name="person" size={14} color="gray" />
          <Text style={[styles.timeAndLocationText]}>Participantes:</Text>
          {attendees.slice(0, 3).map((attendee, index) => (
            <Avatar
              key={index}
              source={{ uri: attendee.avatar }}
              style={[styles.avatar, { marginLeft: 5 }]}
              size={"tiny"}
            />
          ))}
          <Text style={styles.attendeesCount}>+{attendees.length - 3}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {/* <Button
            onPress={toggleModal}
            style={{
              backgroundColor: colors.lightBlue,
              borderColor: colors.lightBlue,
            }} */}
          <CustomButton
            backgroundColor={colors.lightBlue}
            title={"Ver detalles del entrenamiento"}
            onPress={toggleModal}
            fontSize={12}
            textColor={"white"}
            width={280}
            height={40}
          />
        </View>
        <View style={styles.buttonsContainer}>
          {attendanceStatus === null ? (
            <>
              <CustomButton
                title="Asistiré"
                backgroundColor="#4CAF50"
                textColor="#FFFFFF"
                onPress={() => setAttendanceStatus(true)}
                width={130}
                height={40}
              />

              <CustomButton
                title="No voy"
                backgroundColor="#F44336"
                textColor="#FFFFFF"
                onPress={() => setAttendanceStatus(false)}
                width={130}
                height={40}
              />
            </>
          ) : (
            <>
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.attendanceMessage,
                    attendanceStatus
                      ? { color: "#4CAF50" }
                      : { color: "#F44336" },
                  ]}
                >
                  {attendanceStatus === true
                    ? "Has confirmado tu asistencia"
                    : "No vas al entrenamiento"}
                </Text>
                <TouchableOpacity onPress={() => setAttendanceStatus(null)}>
                  <Text style={styles.choiceText}>Cambiar elección?</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
      <ModalProgramDetails visible={visible} onClose={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    width: 300,
    minHeight: 400,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.poppinsRegular,
  },
  backgroundImage: {
    height: 180,
    justifyContent: "space-between",
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
    bottom: "5%",
  },
  trainingTitle: {
    fontSize: 16,
    color: "white",
    left: 10,
    fontFamily: fonts.poppinsSemiBold,
  },
  timeAndLocationContainer: {
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
  },
  timeAndLocationRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  timeAndLocationText: {
    fontSize: 14,
    color: "gray",
    marginLeft: 4,
    marginRight: 20,
    fontFamily: fonts.poppinsRegular,
  },
  attendeesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  avatar: {
    marginRight: 1,
  },
  attendeesCount: {
    fontSize: 16,
    fontFamily: fonts.poppinsRegular,
    color: "gray",
    marginLeft: 5,
  },
  buttonContainer: {
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 2,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  attendanceMessage: {
    fontSize: 16,
    flex: 1,
    fontFamily: fonts.poppinsSemiBold,
    textAlign: "center",
  },
  choiceText: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",
    fontFamily: fonts.poppinsRegular,
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

export default ProgramGeneral;
