
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState/initialState";
import { LocalSettingsType } from "../initialState/settings";



const slice = createSlice({
    name: "Settings",
    initialState: initialState.settings as typeof initialState['settings'],
    reducers: {
        setAllowTooltips(state, action: PayloadAction<boolean>) {
            state.tooltips = action.payload
        },
        setLocalSettings(state, action: PayloadAction<LocalSettingsType>) {
            console.log("action.payload: ", action.payload)
            // state = action.payload
            state = { ...action.payload }
        },
        toggleSetting(state, action: PayloadAction<keyof Pick<LocalSettingsType, "tooltips">>) {
            state[action.payload] = !state[action.payload]
        }

    }
})


export const { setAllowTooltips, toggleSetting, setLocalSettings } = slice.actions
export default slice.reducer

