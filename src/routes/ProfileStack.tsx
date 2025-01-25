import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import React from "react"
import { StyleSheet, View, Text } from "react-native"

import Settings from "../screens/Profile/Settings"

import PaymentHistory from "~/screens/Purchase/PaymentHistory"

const styles = StyleSheet.create({
    tabBarStyle: {
        display: "flex",
        height: 75,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#000",
        borderTopColor: "#000",
    },
    headerStyle: {
        backgroundColor: "#000",
    },
})

const defaultHeaderOptions = {
    headerStyle: styles.headerStyle,
    headerTintColor: "#fff",
}

const Stack = createStackNavigator()

const DemoScreenComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello, World!</Text>
        </View>
    )
}

const profileStack: any[] = [
    { route: "Profile", component: DemoScreenComponent, options: { headerShown: false } },
    { route: "Settings", component: Settings, options: { headerShown: false } },
    {
        route: "PaymentHistory",
        component: PaymentHistory,
        options: { ...defaultHeaderOptions, title: "Payment History" },
    },
]

const profileStackListScreenNames = profileStack.map((each) => each.route)

export const profileStackList: any[] = profileStackListScreenNames

export function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                animation: "none",
            }}>
            {profileStack.map((each) => (
                <Stack.Screen
                    key={each.route}
                    name={each.route}
                    component={each.component}
                    options={each.options}
                />
            ))}
        </Stack.Navigator>
    )
}
