import React from 'react';
import {View, Text, TouchableOpacity, Image, TextButton} from 'react-native';
import {icons} from '../../constants';

const Profile = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginTop: 24,
        marginBottom: 10,
      }}>
      <TouchableOpacity
        style={{
          marginHorizontal: 24,
          borderRadius: 12,
          padding: 8,
          borderWidth: 1,
          borderColor: '#F5F5F8',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              backgroundColor: '#cccccc',
            }}>
            <Image
              source={icons.profile}
              style={{
                width: 25,
                height: 25,
                tintColor: 'green',
              }}></Image>
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 14,
              alignSelf: 'center',
            }}>
            Edit Profile
          </Text>
          <Image
            style={{
              alignSelf: 'center',
              tintColor: 'black',
              width: 12,
              height: 12,
            }}
            source={icons.rightarrow}
          />
        </View>
      </TouchableOpacity>

      <View
        style={{
          height: 10,
        }}></View>

      <TouchableOpacity
        style={{
          marginHorizontal: 24,
          borderRadius: 12,
          padding: 8,
          borderWidth: 1,
          borderColor: 'F5F5F8',
        }}
        onPress={() => navigation.navigate('UnderConstruction')}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              backgroundColor: 'FDDED4',
            }}>
            <Image
              source={icons.history}
              style={{
                width: 25,
                height: 25,
                tintColor: '#ffffff',
              }}></Image>
          </TouchableOpacity>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.7)',
              flex: 1,
              marginHorizontal: 14,
              alignSelf: 'center',
            }}>
            Riwayat Transaksi
          </Text>
          <Image
            style={{
              alignSelf: 'center',
              tintColor: 'rgba(0, 0, 0, 0.7)',
              width: 12,
              height: 12,
            }}
            source={icons.rightarrow}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 15,
            width: 75,
            height: 40,
          }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              alignSelf: 'center',
              fon,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
