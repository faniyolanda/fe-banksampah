import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { Header, IconButton, TextButton } from '../components';
import { ScrollView } from 'react-native-gesture-handler';

const Pembayaran = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Pembayaran"
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
                        height: 70,
                        flexDirection: 'row',
                        marginHorizontal: 20
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                marginVertical: 10,
                                tintColor: COLORS.lightGray1,
                                resizeMode: 'contain'
                            }}
                            source={icons.delivery}
                        ></Image>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                marginVertical: 10,
                                tintColor: COLORS.primary,
                                resizeMode: 'contain'
                            }}
                            source={icons.delivery}
                        ></Image>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                marginVertical: 10,
                                tintColor: COLORS.lightGray1,
                                resizeMode: 'contain'
                            }}
                            source={icons.delivery}
                        ></Image>
                    </View>
                </View>
                <View
                    style={{
                        height: 50,
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.gray,
                            fontSize: 15
                        }}
                    >
                        Pilih metode pembayaran yang tersedia
                    </Text>
                </View>
                <View
                    style={{
                        height: 70,
                        backgroundColor: 'green',
                        marginHorizontal: 20,
                        borderRadius: 10
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 13,
                            marginTop: 10,
                            marginLeft: 20
                        }}
                    >
                        Cash On Delivery
                    </Text>
                </View>
                <View
                    style={{
                        height: 70,
                        backgroundColor: 'green',
                        marginHorizontal: 20,
                        borderRadius: 10,
                        marginTop: 10
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 13,
                            marginTop: 10,
                            marginLeft: 20
                        }}
                    >
                        Cash On Delivery
                    </Text>
                </View>
                <View
                    style={{
                        height: 50,
                        marginTop: 20,
                        marginHorizontal: 20
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.gray,
                            fontSize: 15
                        }}
                    >
                        Pilih metode pembayaran yang tersedia
                    </Text>
                </View>
                <View
                    style={{
                        height: 70,
                        backgroundColor: 'green',
                        marginHorizontal: 20,
                        borderRadius: 10
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 13,
                            marginTop: 10,
                            marginLeft: 20
                        }}
                    >
                        Cash On Delivery
                    </Text>
                </View>
                <View
                    style={{
                        height: 70,
                        backgroundColor: 'green',
                        marginHorizontal: 20,
                        borderRadius: 10,
                        marginTop: 10
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 13,
                            marginTop: 10,
                            marginLeft: 20
                        }}
                    >
                        Cash On Delivery
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};
export default Pembayaran;
