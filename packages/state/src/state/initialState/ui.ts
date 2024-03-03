import { BibEntry } from "#/classes/prismaMdxRelations/BibEntry"
import { ToastConfigType } from "#/types/ui"
import { ConfirmationModalConfig } from "#/types/ui/confirmationModalTypes"

export const darkTheme = "night"
export const lightTheme = "corporate"

export interface EmbededPanelState {
    open: boolean
    pathname: string
}

export interface InitialUIStateType {
    navtype: "top" | "drawer" | null
    darkmode: boolean
    drawer: {
        open: boolean
    },
    sidebar: {
        open: boolean
    }
    toast: ToastConfigType | null,
    modals: {
        confirmationModal: false | ConfirmationModalConfig
    }
    panels: {
        noteSheet: boolean
        bibEntryDetail?: BibEntry | undefined
        embededPanels: {
            [id: string]: EmbededPanelState
        }
    }
}

export type NavType = InitialUIStateType['navtype']

export const initialUIState: InitialUIStateType = {
    navtype: null,
    // WARNING: Make sure this matches with whether or not "dark" is in the original classList of the html element in layout.ts
    darkmode: true,
    drawer: {
        open: false
    },
    sidebar: {
        open: false
    },
    toast: null,
    modals: {
        confirmationModal: false,
    },
    panels: {
        noteSheet: false,
        bibEntryDetail: undefined,
        embededPanels: {}
    }
}

