import { combineReducers } from "redux";
import events from "./slices/eventSlice";

const reducers = combineReducers({
    events,
});

export default reducers;
