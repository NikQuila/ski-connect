import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Layout,
  Text,
  Input,
  Datepicker,
  Button,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import fonts from "../../utils/fonts";
import * as ImagePicker from "expo-image-picker";
// componentes
import CustomButton from "../../components/CustomButton";
import colors from "../../utils/colors";

const CreateAthleteScreen = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(new IndexPath(0));
  const [birthDate, setBirthDate] = useState(new Date());
  const [parentEmail, setParentEmail] = useState("");

  const categories = ["U-8", "U-10", "U-12", "U-14", "U-16", "U-18", "U-21"];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    console.log({
      name,
      category: categories[category.row],
      birthDate,
      parentEmail,
    });
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>Crear atleta</Text>
      <Input
        style={styles.input}
        value={name}
        label="Nombre del Atleta"
        onChangeText={(text) => setName(text)}
      />
      <Select
        style={styles.input}
        selectedIndex={category}
        label="Categoría"
        value={categories[category.row]}
        onSelect={(index) => setCategory(index)}
      >
        {categories.map((cat, index) => (
          <SelectItem key={index} title={cat} />
        ))}
      </Select>
      <Datepicker
        style={styles.input}
        date={birthDate}
        label="Fecha de Nacimiento"
        onSelect={(nextDate) => setBirthDate(nextDate)}
        min={new Date("1990-01-01")}
      />

      <Input
        style={styles.input}
        value={parentEmail}
        label="Mail Apoderado"
        onChangeText={(text) => setParentEmail(text)}
      />
      <View style={styles.imageInputContainer}>
        <Text style={styles.label}>Foto del Atleta</Text>
        <Image
          source={
            image
              ? { uri: image }
              : {
                  uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                }
          }
          style={styles.image}
        />
        <CustomButton
          title={"Cambiar foto"}
          onPress={pickImage}
          backgroundColor={colors.lightBlue}
          textColor="white"
          width={150}
          height={30}
          fontSize={10}
        />
      </View>
      <View style={styles.buttonCreateKidContainer}>
        <CustomButton
          title={"Crear Atleta"}
          onPress={handleSubmit}
          backgroundColor={colors.lightBlue}
          textColor="white"
          width={300}
          height={40}
          fontSize={16}
        />
      </View>
    </Layout>
  );
};

export default CreateAthleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: fonts.poppinsSemiBold,
  },
  input: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#919ab0",
  },
  imageInputContainer: {
    gap: 4,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  submitButton: {
    marginTop: 24,
  },
  buttonCreateKidContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});
