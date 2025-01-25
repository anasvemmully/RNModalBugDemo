import { StackActions } from "@react-navigation/native"
import { Image } from "expo-image"
import { isFinite } from "lodash"
import React, { Component } from "react"
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    BackHandler,
} from "react-native"

import { XText } from "../../components/common/XText"

class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            editMode: false,
            mobile: null,
            name: null,
            newName: null,
            showTelegramModal: false,
        }
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackButton)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackButton)
    }

    onBackButton = () => {
        this.props.navigation.dispatch(StackActions.replace("Profile"))
        return true
    }

    inviteFriends() {}

    removeProfileImage = () => {}

    render() {
        return (
            <ScrollView style={{ backgroundColor: Colors.Grey.Dark }}>
                <View style={{ flex: 1, justifyContent: "flex-start", margin: 20 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("PaymentHistory")}
                        style={styles.secondTouchable}>
                        <View style={{ flex: 5, flexDirection: "row" }}>
                            <XText style={styles.textStyle}>
                                {this.props.premiumUser ? "Extend Premium" : "Payment History"}
                            </XText>
                            {isFinite(this.props.daysRemaining) && this.props.daysRemaining >= 0 ? (
                                <View
                                    style={{
                                        marginLeft: 5,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        borderRadius: 15,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#fff",
                                    }}>
                                    <XText style={{ color: "#fff" }}>
                                        {this.props.daysRemaining} TESTING
                                    </XText>
                                </View>
                            ) : null}
                        </View>

                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Image
                                style={styles.iconStyle}
                                source={require("../../assets/images/open.webp")}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <XText
                            style={{ marginTop: 10, color: "grey", textAlign: "center" }}>
                            TESTING
                        </XText>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    customCardStyle: {
        padding: 0,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    borderLine: {
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    textStyle: {
        fontSize: 18,
        color: "#fff",
    },
    eachItemStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    secondTouchable: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 15,
        paddingTop: 6,
        paddingBottom: 6,
    },
    iconStyle: {
        height: 18,
        width: 18,
        tintColor: "#fff",
    },
    modalCard: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "#000",
        paddingTop: 30,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 20,
        marginRight: 20,
    },
})

export default Settings
