import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { Header, IconButton, TextButton } from '../components';
import { ScrollView } from 'react-native-gesture-handler';

const DetailHistoryTransaction = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Detail Histori Transaksi"
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
                        onPress={() => navigation.navigate('Cs')}
                    ></IconButton>
                }
            ></Header>
        );
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white
                }}
            >
                {renderHeader()}
                <ScrollView>
                    <View
                        style={{
                            height: 100,
                            backgroundColor: 'green',
                            flexDirection: 'row'
                        }}
                    >
                        {/* Ini pertama */}
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'red',
                                flexDirection: 'column'
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'yellow',
                                    flex: 1,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center'
                                    }}
                                >
                                    AKU SAYANG KAMU
                                </Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor: 'purple',
                                    flex: 1,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'white'
                                    }}
                                >
                                    AKU KANGEN KAMU
                                </Text>
                            </View>
                        </View>

                        {/* Ini kedua */}
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'blue'
                            }}
                        ></View>
                    </View>

                    {/* urut ke 2 */}

                    <View
                        style={{
                            height: 40,
                            marginTop: 20,
                            marginHorizontal: 10,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: COLORS.lightOrange
                        }}
                    ></View>

                    {/* URUT KE 3 */}
                    <View
                        style={{
                            height: 120,
                            backgroundColor: 'green',
                            borderRadius: 10,
                            marginHorizontal: 10,
                            marginTop: 20
                        }}
                    ></View>

                    {/* urut ke 4 */}
                    <View
                        style={{
                            height: 80,
                            backgroundColor: 'red',
                            marginTop: 20,
                            marginHorizontal: 10,
                            borderRadius: 10
                        }}
                    ></View>

                    {/* urut ke 5 */}
                    <View
                        style={{
                            height: 70,
                            backgroundColor: 'blue',
                            marginTop: 20,
                            marginHorizontal: 10,
                            borderRadius: 10,
                            flexDirection: 'column'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'green',
                                flex: 1,
                                borderTopEndRadius: 10,
                                borderTopStartRadius: 10
                            }}
                        ></View>
                        <View
                            style={{
                                backgroundColor: 'yellow',
                                flex: 1,
                                borderBottomEndRadius: 10,
                                borderBottomStartRadius: 10
                            }}
                        ></View>
                    </View>

                    {/* contoh garis */}
                    <View
                        style={{
                            marginTop: 20,
                            height: 1,
                            marginHorizontal: 20,
                            backgroundColor: COLORS.lightGray1
                        }}
                    ></View>

                    {/* URUT KE 6 */}
                    <View
                        style={{
                            height: 70,
                            backgroundColor: 'blue',
                            marginTop: 20,
                            marginHorizontal: 10,
                            borderRadius: 10,
                            flexDirection: 'column'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'green',
                                flex: 1,
                                borderTopEndRadius: 10,
                                borderTopStartRadius: 10
                            }}
                        ></View>
                        <View
                            style={{
                                backgroundColor: 'yellow',
                                flex: 1,
                                borderBottomEndRadius: 10,
                                borderBottomStartRadius: 10
                            }}
                        ></View>
                    </View>

                    {/* urut ke 7 */}
                    <View
                        style={{
                            height: 150,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1,
                            marginTop: 20,
                            marginBottom: 20,
                            marginHorizontal: 30,
                            borderRadius: 10
                        }}
                    ></View>
                </ScrollView>
            </View>
        </>
    );
};

export default DetailHistoryTransaction;
