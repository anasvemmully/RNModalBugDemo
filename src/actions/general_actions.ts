import { GENERAL_ACTIONS } from "../config/action_types"

const togglePurchaseModal = (value: any, source: any, title?: any, modalSubTitle?: any) => {
    return {
        type: GENERAL_ACTIONS.TOGGLE_PURCHASE_MODAL,
        payload: { value, source, title, modalSubTitle },
    }
}

export { togglePurchaseModal }
