import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function signin() {
    try {
      fetch('http://192.168.1.9/be-banksampah/public/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(json => {
          if (json.success == true) {
            console.log('Aku bisaaaa yeyy');
          } else {
            console.log('Nice Try');
          }
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          alignSelf: 'center',
          marginBottom: 50,
          fontSize: 30,
        }}>
        Sign In
      </Text>
      <TextInput
        style={{
          color: 'black',
          backgroundColor: '#cccccc',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 10,
          paddingLeft: 20,
        }}
        onChangeText={value => setEmail(value)}></TextInput>
      <TextInput
        style={{
          color: 'black',
          backgroundColor: '#cccccc',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 10,
          paddingLeft: 20,
        }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: '#009900',
          color: 'green',
          width: 150,
          height: 50,
          alignSelf: 'center',
          borderRadius: 10,
          marginVertical: 20,
          justifyContent: 'center',
        }}
        onPress={() => signin()}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#ffffff',
            fontSize: 15,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
