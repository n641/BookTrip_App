import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TripPlanScreen from '../Screens/TripPlanScreen';
import Memmories from '../Screens/Memmories';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Constant/Colors';

const Tab = createBottomTabNavigator();

export default function MyTabs({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.purple,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    left: 16,
                    borderRadius: 16,
                    elevation: 20,
                    shadowColor: 'black',
                    shadowOffset: { width: 8, height: 8 },
                    shadowOpacity: 0.29,
                }

            }}
        >

            <Tab.Screen
                name="Profile"
                component={TripPlanScreen}  // Trip plan
                options={{
                    tabBarLabel: 'Profile',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={35} />
                    ),
                }}
            />

            <Tab.Screen
                name="Trip"
                component={TripPlanScreen}
                options={{
                    tabBarLabel: 'Trip',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="airplane" color={color} size={35} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('BookingTour')
                    },
                }}
            />

            <Tab.Screen
                name="Add"
                component={TripPlanScreen}
                options={{
                    tabBarLabel: 'Add',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="add-circle" size={45} color={color} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('BookingTour')  // add trip
                    },
                }}
            />

            <Tab.Screen
                name="All Trip"
                component={TripPlanScreen}
                options={{
                    tabBarLabel: 'All Trip',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="list-2" size={24} color={color} />
                    ),
                }}

            />

            <Tab.Screen
                name="history"
                component={Memmories}
                options={{
                    tabBarLabel: 'history',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="history" size={35} color={color} />
                    ),
                }}

                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('Memmories')  // memmories
                    },
                }}
            />



        </Tab.Navigator>
    );
}