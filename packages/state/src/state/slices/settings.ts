import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocalSettingsType } from "../initialState/settings";
import { initialState } from "../initialState/initialState";
import { ParsedSettings } from "@ulld/parsers/settings/settingsParser";



const slice = createSlice({
    name: "Settings",
    initialState: initialState.settings as typeof initialState['settings'],
    reducers: {
        setAllowTooltips(state, action: PayloadAction<boolean>) {
            state.tooltips = action.payload
        },
        setLocalSettings(state, action: PayloadAction<ParsedSettings>) {
            // state = action.payload
            state = { ...action.payload }
        },
        toggleSetting(state, action: PayloadAction<keyof Pick<LocalSettingsType, "tooltips">>) {
            state[action.payload] = !state[action.payload]
        }

    }
})


// const { 
//     setAllowTooltips: _setAllowTooltips,
//     toggleSetting: _toggleSetting,
//     setLocalSettings: _setLocalSettings
// } = slice.actions

// export const setAllowTooltips = _setAllowTooltips
// export const toggleSetting = _toggleSetting
// export const setLocalSettings = _setLocalSettings

// export const { setAllowTooltips, toggleSetting, setLocalSettings } = slice.actions


export const setAllowTooltips = slice.actions.setAllowTooltips
export const toggleSetting = slice.actions.toggleSetting
export const setLocalSettings = slice.actions.setLocalSettings
export const SettingsReducer = slice.reducer

