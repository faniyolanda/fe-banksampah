import React from 'react';
import {
    View,
    SafeAreaView,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, IconButton, NoticeModalJual } from '../components';
import { SIZES, COLORS, icons, FONTS } from '../constants';

const DetailSampah = ({ navigation }) => {
    const [showNoticeModal, setShowNoticeModal] = React.useState(false);

    function renderHeader() {
        return (
            <Header
                title="Detail Sampah"
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
            {showNoticeModal && (
                <NoticeModalJual
                    imageContent={icons.logout}
                    titleContent="Yakin ingin keluar?"
                    descriptionContent="Nanti kalau udah balik tinggal login aja ya"
                    isVisible={showNoticeModal}
                    onRequestClose={() => setShowNoticeModal(false)}
                    onPress={() => {
                        navigation.navigate('Transaction');
                    }}
                />
            )}

            {renderHeader()}
            <View style={style.imageContainer}>
                <Image
                    source={icons.banksampah}
                    style={{
                        resizeMode: 'contain',
                        tintColor: 'black',
                        flex: 1
                    }}
                />
            </View>
            <View style={style.detailsContainer}>
                <View
                    style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                        alignItems: 'flex-end'
                    }}
                >
                    <View style={style.line} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Best choice
                    </Text>
                </View>
                <View
                    style={{
                        marginLeft: 20,
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                        {icons.banksampah}
                    </Text>
                    <View style={style.priceTag}>
                        <Text
                            style={{
                                marginLeft: 15,
                                color: COLORS.white,
                                fontWeight: 'bold',
                                fontSize: 16
                            }}
                        >
                            ${icons.banksampah}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        About
                    </Text>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: 16,
                            lineHeight: 22,
                            marginTop: 10
                        }}
                    >
                        {icons.banksampah}
                    </Text>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>-</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginHorizontal: 10,
                                    fontWeight: 'bold'
                                }}
                            >
                                1
                            </Text>
                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>+</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={style.buyBtn}
                            onPress={() => {
                                setShowNoticeModal(true);
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}
                            >
                                Buy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40
    },
    borderBtnText: { fontWeight: 'bold', fontSize: 28 },
    buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    priceTag: {
        backgroundColor: COLORS.green,
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25
    }
});

export default DetailSampah;
