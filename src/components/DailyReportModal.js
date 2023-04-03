import React from "react";
import { View, Text } from "react-native";
import { Modal, Card, Button, Icon, Layout } from "@ui-kitten/components";
import fonts from "../utils/fonts";
import { StyleSheet } from "react-native";
import ShortProgramCalendar from "./ShortProgramCalendar";
import programMock from "../utils/programMock";
import { exampleProgramData } from "../utils/exampleProgramData";
import colors from "../utils/colors";

const Star = ({ isFilled }) => (
  <Icon
    style={{ width: 24, height: 24, marginHorizontal: 4 }}
    fill={isFilled ? "#FFD700" : "#C0C0C0"}
    name={isFilled ? "star" : "star-outline"}
  />
);

const DailyReportModal = ({ visible, onClose }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<Star key={i} isFilled={i <= rating} />);
    }
    return stars;
  };

  return (
    <Modal
      visible={visible}
      backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onBackdropPress={onClose}
    >
      <Card disabled={true}>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            paddingHorizontal: 10,
            fontFamily: fonts.poppinsSemiBold,
          }}
        >
          Reporte del entrenamiento
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            paddingHorizontal: 10,
            fontFamily: fonts.poppinsRegular,
          }}
        >
          ( 15-08-2022 )
        </Text>
        <View style={{ paddingVertical: 10 }}>
          <ShortProgramCalendar programData={exampleProgramData} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* Fila 1 */}
          <Layout
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 8,
            }}
          >
            <Text style={styles.text}>Actitud</Text>
            <View style={{ flexDirection: "row" }}>{renderStars(4)}</View>
          </Layout>

          {/* Fila 2 */}
          <Layout
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 8,
            }}
          >
            <Text style={styles.text}>Esfuerzo</Text>
            <View style={{ flexDirection: "row" }}>{renderStars(5)}</View>
          </Layout>

          {/* Fila 3 */}
          <Layout
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 8,
            }}
          >
            <Text style={styles.text}>Desempeño</Text>
            <View style={{ flexDirection: "row" }}>{renderStars(3)}</View>
          </Layout>
        </View>
        <View
          style={{
            marginTop: 16,
            borderWidth: 1,
            borderColor: "#E0E0E0",
            borderRadius: 4,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontFamily: fonts.poppinsSemiBold,
              fontSize: 14,
              backgroundColor: "white",
              paddingHorizontal: 8,
              position: "absolute",
              top: -12,
            }}
          >
            Nota del entrenador
          </Text>
          <Text
            style={{
              marginTop: 16,
              paddingHorizontal: 10,
              fontFamily: fonts.poppinsRegular,
              fontSize: 14,
              textAlign: "justify",
              padding: 10,
            }}
          >
            Matilde trabajó muy bien hoy, falta mejorar ciertas cosas como
            apoyos en el exterior y skis paralelos. Sigue asi!
          </Text>
        </View>
        <Button
          style={{ marginTop: 16, backgroundColor: colors.lightBlue }}
          onPress={onClose}
        >
          Cerrar
        </Button>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontFamily: fonts.poppinsRegular,
  },
});

export default DailyReportModal;
