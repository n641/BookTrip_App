import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookingTour from '../Screens/BookingTour';
import ConfirmBookingScreen from '../Screens/ConfirmBookingScreen';
import ComplateBooking from '../Screens/ComplateBooking';
import Memmories from '../Screens/Memmories';

import MyTabs from './TabNavigation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="BookingTour" component={BookingTour} />
        <Stack.Screen name="ConfirmBookingScreen" component={ConfirmBookingScreen} />
        <Stack.Screen name="ComplateBooking" component={ComplateBooking} />
        <Stack.Screen name="Memmories" component={Memmories} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;