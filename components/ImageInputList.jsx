import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <ImageInput
          key={uri}
          imageUri={uri}
          onChangeImage={() => onRemoveImage(uri)}
        />
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;
