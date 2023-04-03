import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Modal } from "@ui-kitten/components";
import fonts from "../utils/fonts";
// components
import ProgramDetails from "./ProgramDetails";
// utils
import programMock from "../utils/programMock";
import CustomButton from "./CustomButton";
import colors from "../utils/colors";

const ModalProgramDetails = ({
  visible,
  onClose /* ...otras propiedades relevantes del entrenamiento... */,
}) => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={onClose}
    >
      <View style={styles.modalContent}>
        <ProgramDetails
          selectedDayInfo={programMock}
          title={"Detalles del Entrenamiento"}
        />
        {/* <Button style={styles.modalCloseButton} onPress={onClose}>
          Cerrar
        </Button> */}
        <View style={{ marginTop: 10, alignSelf: "center" }}>
          <CustomButton
            title={"Cerrar"}
            backgroundColor={colors.lightBlue}
            fontSize={16}
            textColor={"white"}
            height={40}
            width={250}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default ModalProgramDetails;
