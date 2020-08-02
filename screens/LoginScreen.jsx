import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValue={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCurrect={false}
              placeholder='Email'
              keyboaedType='email-address'
              onChangeText={handleChange("email")}
              textContentType='emailAddress'
              icon='email'
            />
            <AppTextInput
              autoCapitalize='none'
              autoCurrect={false}
              onChangeText={handleChange("password")}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
              icon='lock'
            />

            <AppButton title='login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
