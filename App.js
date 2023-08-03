import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import MainNavigation from './Navigators/MainNavigation'


export default function App() {

  const [fontsLoaded] = useFonts({
    'poppinsBold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'poppinsSemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
    'poppinsRegular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'poppinsMedium': require('./assets/Fonts/Poppins-Medium.ttf'),

  });
  
  if (!fontsLoaded) {
    return;
  }

  return (
    <MainNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
