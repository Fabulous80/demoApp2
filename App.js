import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import OurTeamScreen from "./screens/OurTeamScreen";
import {fontAwesome} from '@expo/vector-icons';
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home': 'ios-home';
            } else if (route.name === 'Events') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'OurTeam') {
              iconName = focused ? 'ios-reverse-camera' : 'ios-camera';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="OurTeam" component={OurTeamScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

