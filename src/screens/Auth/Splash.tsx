import { CommonActions, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import * as SplashScreen from "expo-splash-screen"
import React, { useEffect } from "react"
import { View } from "react-native"

import { AppStackParamList } from "../../routes"

type SplashNavigationProp = StackNavigationProp<AppStackParamList, "Splash">

const Splash = () => {
    const navigation = useNavigation<SplashNavigationProp>()
    useEffect(() => {
        SplashScreen.hideAsync().then(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Root" }],
                })
            )
        })
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
        }}/>
    )
}

export default Splash
