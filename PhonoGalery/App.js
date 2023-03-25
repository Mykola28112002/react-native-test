import React from 'react';
import {} from "react-native";
import PhotoList from './src/screens/PhotoList'; 
import PhotoItem from './src/screens/PhotoItem'; 
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/store';

const Stack = createStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='PhotoList'>
        <Stack.Screen options={{
          headerShown: false
        }}
          name="PhotoList"
          component={PhotoList }
        />
        
        <Stack.Screen options={{
          headerShown: false
        }}
          name='PhotoItem'
          component={PhotoItem}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;



