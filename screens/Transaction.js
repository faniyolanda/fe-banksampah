import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import { Header, IconButton, TextButton } from '../components';
import { ScrollView } from 'react-native-gesture-handler';

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
                        backgroundColor: 'green',
                        flexDirection: 'row',
                        marginHorizontal: 20
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'yellow'
                        }}
                    ></View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'blue'
                        }}
                    ></View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'purple'
                        }}
                    ></View>
                </View>

                {/* kedua */}
                <View
                    style={{
                        height: 150,
                        backgroundColor: 'green',
                        marginTop: 20,
                        marginHorizontal: 20,
                        flexDirection: 'column'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'grey',
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'blue'
                            }}
                        ></View>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'pink'
                            }}
                        ></View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'red'
                        }}
                    ></View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'pink'
                        }}
                    ></View>
                </View>
                <View
                    style={{
                        height: 100,
                        backgroundColor: 'green',
                        marginTop: 20,
                        marginHorizontal: 20,
                        borderRadius: 10
                    }}
                ></View>
                <View
                    style={{
                        height: 150,
                        backgroundColor: 'pink',
                        marginTop: 20,
                        marginHorizontal: 20,
                        borderRadius: 10,
                        flexDirection: 'column'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'yellow'
                        }}
                    ></View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'green'
                        }}
                    ></View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'pink'
                        }}
                    ></View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'orange'
                        }}
                    ></View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Transaction;
