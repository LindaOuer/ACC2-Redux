import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
};

export const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: () => [thunk],
});

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//     reducer: persistedReducer,
//     devTools: true,
//     middleware: () => [thunk],
// });


// export const persistor = persistStore(store);
