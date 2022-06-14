import React from 'react';
import { View, Text } from 'react-native';

const About = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text style={{ color: 'black' }}>Bank Sampah</Text>
        </View>
    );
};

export default About;
