import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ClearScreen from '../screens/ClearScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Count up',

};

const ClearStack = createStackNavigator({
  Clears: ClearScreen,
});

ClearStack.navigationOptions = {
  tabBarLabel: 'Clear the count',

};


export default createBottomTabNavigator({
  HomeStack,
  ClearStack,
});
