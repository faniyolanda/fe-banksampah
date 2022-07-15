import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { Header, IconButton, TextButton } from '../components';
import { ScrollView } from 'react-native-gesture-handler';

const HistoryTransaction = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Histori Transaksi"
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

    function renderItem() {
        return (
            <View
                style={{
                    height: 150,
                    marginHorizontal: SIZES.padding,
                    marginVertical: 10,
                    borderRadius: SIZES.radius,
                    borderWidth: 1,
                    borderColor: COLORS.lightGray1,
                    padding: SIZES.radius
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        flex: 1
                    }}
                >
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h4
                            }}
                        >
                            17 Jun 2022
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                ...FONTS.body4
                            }}
                        >
                            Total Deposit
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4
                            }}
                        >
                            Rp. 20.000
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                alignSelf: 'center',
                                ...FONTS.h4
                            }}
                        >
                            SUKSES
                        </Text>
                        <View style={{ flex: 1 }}>
                            <TextButton
                                buttonContainerStyle={{
                                    borderRadius: SIZES.radius,
                                    backgroundColor: COLORS.primary,
                                    paddingHorizontal: 50,
                                    paddingVertical: SIZES.radius
                                }}
                                label="Detail"
                                onPress={() => navigation.navigate('Login')}
                            ></TextButton>
                        </View>
                    </View>
                </View>
            </View>
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
                    {renderItem()}
                    {renderItem()}
                    {renderItem()}
                    {renderItem()}
                    {renderItem()}
                </ScrollView>
            </View>
        </>
    );
};

export default HistoryTransaction;
