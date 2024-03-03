import { initialConfigState } from "./config"
import { initialFunctionalityState } from "./functionality"
import { defaultSettingsState } from "./settings"
import { initialUIState } from "./ui"

const initialState = {
    UI: initialUIState,
    settings: defaultSettingsState,
    functionality: initialFunctionalityState,
    config: initialConfigState
}

export default initialState
