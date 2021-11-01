/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SWRConfig} from 'swr';
import {fetcher} from '../core/fetcher';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Home from './screen/Home';
import ProductList from './screen/ProductList';
import StitchesScreen from './screen/StitchesScreen';
import {observer} from 'mobx-react';

const defaultSettings: {[name: string]: boolean} = {
  coutinuousPlay: true,
  allowedCellular: true,
  networkAuto: false,
};

const Tab = createBottomTabNavigator();

const TabNavigator = observer(() => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarLabel: '상품리스트',
        }}
      />
      <Tab.Screen
        name="StitchesScreen"
        component={StitchesScreen}
        options={{
          tabBarLabel: '상품상세',
        }}
      />
    </Tab.Navigator>
  );
});

const AppStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SWRConfig
      value={{
        errorRetryInterval: 3000,
        errorRetryCount: 3,
        fetcher,
      }}>
      <>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </>
    </SWRConfig>
  );
};

export default App;
