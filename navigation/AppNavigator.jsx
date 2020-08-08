import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' componen={FeedNavigator} />
    <Tab.Screen name='ListingsEdit' componen={ListingEditScreen} />
    <Tab.Screen name='Account' componen={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
