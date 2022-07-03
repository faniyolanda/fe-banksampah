import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Header, IconButton } from '../components';
import { SIZES, COLORS, icons, FONTS } from '../constants';

const Kebijakan = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Kebijakan Privasi"
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
                flex: 1
            }}
        >
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                {/* Header */}
                {renderHeader()}

                {/* Body */}

                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: SIZES.padding,
                            paddingTop: SIZES.padding
                        }}
                    >
                        <Image
                            source={icons.banksampah}
                            style={{
                                width: 40,
                                height: 40,
                                marginRight: SIZES.radius,
                                tintColor: COLORS.primary
                            }}
                        ></Image>
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h3,
                                    color: COLORS.black
                                }}
                            >
                                Bank Sampah
                            </Text>
                            <Text
                                style={{
                                    ...FONTS.body4,
                                    color: COLORS.black
                                }}
                            >
                                Kebijakan Privasi
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            padding: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.body4
                            }}
                        >
                            Selamat datang dan Terima kasih sudah mendownload
                            aplikasi yang dikelola oleh Bank Sampah. Demi
                            menjaga kenyamanan Anda dalam menggunakan aplikasi
                            maka, kami menyampaikan ketentuan dalam penggunaan
                            aplikasi, konten, layanan dan fitur yang ada pada
                            aplikasi ini. Harap membaca Ketentuan Layanan ini
                            dengan sebaik-baiknya.
                        </Text>

                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            1. PENGUNJUNG YANG TERDAFTAR
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Beberapa layanan pada aplikasi ini hanya tersedia
                            untuk pengunjung yang telah mendaftar dan
                            mengharuskan pengunjung untuk mendaftar dengan user
                            EMAIL untuk menggunakannya. Sebagai pengunjung yang
                            terdaftar, Anda diwajibkan untuk mengikuti segala
                            peraturan penggunaan layanan tersebut.
                        </Text>

                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            2. AKUN DAN LAYANAN
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Jika Anda membuat akun di aplikasi ini, Anda
                            bertanggung jawab untuk menjaga keamanan akun Anda
                            dan Anda sepenuhnya bertanggung jawab atas semua
                            kegiatan yang terjadi di akun dan tindakan lain yang
                            diambil sehubungan dengan itu. Memberikan informasi
                            kontak palsu dalam bentuk apa pun dapat
                            mengakibatkan penghentian akun Anda. Anda harus
                            segera memberi tahu kami tentang penggunaan tidak
                            sah atas akun Anda atau pelanggaran keamanan
                            lainnya. Kami tidak akan bertanggung jawab atas
                            tindakan atau kelalaian apa pun oleh Anda, termasuk
                            kerugian apa pun yang terjadi sebagai akibat dari
                            tindakan atau kelalaian tersebut. Kami dapat
                            menangguhkan, menonaktifkan, atau menghapus akun
                            Anda (atau bagian apa pun darinya) jika kami
                            memutuskan bahwa Anda telah melanggar ketentuan apa
                            pun dalam Perjanjian ini. Jika kami menghapus akun
                            Anda karena alasan di atas, Anda tidak dapat
                            mendaftar ulang untuk Layanan kami. Kami dapat
                            memblokir alamat email, nomor handphone dan alamat
                            protokol Internet anda untuk mencegah pendaftaran
                            lebih lanjut.
                        </Text>

                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            4. KEBIJAKAN PRIVASI
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Kebijakan Privasi kami mengungkapkan kebijakan
                            penanganan data-data pribadi Anda pada saat Anda
                            mengakses aplikasi kami. Penggunaan aplikasi secara
                            rutin dan terus menerus menunjukkan persetujuan Anda
                            pada Kebijakan Privasi kami. Anda dapat membaca
                            Kebijakan Privasi dengan mengakses
                            https://banksampah.com/privacy-police.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            5. KEKAYAAN INTELEKTUAL
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Penggunaan Konten dan Layanan kami tidak mentransfer
                            kepada Anda hak kekayaan intelektual apapun yang
                            dimiliki oleh Bank Sampah atau pihak ketiga. Seluruh
                            rancangan desain, gambar, audio, video serta kode
                            pemrograman (“Konten”) dalam aplikasi ini adalah hak
                            cipta milik Bank Sampah. Anda tidak diperkenankan
                            untuk memodifikasi, menyalin, mengubah atau menambah
                            rancangan desain, gambar, audio, video serta kode
                            pemrograman dalam fasilitas ini dalam keadaan atau
                            kondisi apapun.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            6. CARA UNTUK MENGHUBUNGI KAMI
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Untuk pertanyaan atau keluhan lainnya, anda dapat
                            menghubungi kami melalui email atau telepon melalui
                            kontak berikut :
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Email : banksampah@gmail.com
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Telepon : 0821 7153 8531
                        </Text>
                    </View>
                </View>

                {/* Footer */}
            </ScrollView>
        </View>
    );
};

export default Kebijakan;
