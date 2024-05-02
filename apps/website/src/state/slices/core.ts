import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState/initialState";



const slice = createSlice({
    name: "core",
    initialState: initialState.core as typeof initialState['core'],
    reducers: {
        setInitialRender(state, action: PayloadAction<boolean>) {
            state.hasRendered = action.payload
        },
    }
})


export const { setInitialRender } = slice.actions
export default slice.reducer

