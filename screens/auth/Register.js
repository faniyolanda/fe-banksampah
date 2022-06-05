import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  function signup() {
    try {
      fetch('http://192.168.1.9/be-banksampah/public/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
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
          fontSize: 20,
          marginBottom: 30,
        }}>
        Silahkan isi data untuk pendaftaran
      </Text>
      <TextInput
        style={{
          color: 'black',
          backgroundColor: '#cccccc',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 20,
          paddingLeft: 20,
        }}
        placeholder=" Email"
        onChangeText={value => setEmail(value)}></TextInput>
      <TextInput
        style={{
          color: 'black',
          backgroundColor: '#cccccc',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 20,
          paddingLeft: 20,
        }}
        placeholder=" Username"
        onChangeText={value => setName(value)}></TextInput>
      <TextInput
        style={{
          color: 'black',
          backgroundColor: '#cccccc',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 20,
          paddingLeft: 20,
        }}
        placeholder=" Password"
        onChangeText={value => setPassword(value)}></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: '#009900',
          color: 'green',
          width: 150,
          height: 50,
          alignSelf: 'center',
          borderRadius: 20,
          marginVertical: 20,
          justifyContent: 'center',
        }}
        onPress={() => signup()}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#ffffff',
            fontSize: 15,
            fontFamily: 'Poppins-SemiBold',
          }}>
          Daftar
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
        }}>
        Sudah punya akun ?
      </Text>
    </View>
  );
};

export default Register;
