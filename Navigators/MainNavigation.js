import * as React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookingTour from '../Screens/BookingTour';
import ConfirmBookingScreen from '../Screens/ConfirmBookingScreen';
import ComplateBooking from '../Screens/ComplateBooking';
import Memmories from '../Screens/Memmories';
import TripDetails from '../Screens/TripDetails';
import MapPopUp from '../Screens/MapPopUp';
import GuidScreen from '../Screens/GuidScreen';

import MyTabs from './TabNavigation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer >
      <StatusBar hidden={true} />

      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="BookingTour" component={BookingTour} />
        <Stack.Screen name="ConfirmBookingScreen" component={ConfirmBookingScreen} />
        <Stack.Screen name="ComplateBooking" component={ComplateBooking} />
        <Stack.Screen name="Memmories" component={Memmories} />
        <Stack.Screen name="TripDetails" component={TripDetails} />
        <Stack.Screen name="MapPopUp" component={MapPopUp} />
        <Stack.Screen name="GuidScreen" component={GuidScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;