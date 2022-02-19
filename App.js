import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Filmes from './src/componets/Filmes';
import Moeda from './src/componets/Moeda';
import Cep from './src/componets/Cep';
const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Filmes') {
              iconName = focused
                ? 'videocam'
                : 'videocam-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            if (route.name === 'Moeda') {
              iconName = focused
                ? 'cash'
                : 'cash-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            if (route.name === 'Cep') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle:{backgroundColor:'black'}
        })}
      >
        <Tab.Screen name="Filmes" component={Filmes} options={{headerShown:false}}/>
        <Tab.Screen name="Moeda" component={Moeda} options={{headerShown:false}}/>
        <Tab.Screen name="Cep" component={Cep} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}