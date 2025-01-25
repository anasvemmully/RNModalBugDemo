import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import * as NavigationBar from "expo-navigation-bar"
import { lockAsync, OrientationLock } from "expo-screen-orientation"
import * as SplashScreen from "expo-splash-screen"
import React, { useRef, useEffect, useState } from "react"
import { StatusBar, Platform } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import * as RNScreenshotPrevent from "react-native-screenshot-prevent"
import { Provider } from "react-redux"

import PurchaseModal from "./src/components/PurchaseModal"
import AppStack from "./src/routes"
import { store } from "./src/store"


const ROUTES_TO_PREVENT_SCREENSHOT = ["CurrentAffairsNotes"]

SplashScreen.preventAutoHideAsync()

function App() {
    const routeNameRef = useRef<any>()

    const [currentRoute, setCurrentRoute] = useState(null)

    useEffect(() => {
        StatusBar.setBarStyle("light-content", true)
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("#000000", true)
        }
        NavigationBar.setVisibilityAsync("hidden")

        lockAsync(OrientationLock.PORTRAIT_UP)
    }, [])

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <NavigationContainer theme={DarkTheme}>
                    <Provider store={store}>
                        <SafeAreaView
                            style={{
                                flex: 1,
                                backgroundColor: "#000000",
                            }}>
                            <PurchaseModal />
                            <AppStack />
                        </SafeAreaView>
                    </Provider>
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

export default App
