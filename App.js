import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './navigation/tabs';

import {
    Login,
    Register,
    Home,
    Notification,
    HistoryTransaction,
    Transaction,
    Profile,
    About,
    Cs,
    UndangTeman,
    Kebijakan,
    Ketentuan,
    EditPassword,
    Detail,
    DetailHistoryTransaction,
    Pembayaran,
    Selesai,
    Penarikan
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen
                    name="HistoryTransaction"
                    component={HistoryTransaction}
                />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Transaction" component={Transaction} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Cs" component={Cs} />
                <Stack.Screen name="Ketentuan" component={Ketentuan} />
                <Stack.Screen name="Kebijakan" component={Kebijakan} />
                <Stack.Screen name="UndangTeman" component={UndangTeman} />
                <Stack.Screen name="EditPassword" component={EditPassword} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen
                    name="DetailHistoryTransaction"
                    component={DetailHistoryTransaction}
                />
                <Stack.Screen name="Pembayaran" component={Pembayaran} />
                <Stack.Screen name="Selesai" component={Selesai} />
                <Stack.Screen name="Penarikan" component={Penarikan} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
