import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen 
          name="Screen1" 
          component={Screen1} 
          options={{
            title: 'PROYECTO FINAL',
            headerStyle: {
              backgroundColor: '#8e9fdc', // Color de fondo del encabezado
            },
            headerTitleStyle: {
              textAlign: 'center', // Centrar el texto del encabezado
              color: '#1d2323', // Color del texto del encabezado
            },
          }}
        />
        <Stack.Screen 
          name="Screen2"  
          component={Screen2} 
          options={{
            title: 'PRODUCTOS =)',
            headerStyle: {
              backgroundColor: '#8e9fdc', // Color de fondo del encabezado
            },
            headerTitleStyle: {
              textAlign: 'center', // Centrar el texto del encabezado
              color: '#090909', // Color del texto del encabezado
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
