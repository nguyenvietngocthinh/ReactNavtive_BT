import * as React from 'react';
import { Pressable, Button, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from "./pages/Screen01";
import Screen02 from "./pages/Screen02";
import Lab5b from './components/Lab5b';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator mode="modal">
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="Screen01"
    //       component={Screen01}
    //     />
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="Screen02"
    //       component={Screen02}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View style={{flex:1}}>
      <Lab5b/>    
    </View>    
  );
}
