import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState/initialState";
import { InitialInteractionsState, initialInteractionsState } from "../initialState/interactions";


const slice = createSlice({
    name: "interactions",
    initialState: initialState.interactions as typeof initialInteractionsState,
    reducers: {
        sm(state, action: PayloadAction<{
            key: keyof InitialInteractionsState["modals"],
            value: any
        }>) {
            state.modals[action.payload.key] = action.payload.value
        },
    }
})


export const { sm } = slice.actions
export default slice.reducer

