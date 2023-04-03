import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import { Text, Card, Divider } from "@ui-kitten/components";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Santiago,CL&appid=7610359b4714f6e45a0f3ed4b340fd2f&units=metric"
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error al obtener datos meteorológicos:", error);
    }
  };

  if (!weatherData) {
    return <Text>Cargando datos meteorológicos...</Text>;
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.temperature} category="h1">
          {Math.round(weatherData.main.temp)}°C
        </Text>
        <Text style={styles.description} category="h6">
          {weatherData.weather[0].description}
        </Text>
        <Divider style={styles.divider} />
        <View style={styles.extraInfo}>
          <Text style={styles.minMaxTemp} category="h6">
            Min: {Math.round(weatherData.main.temp_min)}°C
          </Text>
          <Text style={styles.minMaxTemp} category="h6">
            Max: {Math.round(weatherData.main.temp_max)}°C
          </Text>
        </View>
        <Text style={styles.humidity} category="h6">
          Humedad: {weatherData.main.humidity}%
        </Text>
      </Card>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    padding: 6,
    borderRadius: 10,
  },
  temperature: {
    color: "#1E90FF",
    textAlign: "center",
  },
  description: {
    color: "#696969",
    textAlign: "center",
    marginBottom: 8,
  },
  divider: {
    marginBottom: 8,
  },
  extraInfo: {
    flexDirection: "row",
    gap: 4,
  },
  minMaxTemp: {
    color: "#FF6347",
  },
  humidity: {
    color: "#20B2AA",
    textAlign: "center",
  },
});
