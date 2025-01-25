import React, { Component } from "react"
import {
    View,
    Platform,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from "react-native"
import { connect } from "react-redux"

import { togglePurchaseModal } from "~/actions/general_actions"
import HackyModal from "./HackyModal"
import { RedRoundCloseButton } from "./common/RedRoundCloseButton"
import { XText } from "./common/XText"

class PurchaseModal extends Component {
    constructor() {
        super()
        this.state = {
            selectedStoreProductId: null,
            activeSlide: 0,
            isLoading: false,
            selectedPlanIndex: 0,
            storeProducts: [],
            paymentAmount: null,
        }
    }

    render() {
        const validityPlans = [
            {
                validity: "1 Month",
                actualPrice: 999,
                discountPrice: 499,
            },
            {
                validity: "3 Months",
                actualPrice: 2999,
                discountPrice: 1499,
            },
            {
                validity: "6 Months",
                actualPrice: 5999,
                discountPrice: 2999,
            },
            {
                validity: "12 Months",
                actualPrice: 11999,
                discountPrice: 5999,
            },
        ]

        return (
            <HackyModal
                transparent={false}
                animationType="fade"
                visible={this.props.visible}
                style={{ backgroundColor: "#000" }}
                onRequestClose={() => this.props.togglePurchaseModal(false)}>
                <SafeAreaView style={{ marginBottom: 50 }}>
                    <ScrollView
                        fadingEdgeLength={150}
                        showsVerticalScrollIndicator
                        persistentScrollbar
                        contentContainerStyle={{ justifyContent: "flex-start", paddingBottom: 20 }}>
                        <RedRoundCloseButton
                            touchableStyle={{
                                alignSelf: "flex-end",
                                zIndex: 10,
                                position: "absolute",
                                top: Platform.OS === "android" ? 10 : 0,
                                right: 10,
                            }}
                            onPress={() => this.props.togglePurchaseModal(false)}
                        />

                        <XText
                            style={{
                                textAlign: "center",
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "#000",
                                paddingHorizontal: 20,
                                marginTop: 20,
                                marginBottom: 10,
                            }}>
                            BLABLABLA
                        </XText>

                        <XText
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                color: "#000",
                                textAlign: "justify",
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nulla felis, sollicitudin eleifend dolor ullamcorper eget. Maecenas massa lorem, venenatis non congue quis, pulvinar eu odio. Donec fermentum in erat posuere laoreet. Aenean egestas molestie ipsum vel luctus. Curabitur volutpat lorem nec volutpat rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut scelerisque quam at ex interdum, id commodo ligula vulputate. Aliquam ac ipsum scelerisque, pharetra ipsum sed, efficitur lacus. Etiam dignissim quis lectus quis dictum. Nulla magna ligula, gravida quis lacinia a, pretium quis dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc eleifend egestas congue.
Nulla eget nunc sed ipsum finibus semper id vitae lectus. Morbi vitae volutpat enim, in pulvinar lacus. Nullam vehicula facilisis est, id consectetur nunc placerat a. Pellentesque vel lacinia urna. Proin ac sollicitudin mauris, sed tincidunt urna. Donec a nibh ultrices, facilisis nunc eu, euismod velit. Morbi suscipit sem nec commodo consectetur. Phasellus dictum dui vel diam molestie blandit.
Duis a nisi sed ipsum ullamcorper mattis. Nam porttitor libero eu tincidunt bibendum. Duis sit amet sapien ut velit mollis placerat scelerisque sit amet tortor. Pellentesque non ante sit amet urna tempus mattis ut in magna. Cras rhoncus nisl dolor. In est eros, sollicitudin eu bibendum fermentum, bibendum sed tellus. Curabitur pharetra sem non nunc blandit, et euismod leo pharetra. In placerat porttitor sapien, quis blandit justo vulputate vel.
Aliquam tristique purus tortor, in aliquet arcu bibendum vitae. Mauris porttitor euismod ex vehicula sagittis. Integer a viverra velit. Cras molestie sed risus quis pretium. Nulla vitae libero et diam mattis hendrerit. Suspendisse ullamcorper urna id ultricies maximus. Sed lobortis, ex blandit molestie pellentesque, ex nunc malesuada metus, at tincidunt enim ex at purus. Donec iaculis turpis quis est ornare porta. Cras augue est, tristique sit amet maximus id, mattis ut dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Donec tempor sapien felis. Ut nec dolor aliquam, accumsan erat et, ultrices neque. Sed rutrum eu nunc sit amet hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel purus diam. Quisque quis molestie nunc. Suspendisse nisl nisl, porttitor vitae odio non, dignissim imperdiet ex. Etiam rhoncus quam id nisl eleifend, ac lobortis massa sodales. Ut non vehicula ante, vitae condimentum dolor. Curabitur nisl arcu, gravida sit amet auctor sit amet, consectetur non eros. Sed malesuada tempor lorem, luctus varius tortor dignissim sed. Nam faucibus, lorem a malesuada lobortis, purus ipsum commodo massa, non sodales nisi velit in ipsum. Morbi et ante a elit bibendum tincidunt suscipit nec dui. Integer maximus tellus nec neque vehicula, eu placerat erat condimentum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nulla felis, sollicitudin eleifend dolor ullamcorper eget. Maecenas massa lorem, venenatis non congue quis, pulvinar eu odio. Donec fermentum in erat posuere laoreet. Aenean egestas molestie ipsum vel luctus. Curabitur volutpat lorem nec volutpat rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut scelerisque quam at ex interdum, id commodo ligula vulputate. Aliquam ac ipsum scelerisque, pharetra ipsum sed, efficitur lacus. Etiam dignissim quis lectus quis dictum. Nulla magna ligula, gravida quis lacinia a, pretium quis dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc eleifend egestas congue.
Nulla eget nunc sed ipsum finibus semper id vitae lectus. Morbi vitae volutpat enim, in pulvinar lacus. Nullam vehicula facilisis est, id consectetur nunc placerat a. Pellentesque vel lacinia urna. Proin ac sollicitudin mauris, sed tincidunt urna. Donec a nibh ultrices, facilisis nunc eu, euismod velit. Morbi suscipit sem nec commodo consectetur. Phasellus dictum dui vel diam molestie blandit.
Duis a nisi sed ipsum ullamcorper mattis. Nam porttitor libero eu tincidunt bibendum. Duis sit amet sapien ut velit mollis placerat scelerisque sit amet tortor. Pellentesque non ante sit amet urna tempus mattis ut in magna. Cras rhoncus nisl dolor. In est eros, sollicitudin eu bibendum fermentum, bibendum sed tellus. Curabitur pharetra sem non nunc blandit, et euismod leo pharetra. In placerat porttitor sapien, quis blandit justo vulputate vel.
Aliquam tristique purus tortor, in aliquet arcu bibendum vitae. Mauris porttitor euismod ex vehicula sagittis. Integer a viverra velit. Cras molestie sed risus quis pretium. Nulla vitae libero et diam mattis hendrerit. Suspendisse ullamcorper urna id ultricies maximus. Sed lobortis, ex blandit molestie pellentesque, ex nunc malesuada metus, at tincidunt enim ex at purus. Donec iaculis turpis quis est ornare porta. Cras augue est, tristique sit amet maximus id, mattis ut dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Donec tempor sapien felis. Ut nec dolor aliquam, accumsan erat et, ultrices neque. Sed rutrum eu nunc sit amet hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel purus diam. Quisque quis molestie nunc. Suspendisse nisl nisl, porttitor vitae odio non, dignissim imperdiet ex. Etiam rhoncus quam id nisl eleifend, ac lobortis massa sodales. Ut non vehicula ante, vitae condimentum dolor. Curabitur nisl arcu, gravida sit amet auctor sit amet, consectetur non eros. Sed malesuada tempor lorem, luctus varius tortor dignissim sed. Nam faucibus, lorem a malesuada lobortis, purus ipsum commodo massa, non sodales nisi velit in ipsum. Morbi et ante a elit bibendum tincidunt suscipit nec dui. Integer maximus tellus nec neque vehicula, eu placerat erat condimentum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor nulla felis, sollicitudin eleifend dolor ullamcorper eget. Maecenas massa lorem, venenatis non congue quis, pulvinar eu odio. Donec fermentum in erat posuere laoreet. Aenean egestas molestie ipsum vel luctus. Curabitur volutpat lorem nec volutpat rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut scelerisque quam at ex interdum, id commodo ligula vulputate. Aliquam ac ipsum scelerisque, pharetra ipsum sed, efficitur lacus. Etiam dignissim quis lectus quis dictum. Nulla magna ligula, gravida quis lacinia a, pretium quis dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc eleifend egestas congue.
Nulla eget nunc sed ipsum finibus semper id vitae lectus. Morbi vitae volutpat enim, in pulvinar lacus. Nullam vehicula facilisis est, id consectetur nunc placerat a. Pellentesque vel lacinia urna. Proin ac sollicitudin mauris, sed tincidunt urna. Donec a nibh ultrices, facilisis nunc eu, euismod velit. Morbi suscipit sem nec commodo consectetur. Phasellus dictum dui vel diam molestie blandit.
Duis a nisi sed ipsum ullamcorper mattis. Nam porttitor libero eu tincidunt bibendum. Duis sit amet sapien ut velit mollis placerat scelerisque sit amet tortor. Pellentesque non ante sit amet urna tempus mattis ut in magna. Cras rhoncus nisl dolor. In est eros, sollicitudin eu bibendum fermentum, bibendum sed tellus. Curabitur pharetra sem non nunc blandit, et euismod leo pharetra. In placerat porttitor sapien, quis blandit justo vulputate vel.
Aliquam tristique purus tortor, in aliquet arcu bibendum vitae. Mauris porttitor euismod ex vehicula sagittis. Integer a viverra velit. Cras molestie sed risus quis pretium. Nulla vitae libero et diam mattis hendrerit. Suspendisse ullamcorper urna id ultricies maximus. Sed lobortis, ex blandit molestie pellentesque, ex nunc malesuada metus, at tincidunt enim ex at purus. Donec iaculis turpis quis est ornare porta. Cras augue est, tristique sit amet maximus id, mattis ut dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Donec tempor sapien felis. Ut nec dolor aliquam, accumsan erat et, ultrices neque. Sed rutrum eu nunc sit amet hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel purus diam. Quisque quis molestie nunc. Suspendisse nisl nisl, porttitor vitae odio non, dignissim imperdiet ex. Etiam rhoncus quam id nisl eleifend, ac lobortis massa sodales. Ut non vehicula ante, vitae condimentum dolor. Curabitur nisl arcu, gravida sit amet auctor sit amet, consectetur non eros. Sed malesuada tempor lorem, luctus varius tortor dignissim sed. Nam faucibus, lorem a malesuada lobortis, purus ipsum commodo massa, non sodales nisi velit in ipsum. Morbi et ante a elit bibendum tincidunt suscipit nec dui. Integer maximus tellus nec neque vehicula, eu placerat erat condimentum.
                        </XText>
                    </ScrollView>

                    <View
                        style={{
                            zIndex: 10,
                            paddingTop: 0,
                            borderTopWidth: 0.5,
                            paddingHorizontal: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingLeft: 20,
                        }}>
                        {Array.isArray(validityPlans) &&
                            validityPlans[this.state.selectedPlanIndex] ? (
                            <>
                                <View style={{ flex: 3 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <XText
                                            style={{
                                                fontSize: 22,
                                                fontWeight: "bold",
                                                color: "#000",
                                            }}>
                                            ₹
                                        </XText>
                                        <XText style={{ fontSize: 22, fontWeight: "bold" }}>
                                            {validityPlans &&
                                                validityPlans[this.state.selectedPlanIndex] &&
                                                validityPlans[this.state.selectedPlanIndex]
                                                    .discountPrice}
                                        </XText>
                                    </View>
                                    <XText style={{ fontSize: 12, color: "#000" }}>
                                        {validityPlans &&
                                            validityPlans[this.state.selectedPlanIndex] &&
                                            validityPlans[this.state.selectedPlanIndex].validity}
                                    </XText>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        flex: 2,
                                        borderRadius: 10,
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    onPress={() => {}}
                                >
                                    <XText>CLICK HERE</XText>
                                </TouchableOpacity>
                            </>
                        ) : null}
                    </View>
                </SafeAreaView>
            </HackyModal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        purchaseModalSource: state.general.purchaseModalSource,
        iapButtonText: state.general.iapButtonText,
        validityPlans: state.general.validityPlans,

        purchase_modal_title: state.general.purchase_modal_title,
        purchase_modal_subtitle: state.general.purchase_modal_subtitle,
        purchase_modal_courses_included_title: state.general.purchase_modal_courses_included_title,

        visible: state.general.showPurchaseModal,


        purchaseModalBoxText: state.general.purchaseModalBoxText,
        goldDetails: state.general.goldDetails,
    }
}

export default connect(mapStateToProps, {
    togglePurchaseModal,
})(PurchaseModal)
