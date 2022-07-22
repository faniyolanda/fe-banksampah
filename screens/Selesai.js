import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { Header, IconButton, TextButton } from '../components';
import { ScrollView } from 'react-native-gesture-handler';

const Selesai = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Selesai"
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
                        flexDirection: 'row'
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
                </View>
                <View
                    style={{
                        height: 80,
                        marginTop: 10,
                        marginHorizontal: 15,
                        marginVertical: 10,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderTopColor: COLORS.gray2,
                        borderRightColor: COLORS.gray2,
                        borderBottomColor: COLORS.gray2,
                        borderLeftColor: COLORS.primary,
                        borderLeftWidth: 4
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            marginVertical: 20,
                            marginHorizontal: 20,
                            ...FONTS.h5,
                            color: COLORS.gray
                        }}
                    >
                        Silahkan lakukan pembayaran DI TEMPAT kepada kurir
                        ketika barang kamu sudah sampai
                    </Text>
                </View>
                <View
                    style={{
                        height: 170,
                        marginTop: 10,
                        alignItems: 'center',
                        marginBottom: 20
                    }}
                >
                    <Image
                        style={{
                            width: 200,
                            height: 200,
                            marginVertical: 10,
                            resizeMode: 'contain'
                        }}
                        source={icons.success}
                    ></Image>
                </View>
                <View
                    style={{
                        height: 50,
                        marginTop: 10,
                        borderWidth: 1,
                        marginHorizontal: 15,
                        marginVertical: 10,
                        borderRadius: 10,
                        borderTopColor: COLORS.gray2,
                        borderRightColor: COLORS.gray2,
                        borderBottomColor: COLORS.gray2,
                        borderLeftColor: COLORS.primary,
                        borderLeftWidth: 4,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h5,
                            marginLeft: 20
                        }}
                    >
                        Nominal yang harus di bayar:
                    </Text>
                </View>
                <View
                    style={{
                        height: 40,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        marginHorizontal: 15,
                        marginTop: 15
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: 'green',
                            borderRadius: 10,
                            marginRight: 3
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: COLORS.green,
                                marginVertical: 10,
                                marginHorizontal: 50
                            }}
                        >
                            Lihat faktur
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            backgroundColor: 'green',
                            borderWidth: 1,
                            borderColor: 'green',
                            borderRadius: 10,
                            marginLeft: 3
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: COLORS.white,
                                marginVertical: 10,
                                marginHorizontal: 35
                            }}
                        >
                            Cek status pesanan
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
export default Selesai;
