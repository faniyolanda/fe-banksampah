import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated,
    StatusBar
} from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';

const OnBoarding = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white
                }}
            >
                {/* Ini render logo */}
            </View>
        </>
    );
};

export default OnBoarding;
