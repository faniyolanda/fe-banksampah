import React from 'react';
import { View, Text } from 'react-native';

const Default = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{ color: 'black' }}>Cart Page</Text>
        </View>
    );
};

export default Default;
