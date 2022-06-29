import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header, IconButton } from '../components';
import { SIZES, COLORS, icons, FONTS } from '../constants';

const EditPassword = ({ navigation }) => {
    const [password, setPassword] = React.useState('');

    function renderHeader() {
        return (
            <Header
                title="Edit Password"
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
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}

            <View style={{ marginHorizontal: SIZES.padding }}>
                {/* Text Input Password */}
                <View style={{ marginTop: 20 }}>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        Password Baru
                    </Text>
                    <TextInput
                        style={{
                            color: 'black',
                            backgroundColor: COLORS.lightGray2,
                            marginVertical: 5,
                            borderRadius: 10,
                            paddingLeft: 20
                        }}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={true}
                    ></TextInput>
                </View>
                {/* Text Input Password 2*/}
                <View style={{ marginTop: 10 }}>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        Ulangi Password Baru
                    </Text>
                    <TextInput
                        style={{
                            color: 'black',
                            backgroundColor: COLORS.lightGray2,
                            marginVertical: 5,
                            borderRadius: 10,
                            paddingLeft: 20
                        }}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={true}
                    ></TextInput>
                </View>
                {/* Button Login */}
                <TouchableOpacity
                    style={{
                        backgroundColor: '#009900',
                        color: 'green',
                        width: 160,
                        height: 50,
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginVertical: 20,
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log('A')}
                >
                    <Text
                        style={{
                            alignSelf: 'center',
                            color: '#ffffff',
                            fontSize: 15,
                            fontFamily: 'Poppins-SemiBold'
                        }}
                    >
                        Edit Password
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditPassword;
