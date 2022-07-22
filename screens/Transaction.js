import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { Header, IconButton, TextButton } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const Transaction = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Transaksi"
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

                {/* kedua */}
                <View
                    style={{
                        height: 150,
                        marginHorizontal: 20,
                        flexDirection: 'column'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'white',
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h5,
                                    marginLeft: 20
                                }}
                            >
                                Alamat Pengiriman
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'green',
                                borderRadius: 20,
                                marginVertical: 10,
                                marginLeft: 100,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h5,
                                    color: 'white'
                                }}
                            >
                                Pilih alamat
                            </Text>
                        </View>
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
                                ...FONTS.body5,
                                color: 'green'
                            }}
                        >
                            Silahkan tambah alamat pengiriman jika belum ada
                        </Text>
                    </View>
                    <View
                        style={{
                            height: 40,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'green',
                            marginHorizontal: 110,
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h5,
                                color: 'green'
                            }}
                        >
                            Tambah alamat
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 70,
                        marginTop: 20,
                        marginHorizontal: 20,
                        borderRadius: 10,
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: COLORS.lightGray1
                    }}
                >
                    <View
                        style={{
                            width: 70,
                            borderRadius: 10,
                            justifyContent: 'center',
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
                            marginLeft: 10
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'white',
                                flex: 1,
                                marginTop: 15
                            }}
                        >
                            <Text>Kertas</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                marginBottom: 10
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h5,
                                    color: COLORS.primary
                                }}
                            >
                                Rp.5000
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            marginLeft: 30
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h5
                            }}
                        >
                            Total Item: 1
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 150,
                        marginTop: 20,
                        marginHorizontal: 20,
                        borderRadius: 10,
                        flexDirection: 'column',
                        borderWidth: 1,
                        borderColor: COLORS.lightGray1
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            marginHorizontal: 10,
                            marginTop: 10
                        }}
                    >
                        <Text>Ringkasan pembayaran</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginHorizontal: 10
                        }}
                    >
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text>Total belanja</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                marginLeft: 70
                            }}
                        >
                            <Text>Rp.50.000</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginHorizontal: 10
                        }}
                    >
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text>Total belanja</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                marginLeft: 70
                            }}
                        >
                            <Text>Rp.50.000</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginHorizontal: 10
                        }}
                    >
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text>Total belanja</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                marginLeft: 70
                            }}
                        >
                            <Text>Rp.50.000</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Transaction;
