import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

import Screen from "./components/Screen";
import LoginScreen from "./screens/LoginScreen";
import ListingEditScreen from "./screens/ListingEditScreen";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <ListingEditScreen />
    // <Screen>
    //   <ListItem
    //     image={require("./assets/mosh.jpg")}
    //     title='Mosh'
    //     subTitle='Hello'
    //   />
    // </Screen>
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
