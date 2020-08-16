import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLogonFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLogonFailed(true);
    setLogonFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
    authStorage.storeToken(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error='Invalid email and/or password'
          visivle={loginFailed}
        />
        <FormField
          autoCapitalize='none'
          autoCurrect={false}
          placeholder='Email'
          name='email'
          keyboaedType='email-address'
          textContentType='emailAddress'
          icon='email'
        />
        <FormField
          autoCapitalize='none'
          autoCurrect={false}
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
          icon='lock'
        />

        <SubmitButton title='login' />
      </Form>
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
