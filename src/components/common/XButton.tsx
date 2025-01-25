import { debounce } from "lodash"
import React, { Component } from "react"
import { View, TouchableOpacity, StyleProp, TextStyle, ViewStyle, StyleSheet } from "react-native"

import { XText } from "./XText"

interface XButtonProps {
    onPress: () => void
    children: string
    customOuterStyle?: StyleProp<ViewStyle>
    customInnerStyle?: StyleProp<ViewStyle>
    customTextStyle?: StyleProp<TextStyle>
    disabled?: boolean
    customButtonStyle?: StyleProp<ViewStyle>
    customInsideView?: StyleProp<ViewStyle>
}

class XButton extends Component<XButtonProps> {
    private debounce: () => void

    constructor(props: XButtonProps) {
        super(props)

        this.debounce = debounce(
            () => {
                this.props.onPress()
            },
            300,
            {
                leading: true,
                trailing: false,
            }
        )
    }

    render() {
        const {
            children,
            customOuterStyle,
            customInnerStyle,
            customTextStyle,
            disabled,
            customButtonStyle,
            customInsideView,
        } = this.props
        const { buttonStyle, insideView, textStyle } = styles

        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.debounce}
                disabled={disabled}
                style={[buttonStyle, customOuterStyle, customButtonStyle]}>
                <View style={[insideView, customInnerStyle, customInsideView]}>
                    <XText style={[textStyle, customTextStyle]}>{children}</XText>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        fontWeight: "bold",
        color: "grey",
        fontSize: 22,
    },
    insideView: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 48,
        flexDirection: "row",
    },
    buttonStyle: {
        backgroundColor: "grey",
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        elevation: 5,
        marginLeft: 30,
        marginRight: 30,
    },
})

export { XButton }
