import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ParsedAppConfig } from "@ulld/configschema";
import { initialState } from "../initialState/initialState";


const slice = createSlice({
    name: "config",
    initialState: initialState.config,
    reducers: {
        setConfigState(state, action: PayloadAction<ParsedAppConfig>) {
            state = action.payload ? action.payload : undefined
        }
    }
})


export const { setConfigState } = slice.actions
export const ConfigReducer = slice.reducer

