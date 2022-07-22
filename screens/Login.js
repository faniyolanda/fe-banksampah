import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { TextButton, Header, IconButton } from '../components';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import config from '../api/config';

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function signin() {
        try {
            fetch(config.ipaddress + '/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
                .then((response) => response.json())

                .then((json) => {
                    if (json.success == true) {
                        navigation.navigate('Penarikan');
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
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
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
                                Masuk
                            </Text>
                            <Text
                                style={{
                                    color: COLORS.darkGray,
                                    marginTop: SIZES.base,
                                    ...FONTS.body3
                                }}
                            >
                                Silahkan masuk menggunakan email yang sudah
                                terdaftar.
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
                    {/* Button Login */}
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#009900',
                            color: 'green',
                            width: 150,
                            height: 50,
                            alignSelf: 'center',
                            borderRadius: 10,
                            marginVertical: 20,
                            justifyContent: 'center'
                        }}
                        onPress={() => signin()}
                    >
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: '#ffffff',
                                fontSize: 15,
                                fontFamily: 'Poppins-SemiBold'
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            alignSelf: 'center',
                            ...FONTS.body4
                        }}
                    >
                        Belum punya akun?
                        <Text
                            style={{
                                color: COLORS.primary
                            }}
                            onPress={() => navigation.navigate('Register')}
                        >
                            Daftar disini
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    );
};

export default Login;
