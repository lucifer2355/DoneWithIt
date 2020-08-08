import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useDimensions } from "@react-native-community/hooks";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import Screen from "./components/Screen";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import ListingEditScreen from "./screens/ListingEditScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
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
