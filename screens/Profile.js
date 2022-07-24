import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Share,
    StatusBar
} from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
import {
    TextButton,
    Header,
    IconButton,
    NoticeModalTwoButton
} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

const Profile = ({ navigation }) => {
    const [showNoticeModal, setShowNoticeModal] = React.useState(false);

    function renderHeader() {
        return (
            <Header
                title="Profil User"
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

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Ayo download aplikasi terbaru dari Bank Sampah Unit Andalas Sepakat Kota Padang, dan dapatkan info serta event menarik untuk kamu! Buruan downlad di link berikut : https://banksampah.com '
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('@nasabahid');
            await AsyncStorage.removeItem('@nasabahemail');
            await AsyncStorage.removeItem('@nasabahnama');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white
                }}
            >
                {showNoticeModal && (
                    <NoticeModalTwoButton
                        imageContent={icons.logout}
                        titleContent="Yakin ingin keluar?"
                        descriptionContent="Nanti kalau udah balik tinggal login aja ya"
                        isVisible={showNoticeModal}
                        onRequestClose={() => setShowNoticeModal(false)}
                        onPress={() => {
                            setShowNoticeModal(false);
                            removeData();
                            navigation.dispatch(StackActions.replace('Splash'));
                        }}
                    />
                )}

                {renderHeader()}

                <ScrollView
                    style={{
                        flex: 1
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    >
                        <Image
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 20,
                                marginVertical: 10,
                                tintColor: COLORS.primary,
                                resizeMode: 'contain'
                            }}
                            source={icons.userdefault}
                        ></Image>
                        <Text
                            style={{
                                marginTop: SIZES.radius,
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}
                        >
                            Fani Yolanda
                        </Text>
                        <Text
                            style={{
                                color: COLORS.black,
                                ...FONTS.body4
                            }}
                        >
                            faniyolanda0814@gmail.com
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginTop: SIZES.padding,
                            marginBottom: 10
                        }}
                    >
                        {/* Edit Password */}
                        <TouchableOpacity
                            style={{
                                marginHorizontal: SIZES.padding,
                                borderRadius: SIZES.radius,
                                padding: SIZES.base,
                                borderWidth: 1,
                                borderColor: COLORS.lightGray1
                            }}
                            onPress={() => navigation.navigate('EditPassword')}
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
                                        backgroundColor: COLORS.primary
                                    }}
                                >
                                    <Image
                                        source={icons.name}
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
                                    Edit Nama Nasabah
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

                        {/* Edit Password */}
                        <TouchableOpacity
                            style={{
                                marginHorizontal: SIZES.padding,
                                borderRadius: SIZES.radius,
                                padding: SIZES.base,
                                borderWidth: 1,
                                borderColor: COLORS.lightGray1
                            }}
                            onPress={() => navigation.navigate('EditPassword')}
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
                                        backgroundColor: COLORS.primary
                                    }}
                                >
                                    <Image
                                        source={icons.password}
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
                                    Edit Password
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
                            onPress={() => onShare()}
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
                                        backgroundColor: COLORS.primary
                                    }}
                                >
                                    <Image
                                        source={icons.penarikan}
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
                                    Riwayat Penarikan
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
                            onPress={() => onShare()}
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
                                        backgroundColor: COLORS.primary
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
                                        backgroundColor: COLORS.primary
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
                                        backgroundColor: COLORS.primary
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
                                        backgroundColor: COLORS.primary
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
                                        backgroundColor: COLORS.primary
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
                                borderRadius: 10,
                                backgroundColor: COLORS.primary,
                                paddingHorizontal: 50,
                                paddingVertical: SIZES.radius
                            }}
                            label="Logout"
                            onPress={() => {
                                setShowNoticeModal(true);
                            }}
                        ></TextButton>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default Profile;
