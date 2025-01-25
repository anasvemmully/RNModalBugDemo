import { useNavigation } from "@react-navigation/native"
import { Image } from "expo-image"
import LottieView from "lottie-react-native"
import React from "react"
import { View, TouchableOpacity } from "react-native"
import { connect } from "react-redux"

import { toggleCoinsModal, togglePurchaseModal, toggleGoldPurchaseModal } from "../actions"
import { GUEST_USER_ID } from "../constants"
import Colors from "../theme/colors"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            showTelegramModal: false,
            showSearchModal: false,
        }
    }

    inviteFriends() {}

    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: 50,
                    justifyContent: "space-between",
                    paddingLeft: 20,
                    paddingRight: 20,
                    backgroundColor: Colors.Grey.LightDark,
                }}>
                <View style={{ flexDirection: "row" }}>
                    {this.props.showSearchIcon && this.props.userId !== GUEST_USER_ID ? (
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ showSearchModal: true })
                            }}
                            style={[
                                styles.assetBtnTouchableStyle,
                                { padding: 0, marginLeft: 5, marginRight: 0 },
                            ]}>
                            <LottieView
                                autoPlay
                                loop
                                style={{ width: 45, height: 45, marginRight: -10 }}
                                source={require("./Lottie/search.json")}
                            />
                        </TouchableOpacity>
                    ) : null}

                    {this.props.showAppShareIcon && (
                        <TouchableOpacity
                            style={[
                                styles.assetBtnTouchableStyle,
                                { marginLeft: 5, marginRight: 5 },
                            ]}
                            onPress={() => this.inviteFriends()}>
                            <Image
                                source={require("../assets/images/share.webp")}
                                style={{ width: 22, height: 22 }}
                            />
                        </TouchableOpacity>
                    )}

                    {this.props.showTelegramIcon && (
                        <TouchableOpacity
                            style={[
                                styles.assetBtnTouchableStyle,
                                { marginLeft: 0, marginRight: 0 },
                            ]}
                            onPress={() => {
                                this.setState({ showTelegramModal: true })
                            }}>
                            <Image
                                source={require("../assets/images/telegram.webp")}
                                style={{ width: 22, height: 22 }}
                            />
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        style={[
                            styles.assetBtnTouchableStyle,
                            { padding: 0, marginLeft: 5, marginRight: 0 },
                        ]}
                        onPress={() => {
                            this.props.togglePurchaseModal(true, "header")
                        }}>
                        <LottieView
                            autoPlay
                            loop
                            style={{ width: 35, height: 35 }}
                            source={require("./Lottie/premium_crown.json")}
                        />
                    </TouchableOpacity>

                    {this.props.extraHeaderIcon ? this.props.extraHeaderIcon : null}

                    <TouchableOpacity
                        style={[styles.assetBtnTouchableStyle, { marginLeft: 5 }]}
                        onPress={() => {
                            this.props.navigation.navigate("ProfileStack", {
                                screen: "Settings",
                                params: { backRoute: this.props.currentScreen },
                            })
                        }}>
                        <Image
                            source={require("../assets/images/gear.webp")}
                            style={{ width: 22, height: 22, tintColor: Colors.White.Pure }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    assetBtnTouchableStyle: {
        margin: 10,
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        premiumUser: state.auth.premiumUser,

        telegramLink: state.general.telegram_link,
        notificationsCount: state.general.notificationsCount,

        userHasBookmarked: state.general.userHasBookmarked,
    }
}

const HeaderComponent = (props) => {
    const navigation = useNavigation()

    return <Header {...props} navigation={navigation} />
}

export default connect(mapStateToProps, {
    toggleCoinsModal,
    togglePurchaseModal,
    toggleGoldPurchaseModal,
})(HeaderComponent)
