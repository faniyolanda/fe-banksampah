import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header, IconButton } from '../components';
import { SIZES, COLORS, icons, FONTS } from '../constants';

const Register = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    function signup() {
        try {
            fetch('http://192.168.1.9/be-banksampah/public/api/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    password: password
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    if (json.success == true) {
                        console.log('Aku bisaaaa yeyy');
                    } else {
                        console.log('Nice Try');
                    }
                })
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    }

    function renderHeader() {
        return (
            <Header
                title=""
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
            {renderHeader()}
            <View style={{ marginHorizontal: SIZES.padding }}>
                <View style={{ marginTop: 30 }}>
                    <View>
                        <Text
                            style={{
                                ...FONTS.h2
                            }}
                        >
                            Daftar
                        </Text>
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                marginTop: SIZES.base,
                                ...FONTS.body3
                            }}
                        >
                            Silahkan lengkapi data dibawah ini untuk melanjutkan
                            pendaftaran.
                        </Text>
                    </View>
                </View>
                {/* Text Input Email */}
                <View style={{ marginTop: 30 }}>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        Email
                    </Text>
                    <TextInput
                        style={{
                            color: 'black',
                            backgroundColor: COLORS.lightGray2,
                            marginVertical: 10,
                            borderRadius: 10,
                            paddingLeft: 20
                        }}
                        onChangeText={(value) => setEmail(value)}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        Username
                    </Text>
                    <TextInput
                        style={{
                            color: 'black',
                            backgroundColor: COLORS.lightGray2,
                            marginVertical: 10,
                            borderRadius: 10,
                            paddingLeft: 20
                        }}
                        onChangeText={(value) => setName(value)}
                        secureTextEntry={true}
                    ></TextInput>
                </View>
                {/* Text Input Password */}
                <View style={{ marginTop: 5 }}>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        Password
                    </Text>
                    <TextInput
                        style={{
                            color: 'black',
                            backgroundColor: COLORS.lightGray2,
                            marginVertical: 10,
                            borderRadius: 10,
                            paddingLeft: 20
                        }}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={true}
                    ></TextInput>
                </View>
            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: '#009900',
                    color: 'green',
                    width: 150,
                    height: 50,
                    alignSelf: 'center',
                    borderRadius: 20,
                    marginVertical: 20,
                    justifyContent: 'center'
                }}
                onPress={() => signup()}
            >
                <Text
                    style={{
                        alignSelf: 'center',
                        color: '#ffffff',
                        fontSize: 15,
                        fontFamily: 'Poppins-SemiBold'
                    }}
                >
                    Daftar
                </Text>
            </TouchableOpacity>
            <Text
                style={{
                    alignSelf: 'center',
                    ...FONTS.body4
                }}
            >
                Sudah punya akun?
                <Text
                    style={{
                        color: COLORS.primary
                    }}
                    onPress={() => navigation.navigate('Login')}
                >
                    Masuk
                </Text>
            </Text>
        </View>
    );
};

export default Register;
