import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CategoryPickerItem;
