import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {AppConfigSchemaOutput } from "@ulld/configschema/zod/main"
import { initialState } from "../initialState/initialState";


const slice = createSlice({
    name: "config",
    initialState: initialState.config,
    reducers: {
        setConfigState(state, action: PayloadAction<AppConfigSchemaOutput>) {
            state = action.payload ? action.payload : undefined
        }
    }
})


export const { setConfigState } = slice.actions
export const ConfigReducer = slice.reducer

