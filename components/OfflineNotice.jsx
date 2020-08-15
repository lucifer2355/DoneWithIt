import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { NetInfo, useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";
import colors from "../config/colors";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  console.log(netInfo);

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },

  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
