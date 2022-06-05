import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Register = () => {
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
        placeholder=" Email"></TextInput>
      <TextInput
        style={{
          color: 'black',
          backgroundColor: '#cccccc',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 20,
          paddingLeft: 20,
        }}
        placeholder=" Username"></TextInput>
      <TextInput
        style={{
          color: 'black',
          backgroundColor: '#cccccc',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 20,
          paddingLeft: 20,
        }}
        placeholder=" Password"></TextInput>
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
        onPress={() => console.log(email)}>
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
