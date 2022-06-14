import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { TextButton, Header, IconButton } from '../components';

const Profile = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Profile"
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
            {renderHeader()}
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        marginTop: SIZES.padding,
                        marginBottom: 10
                    }}
                >
                    {/* Edit Profile */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                        onPress={() => navigation.navigate('Edit')}
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
                                    backgroundColor: COLORS.green
                                }}
                            >
                                <Image
                                    source={icons.profile}
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
                                Edit Profile
                            </Text>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: COLORS.lightGray1,
                                    width: 12,
                                    height: 12
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: 15
                        }}
                    ></View>

                    {/* Undang Teman */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                        onPress={() => navigation.navigate('UndangTeman')}
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
                                    backgroundColor: COLORS.green
                                }}
                            >
                                <Image
                                    source={icons.invite}
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
                                Undang Teman
                            </Text>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: COLORS.lightGray1,
                                    width: 12,
                                    height: 12
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: 10
                        }}
                    ></View>
                    <Text
                        style={{
                            color: COLORS.transparentBlack7,
                            ...FONTS.h4,
                            marginHorizontal: SIZES.padding,
                            marginVertical: SIZES.padding
                        }}
                    >
                        Info Lainnya
                    </Text>

                    {/* Kebijakan Privacy */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                        onPress={() => navigation.navigate('Kebijakan')}
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
                                    backgroundColor: COLORS.green
                                }}
                            >
                                <Image
                                    source={icons.privacypolice}
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
                                Kebijakan Privasi
                            </Text>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: COLORS.lightGray1,
                                    width: 12,
                                    height: 12
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: 15
                        }}
                    ></View>

                    {/* Ketentuan Layanan */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                        onPress={() => navigation.navigate('Ketentuan')}
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
                                    backgroundColor: COLORS.green
                                }}
                            >
                                <Image
                                    source={icons.policyterm}
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
                                Ketentuan Layanan
                            </Text>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: COLORS.lightGray1,
                                    width: 12,
                                    height: 12
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: 15
                        }}
                    ></View>

                    {/* Customer Service */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                        onPress={() => navigation.navigate('Cs')}
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
                                    backgroundColor: COLORS.green
                                }}
                            >
                                <Image
                                    source={icons.customerservice}
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
                                Customer Service
                            </Text>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: COLORS.lightGray1,
                                    width: 12,
                                    height: 12
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: 15
                        }}
                    ></View>

                    {/* Tentang Bank Sampah */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                        onPress={() => navigation.navigate('About')}
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
                                    backgroundColor: COLORS.green
                                }}
                            >
                                <Image
                                    source={icons.banksampah}
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
                                Tentang Bank Sampah
                            </Text>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: COLORS.lightGray1,
                                    width: 12,
                                    height: 12
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: SIZES.padding,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 50
                    }}
                >
                    <TextButton
                        buttonContainerStyle={{
                            borderRadius: SIZES.padding,
                            backgroundColor: COLORS.primary,
                            paddingHorizontal: 50,
                            paddingVertical: SIZES.radius
                        }}
                        label="Logout"
                        onPress={() => navigation.navigate('Login')}
                    ></TextButton>
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;
