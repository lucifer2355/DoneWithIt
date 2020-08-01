import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import AppText from "./AppText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default PickerItem;
