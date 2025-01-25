import { isFinite } from "lodash"
import React from "react"
import { View, Platform, FlatList, TouchableOpacity } from "react-native"
import { connect } from "react-redux"

import { togglePurchaseModal } from "~/actions/general_actions"

import { XText } from "~/components/common/XText"

const getFormattedDate = (date) => {
    const day = new Date(date)
    const formattedDate = day.getDate() + " " + months[day.getMonth()] + " " + day.getFullYear()
    return formattedDate
}
class PaymentHistory extends React.Component {
    state = { isLoading: true, history: [] }

    _renderItem = ({ item }) => (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: Colors.White.Two,
                borderRadius: 10,
                padding: 15,
                paddingVertical: 10,
                margin: 5,
            }}>
            <View style={{ flex: 4 }}>
                <XText style={{ fontSize: 16, color: Colors.White.Pure }}>Premium Plan</XText>
                <XText style={{ fontSize: 16, color: Colors.White.Pure }}>
                    Purchase Date: {getFormattedDate(item.date)}
                </XText>
            </View>
        </View>
    )

    _renderPacksItem = ({ item }) => (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: Colors.White.Two,
                borderRadius: 10,
                padding: 15,
                paddingVertical: 10,
                margin: 5,
            }}>
            <View style={{ flex: 4 }}>
                {/* <XText style={{ fontSize: 16, color: Colors.White.Pure }}>Amount: {item.amount}</XText> */}

                <XText
                    style={{
                        fontSize: 16,
                        color: Colors.White.Pure,
                    }}>
                    {`${item.courseGroupName} (${item.isMentorshipPurchase ? "Gold" : "Silver"} Plan)`}
                </XText>
                <XText style={{ fontSize: 16, color: Colors.White.Pure }}>
                    Purchase Date: {getFormattedDate(item.paymentDate)}
                </XText>
                <XText style={{ fontSize: 16, color: Colors.White.Pure }}>
                    {`${new Date(item.packExpiringDate) < new Date() ? `Expired on: ${getFormattedDate(item.packExpiringDate)}` : `Expiring on: ${getFormattedDate(item.packExpiringDate)}`}`}
                </XText>
            </View>
        </View>
    )

    renderHistory() {
        if (this.state.isLoading) {
            return <></>
        } else if (
            (Array.isArray(this.state.history) && this.state.history.length > 0) ||
            (Array.isArray(this.state.packsHistory) && this.state.packsHistory.length > 0)
        ) {
            return (
                <>
                    <View style={{ margin: 10 }}>
                        {isFinite(this.props.daysRemaining) && this.props.daysRemaining >= 0 ? (
                            <XText
                                style={{
                                    marginBottom: 10,
                                    color: Colors.Grey.Ash,
                                    fontSize: 16,
                                    textAlign: "center",
                                }}>
                                {`Days Remaining: ${this.props.daysRemaining}`}
                            </XText>
                        ) : null}

                        {Array.isArray(this.state.history) && this.state.history.length > 0 ? (
                            <>
                                <FlatList
                                    data={this.state.history}
                                    keyExtractor={(item) => item._id}
                                    renderItem={this._renderItem}
                                />
                            </>
                        ) : null}

                        {Array.isArray(this.state.packsHistory) &&
                        this.state.packsHistory.length > 0 ? (
                            <>
                                <FlatList
                                    data={this.state.packsHistory}
                                    keyExtractor={(item) => item._id}
                                    renderItem={this._renderPacksItem}
                                />
                            </>
                        ) : null}
                    </View>
                </>
            )
        } else {
            return (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <XText style={{ color: Colors.Grey.Pure, fontSize: 16, textAlign: "center" }}>
                        No payment history found
                    </XText>
                </View>
            )
        }
    }

    render() {
        const totalGames = this.props.gamesWon + this.props.gamesLost + this.props.gamesTied + 100

        return (
            <View style={{ flex: 1, backgroundColor: Colors.Grey.Dark }}>
                <View style={{ flex: 1 }}>{this.renderHistory()}</View>

                {Platform.OS === "android" && totalGames > 50 && (
                    <View
                        style={{
                            backgroundColor: Colors.White.Pure,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 10,
                            borderTopColor: Colors.Grey.Light,
                            borderTopWidth: 1,
                        }}>

                        <View style={{ flex: 2 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.props.userId !== GUEST_USER_ID) {
                                        this.props.togglePurchaseModal(true, "extend_premium")
                                    } else {
                                        loginAlert(
                                            "Please login to purchase premium plan",
                                            "PurchaseModal"
                                        )
                                    }
                                }}
                                style={{
                                    elevation: 5,
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    backgroundColor: Colors.Green.Outer,
                                    margin: 20,
                                    marginTop: 0,
                                    padding: 15,
                                    paddingLeft: 25,
                                    paddingRight: 25,
                                    borderRadius: 10,
                                    marginBottom: 5,
                                }}>
                                <XText
                                    style={{
                                        textAlign: "center",
                                        fontSize: 18,
                                        color: Colors.White.Pure,
                                        fontWeight: "bold",
                                    }}>
                                    {this.props.iapButtonText}
                                </XText>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        actualPrice: state.general.actualPrice,
        discountedPrice: state.general.discountedPrice,
        iapButtonText: state.general.iapButtonText,
        offerText: state.general.offerText,
        premiumValidity: state.general.premiumValidity,

        gamesWon: state.score.gamesWon,
        gamesLost: state.score.gamesLost,
        gamesTied: state.score.gamesTied,
        daysRemaining: state.general.premiumDaysRemaining,
    }
}

export default connect(mapStateToProps, { togglePurchaseModal })(PaymentHistory)
