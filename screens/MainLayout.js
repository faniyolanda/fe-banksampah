import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from '../constants';

import {Cart, Home, Profile, Transaction} from './../screens';

const Tab = createBottomTabNavigator();

const MainLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.home}
              style={{width: 18, height: 18, tintColor: 'green'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.cart}
              style={{width: 18, height: 18, tintColor: 'green'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.transaction}
              style={{width: 18, height: 18, tintColor: 'green'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.profile}
              style={{width: 18, height: 18, tintColor: 'green'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainLayout;
