import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import ListItemSeparator from "../components/ListItemSeparator";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const menuItem = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, setUser } = useAuth();

  const handleLogOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.containerProfile}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        onPress={handleLogOut}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
  },

  containerProfile: {
    marginVertical: 10,
  },

  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
