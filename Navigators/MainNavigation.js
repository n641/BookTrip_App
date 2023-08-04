import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookingTour from '../Screens/BookingTour';
import ConfirmBookingScreen from '../Screens/ConfirmBookingScreen';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{headerShown:false }} >
        <Stack.Screen name="BookingTour" component={BookingTour} />
        <Stack.Screen name="ConfirmBookingScreen" component={ConfirmBookingScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;