import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { Header, IconButton, TextButton } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const Penarikan = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Penarikan"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 25
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    ></IconButton>
                }
                rightComponent={
                    <IconButton
                        icon={icons.callcenter}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.navigate('HelpCenter')}
                    ></IconButton>
                }
            ></Header>
        );
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            {renderHeader()}
            <ScrollView>
                <View
                    style={{
                        height: 60,
                        flexDirection: 'column',
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h2,
                                color: COLORS.primary
                            }}
                        >
                            CEK SALDO
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.white,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.body4
                            }}
                        >
                            *Saldo Minimal Rp.50.000,-
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h3,
                                color: COLORS.primary
                            }}
                        >
                            {' '}
                            Saldo Anda: Rp. 40.000,-
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        Metode Pembayaran
                    </Text>
                    <TextInput
                        style={{
                            color: 'black',
                            backgroundColor: COLORS.lightGray2,
                            marginVertical: 10,
                            borderRadius: 10,
                            paddingLeft: 20
                        }}
                        onChangeText={(value) => setEmail(value)}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        Jumlah Penarikan
                    </Text>
                    <TextInput
                        style={{
                            color: 'black',
                            backgroundColor: COLORS.lightGray2,
                            marginVertical: 10,
                            borderRadius: 10,
                            paddingLeft: 20
                        }}
                        onChangeText={(value) => setEmail(value)}
                    ></TextInput>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#009900',
                        color: 'green',
                        width: 150,
                        height: 50,
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginVertical: 20,
                        justifyContent: 'center'
                    }}
                    onPress={() => signin()}
                >
                    <Text
                        style={{
                            alignSelf: 'center',
                            color: '#ffffff',
                            fontSize: 15,
                            fontFamily: 'Poppins-SemiBold'
                        }}
                    >
                        Minta Penarikan
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
export default Penarikan;
