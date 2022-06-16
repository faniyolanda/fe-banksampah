import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { SIZES, COLORS, icons, FONTS } from '../constants';
const width = Dimensions.get('window').width / 2 - 30;
import plants from '../constants/dummyData';

const Home = ({ navigation }) => {
    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

    const CategoryList = () => {
        return (
            <View style={style.categoryContainer}>
                <Text
                    style={{
                        color: COLORS.primary,
                        fontSize: SIZES.body2,
                        fontWeight: 'bold'
                    }}
                >
                    Rekomendasi
                </Text>
            </View>
        );
    };

    const Card = ({ plant }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', plant)}
            >
                <View style={style.card}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: plant.like
                                    ? 'rgba(245, 42, 42,0.2)'
                                    : 'rgba(0,0,0,0.2) '
                            }}
                        >
                            {/* <Icon
                                name="favorite"
                                size={18}
                                color={plant.like ? COLORS.red : COLORS.black}
                            /> */}
                        </View>
                    </View>

                    <View
                        style={{
                            height: 100,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={plant.img}
                            style={{ flex: 1, resizeMode: 'contain' }}
                        />
                    </View>

                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 17,
                            marginTop: 10
                        }}
                    >
                        {plant.name}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5
                        }}
                    >
                        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                            ${plant.price}
                        </Text>
                        <View
                            style={{
                                height: 25,
                                width: 25,
                                backgroundColor: COLORS.green,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 22,
                                    color: COLORS.white,
                                    fontWeight: 'bold'
                                }}
                            >
                                +
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: COLORS.white
            }}
        >
            <View style={style.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Welcome to
                    </Text>
                    <Text
                        style={{
                            fontSize: 38,
                            color: COLORS.green,
                            fontWeight: 'bold'
                        }}
                    >
                        Bank Sampah
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={style.searchContainer}>
                    <Image
                        style={{
                            marginLeft: 20,
                            tintColor: COLORS.lightGray1,
                            width: 25,
                            height: 25
                        }}
                        source={icons.search}
                    />
                    <TextInput placeholder="Search" style={style.input} />
                </View>
                <TouchableOpacity style={style.sortBtn}>
                    <Image
                        style={{
                            tintColor: COLORS.lightGray1,
                            width: 25,
                            height: 25
                        }}
                        source={icons.filter}
                    />
                </TouchableOpacity>
            </View>
            <CategoryList />
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50
                }}
                numColumns={2}
                data={plants}
                renderItem={({ item }) => {
                    return <Card plant={item} />;
                }}
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.primary
    },
    card: {
        height: 225,
        backgroundColor: COLORS.lightGray2,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    },
    header: {
        marginTop: 30
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: COLORS.black
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;
