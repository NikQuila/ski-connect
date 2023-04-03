import React from "react";
import { View } from "react-native";
import { BarChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import { Card, Text } from "@ui-kitten/components";
import fonts from "../utils/fonts";

import colorsLabel from "../utils/colors";

const CustomBarChart = () => {
  const data = [
    { label: "FS", value: 4, color: colorsLabel.fs },
    { label: "GS", value: 8, color: colorsLabel.gs },
    { label: "SL", value: 7, color: colorsLabel.sl },
    { label: "SG", value: 3, color: colorsLabel.sg },
    { label: "DH", value: 0, color: colorsLabel.dh },
    { label: "RACES", value: 3, color: colorsLabel.race },
    { label: "GYM", value: 10, color: colorsLabel.gym },
  ];

  const barData = data.map((item) => item.value);

  const colors = data.map((item) => item.color);

  return (
    <Card style={{ height: 300, padding: 20, borderRadius: 10 }}>
      <Text style={{ fontFamily: fonts.poppinsSemiBold, textAlign: "center" }}>
        Gráfico de Días
      </Text>
      <View style={{ flexDirection: "row", height: "92%" }}>
        <YAxis
          data={barData}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{ fontSize: 10, fill: "grey" }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <BarChart
            style={{ flex: 1 }}
            data={barData}
            contentInset={{ top: 10, bottom: 10 }}
            gridMin={0}
            spacingInner={0.3}
            spacingOuter={0.3}
            svg={{ fill: "steelblue" }}
          >
            <Grid />
          </BarChart>
          <XAxis
            style={{ marginTop: 10 }}
            data={barData}
            formatLabel={(value, index) => data[index].label}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 10, fill: "grey" }}
          />
        </View>
      </View>
    </Card>
  );
};

export default CustomBarChart;
