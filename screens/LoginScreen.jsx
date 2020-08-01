import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize='none'
        autoCurrect={false}
        placeholder='Email'
        keyboaedType='email-address'
        onChangeText={(text) => setEmail(text)}
        textContentType='emailAddress'
        icon='email'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCurrect={false}
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
        icon='lock'
      />

      <AppButton title='login' onPress={() => console.log(email, password)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
