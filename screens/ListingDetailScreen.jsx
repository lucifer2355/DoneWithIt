import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailScreen() {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jecket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "400",
  },

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListingDetailScreen;
