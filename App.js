import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./components/Screen";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import OfflineNotice from "./components/OfflineNotice";
import AuthNavigator from "./navigation/AuthNavigator";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <AppNavigator /> */}
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
