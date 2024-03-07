import { createSlice } from "@reduxjs/toolkit";
import { getallEvents, deleteEvent } from "../../services/api";

const eventSlice = createSlice({
    name: "events",
    initialState: { list: [] },
    reducers: {
        populateEvents: (state, action) => {
            state.list = action.payload;
        },
        deleteEventReducer: (state, action) => {
            state.list = state.list.filter(
                (eventItem) => eventItem.id !== action.payload
            );
            deleteEv(action.payload);
        },
    },
});

export const selectEvents = (state) => {
    return [state.events.list];
};

export const fetchEvents = () => async (dispatch) => {
    try {
        const eventsResult = await getallEvents();
        dispatch(populateEvents(eventsResult.data));
    } catch (error) {
        console.log(error);
    }
};

export const deleteEv = async (id) => {
    try {
        const eventsResult = await deleteEvent(id);
    } catch (error) {
        console.log(error);
    }
};

export default eventSlice.reducer;

export const { populateEvents, deleteEventReducer } = eventSlice.actions;
