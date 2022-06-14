import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './navigation/tabs';

import {
    Login,
    Register,
    Home,
    Cart,
    Transaction,
    Profile,
    About,
    Cs,
    UndangTeman,
    Kebijakan,
    Ketentuan,
    Edit
} from './screens';

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
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Cs" component={Cs} />
                <Stack.Screen name="Ketentuan" component={Ketentuan} />
                <Stack.Screen name="Kebijakan" component={Kebijakan} />
                <Stack.Screen name="UndangTeman" component={UndangTeman} />
                <Stack.Screen name="Edit" component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
