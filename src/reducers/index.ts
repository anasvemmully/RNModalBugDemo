import { combineReducers } from "redux"

import GeneralReducer from "./general_reducer"

const rootReducer = combineReducers({
    general: GeneralReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
