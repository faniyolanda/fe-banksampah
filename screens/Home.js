import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{ color: 'black' }}>Home Page</Text>
        </View>
    );
};

export default Home;
