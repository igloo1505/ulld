import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import initialState from "../initialState/initialState";
import { ParsedAppConfig } from "#/lib/config/zod/secondaryConfigParse/main";


const slice = createSlice({
    name: "functionality",
    initialState: initialState.config,
    reducers: {
        setConfigState(state, action: PayloadAction<ParsedAppConfig>) {
            state = action.payload
        }
    }
})


export const { setConfigState } = slice.actions
export default slice.reducer

