import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <View style={styles.contsiner}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          name='trash-can'
          color={colors.white}
          size={35}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contsiner: {
    backgroundColor: colors.dangerRed,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
