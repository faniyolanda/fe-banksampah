import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';

const Home = ({ navigation }) => {
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
                <View
                    style={{
                        flexDirection: 'column',
                        marginTop: SIZES.padding,
                        marginBottom: 10
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                        onPress={() => navigation.navigate('UnderConstruction')}
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
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            height: SIZES.duapuluh
                        }}
                    ></View>
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray1
                        }}
                        onPress={() => navigation.navigate('UnderConstruction')}
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
                                Undang Teman
                            </Text>
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: COLORS.transparentBlack7,
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
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
