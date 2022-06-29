import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Header, IconButton } from '../components';
import { SIZES, COLORS, icons, FONTS } from '../constants';

const Cs = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Customer Service"
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
                flex: 1
            }}
        >
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                {/* Header */}
                {renderHeader()}

                {/* Body */}

                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: SIZES.padding,
                            paddingTop: SIZES.padding
                        }}
                    >
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                marginRight: SIZES.radius
                            }}
                        ></Image>
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h3,
                                    color: COLORS.black
                                }}
                            >
                                Bank Sampah
                            </Text>
                            <Text
                                style={{
                                    ...FONTS.body4,
                                    color: COLORS.black
                                }}
                            >
                                Customer Service
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            height: 30
                        }}
                    ></View>

                    <View
                        style={{
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderRadius: SIZES.radius,
                                padding: SIZES.base,
                                borderWidth: 1,
                                borderColor: COLORS.lightGray1
                            }}
                            onPress={() => console.log('Tes')}
                        >
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        height: 40,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.primary
                                    }}
                                >
                                    <Image
                                        source={icons.office}
                                        style={{
                                            width: 25,
                                            height: 25,
                                            tintColor: COLORS.white
                                        }}
                                    ></Image>
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        color: COLORS.transparentBlack7,
                                        flex: 1,
                                        marginHorizontal: SIZES.font,
                                        alignSelf: 'center',
                                        ...FONTS.h4
                                    }}
                                >
                                    Jam Operasional Kantor
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.transparentBlack7,
                                        flex: 1,
                                        marginLeft: 54,
                                        marginRight: 5,
                                        alignSelf: 'center',
                                        ...FONTS.body4
                                    }}
                                >
                                    Anda dapat mengajukan pertanyaan atau
                                    keluhan dengan mendatangi langsung Kantor
                                    Bank Sampah dengan alamat :
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.transparentBlack7,
                                        flex: 1,
                                        marginLeft: 54,
                                        marginRight: 5,
                                        alignSelf: 'center',
                                        ...FONTS.h4
                                    }}
                                >
                                    Jl. Alai Timur No.30 Kel. Alai Parak Kopi
                                    Kec. Padang Utara Kota Padang.
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            height: 15
                        }}
                    ></View>

                    <View
                        style={{
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderRadius: SIZES.radius,
                                padding: SIZES.base,
                                borderWidth: 1,
                                borderColor: COLORS.lightGray1
                            }}
                            onPress={() => console.log('Tes')}
                        >
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        height: 40,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.primary
                                    }}
                                >
                                    <Image
                                        source={icons.email}
                                        style={{
                                            width: 25,
                                            height: 25,
                                            tintColor: COLORS.white
                                        }}
                                    ></Image>
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        color: COLORS.transparentBlack7,
                                        flex: 1,
                                        marginHorizontal: SIZES.font,
                                        alignSelf: 'center',
                                        ...FONTS.h4
                                    }}
                                >
                                    <Text style={{ ...FONTS.body4 }}>
                                        Email :{' '}
                                    </Text>{' '}
                                    banksampah@gmail.com
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            height: 15
                        }}
                    ></View>

                    <View
                        style={{
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderRadius: SIZES.radius,
                                padding: SIZES.base,
                                borderWidth: 1,
                                borderColor: COLORS.lightGray1
                            }}
                            onPress={() => console.log('Tes')}
                        >
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        height: 40,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.primary
                                    }}
                                >
                                    <Image
                                        source={icons.call}
                                        style={{
                                            width: 25,
                                            height: 25,
                                            tintColor: COLORS.white
                                        }}
                                    ></Image>
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        color: COLORS.transparentBlack7,
                                        flex: 1,
                                        marginHorizontal: SIZES.font,
                                        alignSelf: 'center',
                                        ...FONTS.h4
                                    }}
                                >
                                    <Text style={{ ...FONTS.body4 }}>
                                        Telepon :{' '}
                                    </Text>{' '}
                                    0821 7153 8532
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Footer */}
            </ScrollView>
        </View>
    );
};

export default Cs;
