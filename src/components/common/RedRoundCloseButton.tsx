import { Image } from "expo-image"
import React from "react"
import { TouchableOpacity, StyleSheet, StyleProp, ImageStyle, ViewStyle } from "react-native"

interface RedRoundCloseButtonProps {
    imageStyle?: StyleProp<ImageStyle>
    onPress: () => void
    touchableStyle?: StyleProp<ViewStyle>
}

const RedRoundCloseButton: React.FC<RedRoundCloseButtonProps> = ({
    imageStyle,
    onPress,
    touchableStyle,
}) => {
    const hitSlop = { top: 10, bottom: 20, left: 20, right: 10 }
    return (
        <TouchableOpacity
            hitSlop={hitSlop}
            style={touchableStyle || styles.touchableStyle}
            onPress={onPress}>
            <Image
                source={require("../../assets/images/cancel_grey.webp")}
                style={imageStyle || styles.image}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableStyle: {
        alignSelf: "flex-end",
        zIndex: 10,
        position: "absolute",
        top: 20,
        right: 10,
    },
    image: {
        height: 35,
        width: 35,
        marginRight: 5,
    },
})

export { RedRoundCloseButton }
