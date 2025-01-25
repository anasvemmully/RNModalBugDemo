import React from "react"
import { TouchableOpacity } from "react-native"

import { XText } from "./XText"

const GoldenButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                { backgroundColor: "yellow", borderRadius: 10, paddingBottom: 5 },
                props.style,
            ]}>
            <XText style={{ color: "#000", fontSize: 16, fontWeight: "bold" }}>
                {props.children}
            </XText>
        </TouchableOpacity>
    )
}

export { GoldenButton }
