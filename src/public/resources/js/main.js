import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  SectionList,
  ScrollView,

  Component,
  Alert
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export let showHeader = true;

export function setShowHeader(){
  showHeader = false;
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" options={{headerShown: true}} component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export function HomeScreen() {
  return (
    
    <LayoutBackground>
    <ScrollView>
    <View>
      <Text>Charlie's amazing improv app</Text>
      <Text>Tap the drawer to begin!</Text>
    </View>
    </ScrollView>
    </LayoutBackground>
    
  );
}
