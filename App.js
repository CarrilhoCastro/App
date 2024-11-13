import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EventDetails from './screens/EventDetails';
import AllEventsScreen from './screens/AllEventsScreen';
import AllEntertainmentScreen from './screens/AllEntertainmentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: '#222' },
            headerTintColor: '#FFFF00',
            title: 'Diversão ao seu alcance!',
          }}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{
            headerStyle: { backgroundColor: '#222' },
            headerTintColor: '#FFFF00',
            title: 'Detalhes do Evento',
          }}
        />
        <Stack.Screen
          name="AllEvents"
          component={AllEventsScreen}
          options={{
            headerStyle: { backgroundColor: '#222' },
            headerTintColor: '#FFFF00',
            title: 'Todos os Eventos',
          }}
        />
        <Stack.Screen
          name="AllEntertainment"
          component={AllEntertainmentScreen}
          options={{
            headerStyle: { backgroundColor: '#222' },
            headerTintColor: '#FFFF00',
            title: 'Todos os Entretenimentos',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
