import {
    createStackNavigator,
} from "@react-navigation/stack"
import React from "react"

import ChallengeHome from "~/screens/Home/ChallengeHome"

const Stack = createStackNavigator<any>()

export function ChallengeStack() {
    return (
        <Stack.Navigator
            initialRouteName="ChallengeHome"
            screenOptions={{
                animation: "none",
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTintColor: "#fff",
            }}>
            <Stack.Screen
                name="ChallengeHome"
                component={ChallengeHome as any}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
