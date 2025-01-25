import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { View, Text } from "react-native"

import { ChallengeStack } from "./ChallengeStack"
import { ProfileStack } from "./ProfileStack"
import Splash from "../screens/Auth/Splash"

const BottomTabNavigator = createBottomTabNavigator()

const DemoScreenComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello, World!</Text>
        </View>
    )
}

function RootTabNavigator() {
    return (
        <BottomTabNavigator.Navigator initialRouteName="ChallengeStack" backBehavior="initialRoute">
            <BottomTabNavigator.Screen
                name="Demo One Stack"
                component={DemoScreenComponent}
                options={({ route }) => {
                    return {
                        headerShown: true,
                        tabBarLabel: "TEST 1",
                    }
                }}
            />
            <BottomTabNavigator.Screen
                name="Demo Two Stack"
                component={DemoScreenComponent}
                options={({ route }) => {
                    return {
                        headerShown: true,
                        tabBarLabel: "TEST 2",
                    }
                }}
            />
            <BottomTabNavigator.Screen
                name="ChallengeStack"
                component={ChallengeStack}
                options={({ route }) => {
                    return {
                        headerShown: true,
                        tabBarLabel: "HOME",
                    }
                }}
            />
            <BottomTabNavigator.Screen
                name="Demo Three Stack"
                component={DemoScreenComponent}
                options={({ route }) => {
                    return {
                        headerShown: true,
                        tabBarLabel: "TEST 3",
                    }
                }}
            />
            <BottomTabNavigator.Screen
                name="ProfileStack"
                component={ProfileStack}
                options={({ route }) => {
                    return {
                        headerShown: true,
                        tabBarLabel: "TEST 4",
                    }
                }}
            />
        </BottomTabNavigator.Navigator>
    )
}

export type AppStackParamList = {
    Splash: undefined
    Login: undefined
    Otp: {
        mobile: string
        countryCode: string
    }
    Register: {
        mobile: string
        name?: string
        countryCode: string
        vertificationMethod: string
        groupedPosts: any
        registrationToken: string
    }
    Root: any
}

interface StackNavigationOptions {
    headerShown?: boolean
    title?: string
    headerStyle?: any
    headerTintColor?: string
    headerBackTitle?: string
}

export type AppStackScreenConfig = {
    route: keyof AppStackParamList
    component: React.ComponentType<any>
    options: StackNavigationOptions
}

const Stack = createStackNavigator<AppStackParamList>()

function AppStack() {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
                animation: "none",
            }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Root" component={RootTabNavigator} />
        </Stack.Navigator>
    )
}

export default AppStack
