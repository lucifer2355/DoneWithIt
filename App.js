import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import Screen from "./components/Screen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
