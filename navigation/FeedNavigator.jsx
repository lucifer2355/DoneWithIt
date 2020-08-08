import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode='modal'>
    <Stack.Screen name='Listings' component={ListingScreen} />
    <Stack.Screen
      name='ListingDetails'
      component={ListingDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
