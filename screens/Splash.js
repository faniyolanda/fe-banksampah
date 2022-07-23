import React from 'react';
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => {
            const __validationSession = async () => {
                const data = await AsyncStorage.getItem('@nasabahid');
                if (data !== null) {
                    navigation.dispatch(StackActions.replace('Tabs'));
                } else {
                    navigation.dispatch(StackActions.replace('Login'));
                }
            };
            __validationSession();
        }, 2000);
    }, []);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.white
                }}
            >
                <Image
                    source={icons.banksampah}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                        tintColor: COLORS.primary
                    }}
                ></Image>

                <Text
                    style={{
                        marginTop: SIZES.padding,
                        color: COLORS.primary,
                        ...FONTS.h2
                    }}
                >
                    BANK SAMPAH
                </Text>

                <Text
                    style={{
                        marginTop: SIZES.base,
                        color: COLORS.primary,
                        ...FONTS.h3
                    }}
                >
                    #SampahAndaUangAnda
                </Text>
            </View>
        </>
    );
};

export default Splash;
