import {configureStore} from "@reduxjs/toolkit";
import CounterReducer from "./counter";
import userDetailReducer from "./userDetails"
const store = configureStore({
    reducer: {
        counter: CounterReducer,
        userDetails: userDetailReducer,
    }
})
export default store;