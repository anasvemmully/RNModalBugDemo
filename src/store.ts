import AsyncStorage from "@react-native-async-storage/async-storage"
import { createStore } from "redux"
import { persistStore, persistReducer, type PersistConfig } from "redux-persist"

import rootReducer from "./reducers"
import type { RootState } from "./reducers"

const persistConfig: PersistConfig<RootState> = {
    key: "root",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }
