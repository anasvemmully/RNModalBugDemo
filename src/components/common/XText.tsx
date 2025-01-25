import React from "react"
import { Text, StyleProp, TextStyle, TextProps } from "react-native"

interface XTextProps extends TextProps {
    children?: string | React.ReactNode
    style?: StyleProp<TextStyle>
    numberOfLines?: number
}

const XText: React.FC<XTextProps> = ({ children = "", style = {}, numberOfLines, ...rest }) => {
    return (
        <Text
            {...rest}
            /**
             * FIX: Text half visible only.
             * DESCRIPTION:‸
             * - Some Android devices may render text vertically half visible only.
             * CONTEXT:
             * - Sited in malayalam language text usage.
             * - Tested on Android 10, 13, 14, 15 with Roboto font.
             * SOURCE:
             * - https://stackoverflow.com/questions/54750503/text-is-getting-cut-off-in-android-for-react-native
             * - https://stackoverflow.com/questions/53236569/what-is-the-difference-between-simple-highquality-balanced-for-textbreakstrate
             */
            textBreakStrategy="simple"
            numberOfLines={numberOfLines}
            allowFontScaling={false}
            style={style}>
            {children}
        </Text>
    )
}

export { XText }
