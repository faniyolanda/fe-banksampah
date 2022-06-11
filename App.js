import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './navigation/tabs';

import { Login, Register, Home, Cart, Transaction, Profile } from './screens';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Tabs'}
            >
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Transaction" component={Transaction} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
