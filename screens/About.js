import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { Header, IconButton } from '../components';

const About = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Tentang Bank Sampah"
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
                backgroundColor: COLORS.white
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
                            icon={icons.callcenter}
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
                                Tentang Bank Sampah
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            marginHorizontal: SIZES.padding,
                            marginTop: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.body4,
                                padding: 10,
                                textAlign: 'center'
                            }}
                        >
                            Selamat datang dan Terima kasih sudah mendownload
                            aplikasi yang dikelola oleh Bank Sampah. Bank Sampah
                            adalah sebuah perusahaan yang dibentuk untuk
                            menyelesaikan masalah sampah pada masyarakat.
                            Pengguna dapat menabung sampah di Bank Sampah Unit
                            terdekat dari lokasi untuk mendapatkan saldo sesuai
                            dengan yang telah ditentukan.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default About;
