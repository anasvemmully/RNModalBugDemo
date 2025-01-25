import { useIsFocused } from "@react-navigation/native"
import React, { Component } from "react"
import { View, TouchableOpacity } from "react-native"
import { connect } from "react-redux"

import { togglePurchaseModal } from "~/actions/general_actions"
import { XText } from "~/components/common/XText"

class ChallengeHome extends Component {
    goToPurchaseModal = () => {
        this.props.togglePurchaseModal(true, "home")
    }

    fetchQuestionDetails = (questionId) => {}

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                }}>
                <TouchableOpacity
                    style={{
                        borderRadius: 10,
                        backgroundColor: "white",
                        padding: 10,
                        margin: 10,
                    }}
                    onPress={() => {
                        this.goToPurchaseModal()
                    }}>
                    <XText>Toggle Purchase Modal</XText>
                </TouchableOpacity>
            </View>
        )
    }
}

const ChallengeHomeScreen = (props) => {
    const isFocused = useIsFocused()

    return <ChallengeHome {...props} isFocused={isFocused} />
}

export default connect(null, { togglePurchaseModal })(ChallengeHomeScreen)
