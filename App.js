import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessagesScreen from "./screens/MessagesScreen";
import Screen from "./components/Screen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import AccountScreen from "./screens/AccountScreen";

export default function App() {
  return <AccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
