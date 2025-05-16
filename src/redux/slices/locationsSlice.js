// features/locations/locationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: ['Berghain', 'TV Tower (Fernsehturm)', 'Tempelhof Field'],
};

const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        addLocation: (state, action) => {
            state.list.push(action.payload);
        },
        removeLocation: (state, action) => {
            state.list = state.list.filter((loc, index) => index !== action.payload);
        },
        resetLocations: (state) => {
            state.list = initialState.list;
        },
    },
});

export const { addLocation, removeLocation, resetLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
