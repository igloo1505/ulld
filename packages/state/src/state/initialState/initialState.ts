import { initialConfigState } from "./config"
import { initialFunctionalityState } from "./functionality"
import { defaultSettingsState } from "./settings"
import { initialUIState } from "./ui"
import { initialNoteGlobalState } from "./note"


export const initialState = {
    UI: initialUIState,
    settings: defaultSettingsState,
    functionality: initialFunctionalityState,
    config: initialConfigState,
    note: initialNoteGlobalState
}

