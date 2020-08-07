import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Image } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import Screen from "./components/Screen";
import ImageInput from "./components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to ascess!");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
