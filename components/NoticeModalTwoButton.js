import React from 'react';
import {
    View,
    Text,
    Animated,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';

import { COLORS, FONTS, SIZES, constants, icons } from '../constants';
import { IconButton } from '../components';
import TextButton from './TextButton';

const NoticeModalTwoButton = ({
    isVisible,
    onRequestClose,
    imageContent,
    titleContent,
    descriptionContent,
    onPress
}) => {
    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

    const [showFilterModal, setShowFilterModal] = React.useState(isVisible);

    React.useEffect(() => {
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(() => onRequestClose());
        }
    }, [showFilterModal]);

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 450]
    });

    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack5
                }}
            >
                {/* Transparent background */}
                <TouchableWithoutFeedback
                    onPress={() => setShowFilterModal(false)}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    ></View>
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: modalY,
                        width: '100%',
                        height: '100%',
                        padding: SIZES.padding,
                        borderTopRightRadius: SIZES.padding,
                        borderTopLeftRadius: SIZES.padding,
                        backgroundColor: COLORS.white
                    }}
                >
                    {/* Header */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                ...FONTS.h3,
                                fontSize: 18
                            }}
                        >
                            Pemberitahuan
                        </Text>

                        <IconButton
                            containerStyle={{
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: COLORS.gray2
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor: COLORS.gray2
                            }}
                            onPress={() => setShowFilterModal(false)}
                        ></IconButton>
                    </View>

                    {/* Content */}
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={imageContent}
                            style={{
                                width: 250,
                                height: 250
                            }}
                        ></Image>
                        <Text
                            style={{
                                ...FONTS.h3
                            }}
                        >
                            {titleContent}
                        </Text>
                        <Text
                            style={{
                                marginTop: 5,
                                ...FONTS.body4
                            }}
                        >
                            {descriptionContent}
                        </Text>
                    </View>

                    {/* Footer */}
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 340,
                            left: 0,
                            right: 0,
                            paddingVertical: SIZES.padding,
                            marginHorizontal: SIZES.padding,
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        <TextButton
                            buttonContainerStyle={{
                                borderRadius: SIZES.padding,
                                borderColor: COLORS.primary,
                                borderWidth: 1,
                                backgroundColor: COLORS.white,
                                paddingHorizontal: 50,
                                paddingVertical: SIZES.radius,
                                flex: 1
                            }}
                            labelStyle={{
                                color: COLORS.primary
                            }}
                            label="Batal"
                            onPress={() => setShowFilterModal(false)}
                        ></TextButton>

                        <View
                            style={{
                                width: 10
                            }}
                        ></View>

                        <TextButton
                            buttonContainerStyle={{
                                borderRadius: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                paddingHorizontal: 50,
                                paddingVertical: SIZES.radius,
                                flex: 1
                            }}
                            label="Keluar"
                            onPress={onPress}
                        ></TextButton>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default NoticeModalTwoButton;
