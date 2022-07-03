import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header, IconButton } from '../components';
import { SIZES, COLORS, icons, FONTS } from '../constants';

const Ketentuan = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                title="Ketentuan Layanan"
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
                                Ketentuan Layanan
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
                            Kebijakan Privasi berikut ini menjelaskan bagaimana
                            kami, Bank Sampah mengumpulkan, menyimpan,
                            menggunakan, mengolah, menguasai, mentransfer,
                            mengungkapkan dan melindungi Informasi Pribadi anda.
                            Kebijakan Privasi ini berlaku bagi seluruh pengguna
                            aplikasi-aplikasi, situs web (www.banksampah.com),
                            layanan, atau produk kami, kecuali diatur pada
                            kebijakan privasi yang terpisah.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Mohon baca Kebijakan Privasi ini dengan seksama
                            untuk memastikan bahwa anda memahami bagaimana
                            proses pengolahan data kami. Kecuali didefinisikan
                            lain, semua istilah dengan huruf kapital yang
                            digunakan dalam Kebijakan Privasi ini memiliki arti
                            yang sama dengan yang tercantum dalam Ketentuan
                            Layanan.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Kebijakan Privasi ini mencakup hal-hal sebagai
                            berikut :
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            1. Informasi Pribadi yang kami kumpulkan
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            2. Penggunaan Informasi Pribadi yang kami kumpulkan
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            3. Tempat menyimpan Informasi Pribadi anda
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            4. Keamanan Informasi Pribadi anda
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            5. Perubahan Kebijakan Privasi ini
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            6. Cara menghubungi kami
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            1. INFORMASI PRIBADI YANG KAMI KUMPULKAN
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Kami mengumpulkan informasi yang mengidentifikasikan
                            atau dapat digunakan untuk mengidentifikasi,
                            menghubungi, atau menemukan orang atau perangkat
                            yang terkait dengan informasi tersebut ("Informasi
                            Pribadi"). Informasi Pribadi termasuk, tetapi tidak
                            terbatas pada, nama, alamat, tanggal lahir,
                            pekerjaan, nomor telepon, alamat e-mail, jenis
                            kelamin, atau tanda pengenal lainnya. Selain itu,
                            untuk informasi lainnya, seperti profil pribadi,
                            dan/atau nomor pengenal unik, yang dikaitkan atau
                            digabungkan dengan Informasi Pribadi, maka informasi
                            tersebut juga dianggap sebagai Informasi Pribadi.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Informasi Pribadi yang kami kumpulkan dapat
                            diberikan oleh anda secara langsung atau oleh pihak
                            ketiga (misalnya: ketika anda mendaftar atau
                            menggunakan Aplikasi, ketika anda menghubungi
                            layanan pelanggan kami, atau sebaliknya ketika anda
                            memberikan Informasi Pribadi kepada kami). Kami
                            dapat mengumpulkan informasi dalam berbagai macam
                            bentuk dan tujuan (termasuk tujuan yang diizinkan
                            berdasarkan peraturan perundang-undangan yang
                            berlaku).
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            2. PENGGUNAAN INFORMASI PRIBADI YANG KAMI KUMPULKAN
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Kami dapat menggunakan Informasi Pribadi yang
                            dikumpulkan untuk tujuan sebagai berikut maupun
                            untuk tujuan lain yang diizinkan oleh peraturan
                            perundang-undangan yang berlaku :
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Kami dapat menggunakan Informasi Pribadi anda :
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            1. Untuk mengidentifikasi dan mendaftarkan anda
                            sebagai pengguna dan untuk mengadministrasikan,
                            memverifikasi, menonaktifkan, atau mengelola akun
                            anda.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            2. Untuk memungkinkan penyedia layanan untuk
                            menyediakan layanan yang anda minta.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            3. Untuk berkomunikasi dengan anda dan mengirimkan
                            anda informasi sehubungan dengan penggunaan
                            Aplikasi.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            4. Untuk memberitahu anda mengenai segala pembaruan
                            pada Aplikasi atau perubahan pada layanan yang
                            disediakan.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            5. Untuk mengolah dan menanggapi pertanyaan dan
                            saran yang diterima dari anda.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            3. TEMPAT KAMI MENYIMPAN INFORMASI PRIBADI ANDA
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Informasi Pribadi dari anda yang kami kumpulkan
                            dapat disimpan, ditransfer, atau diolah didalam
                            server kami sendiri. Kami akan menggunakan semua
                            upaya yang wajar untuk memastikan bahwa server kami
                            dapat memberikan tingkat perlindungan yang sebanding
                            dengan komitmen kami berdasarkan Kebijakan Privasi
                            ini.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            4. KEAMANAN INFORMASI PRIBADI ANDA
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Kami akan memberlakukan upaya terbaik untuk
                            melindungi dan mengamankan data dan Informasi
                            Pribadi anda dari akses, pengumpulan, penggunaan
                            atau pengungkapan oleh orang-orang yang tidak
                            berwenang dan dari pengolahan yang bertentangan
                            dengan hukum, kehilangan yang tidak disengaja,
                            pemusnahan dan kerusakan atau risiko serupa. Namun,
                            pengiriman informasi melalui internet tidak
                            sepenuhnya aman. Walau kami akan berusaha sebaik
                            mungkin untuk melindungi Informasi Pribadi anda,
                            anda mengakui bahwa kami tidak dapat menjamin
                            keutuhan dan keakuratan Informasi Pribadi apa pun
                            yang anda kirimkan melalui Internet, atau menjamin
                            bahwa Informasi Pribadi tersebut tidak akan dicegat,
                            diakses, diungkapkan, diubah atau dihancurkan oleh
                            pihak ketiga yang tidak berwenang, karena
                            faktor-faktor di luar kendali kami. Anda bertanggung
                            jawab untuk menjaga kerahasiaan detail Akun anda,
                            termasuk kata sandi anda dengan siapapun dan harus
                            selalu menjaga dan bertanggung jawab atas keamanan
                            perangkat yang anda gunakan.
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                marginTop: 30
                            }}
                        >
                            5. PERUBAHAN ATAS KEBIJAKAN PRIVASI INI
                        </Text>
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginTop: 10
                            }}
                        >
                            Kami dapat meninjau dan mengubah Kebijakan Privasi
                            ini atas kebijakan kami sendiri dari waktu ke waktu,
                            untuk memastikan bahwa Kebijakan Privasi ini
                            konsisten dengan perkembangan kami di masa depan,
                            dan/atau perubahan persyaratan hukum atau peraturan.
                            Jika kami memutuskan untuk mengubah Kebijakan
                            Privasi ini, kami akan memberitahu anda tentang
                            perubahan tersebut melalui pemberitahuan umum yang
                            dipublikasikan pada Aplikasi dan/atau situs web,
                            atau sebaliknya ke alamat e-mail anda yang tercantum
                            dalam Akun anda.
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
                            Telepon : 0821 7153 8532
                        </Text>
                    </View>
                </View>

                {/* Footer */}
            </ScrollView>
        </View>
    );
};

export default Ketentuan;
