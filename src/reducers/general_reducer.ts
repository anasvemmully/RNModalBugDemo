import { Reducer } from "redux"

import { GENERAL_ACTIONS } from "../config/action_types"

export interface GeneralAction {
    type: string
    payload: any
}

export interface GeneralState {
    modalSubTitle: string
    showPurchaseModal: boolean
    purchaseModalSource: string | null
}

const initialState: GeneralState = {
    showPurchaseModal: false,
    purchaseModalSource: null,
    modalSubTitle: "",
}

const generalReducer: Reducer<GeneralState, GeneralAction> = (state = initialState, action) => {
    switch (action.type) {
        case GENERAL_ACTIONS.TOGGLE_PURCHASE_MODAL:
            return {
                ...state,
                showPurchaseModal: action.payload.value,
                purchaseModalSource: action.payload.source,
                modalSubTitle: action.payload.modalSubTitle ? action.payload.modalSubTitle : "",
            }
        default:
            return state
    }
}

export default generalReducer
