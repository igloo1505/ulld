import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState/initialState";
import { ToastConfigType } from "#/types/ui";
import { EmbededPanelState, InitialUIStateType } from "../initialState/ui";



const slice = createSlice({
    name: "UI",
    initialState: initialState.UI as typeof initialState['UI'],
    reducers: {
        setDrawerOpen(state, action: PayloadAction<boolean | "toggle">) {
            if (action.payload === "toggle") {
                state.drawer.open = !state.drawer.open
            }
            if (action.payload !== "toggle") {
                state.drawer.open = action.payload
            }
        },
        toggleDrawer(state) {
            state.drawer.open = !state.drawer.open
        },
        setNavtype(state, action: PayloadAction<typeof initialState['UI']['navtype']>) {
            state.navtype = action.payload
        },
        sidebarToggle(state, action: PayloadAction<boolean>) {
            state.sidebar.open = action.payload
        },
        setDarkmode(state, action: PayloadAction<boolean>) {
            state.darkmode = action.payload
        },
        showToast(state, action: PayloadAction<ToastConfigType>) {
            state.toast = action.payload
        },
        showConfirmationModal(state, action: PayloadAction<InitialUIStateType["modals"]["confirmationModal"]>) {
            state.modals.confirmationModal = action.payload
        },
        setBibItemDetailPanelState(state, action: PayloadAction<typeof initialState["UI"]["panels"]["bibEntryDetail"]>) {
            state.panels.bibEntryDetail = action.payload
        },
        addEmbededPanelState(state, action: PayloadAction<EmbededPanelState & { id: string }>) {
            state.panels.embededPanels = { ...state.panels.embededPanels, [action.payload.id]: { open: action.payload.open, pathname: action.payload.pathname } }
        },
        clearEmbededPanelStateByPath(state, action: PayloadAction<string>) {
            let d: typeof state.panels.embededPanels = {}
            Object.entries(state.panels.embededPanels).forEach((entry) => {
                if (entry[1].pathname === action.payload) {
                    d[entry[0]] = entry[1]
                }
            })
            state.panels.embededPanels = d
        },
        toggleEmbeddedPanelState(state, action: PayloadAction<{ id: string, open: boolean | "toggle" }>) {
            state.panels.embededPanels[action.payload.id].open = typeof action.payload.open === "boolean" ? action.payload.open : !state.panels.embededPanels[action.payload.id].open
        },
        showNoteSheet(state, action: PayloadAction<boolean | undefined | null>) {
            state.panels.noteSheet = Boolean(action.payload)
        }
    }
})


export const { toggleDrawer, showNoteSheet, clearEmbededPanelStateByPath, addEmbededPanelState, toggleEmbeddedPanelState, setBibItemDetailPanelState, showConfirmationModal, showToast, setNavtype, setDarkmode, setDrawerOpen, sidebarToggle } = slice.actions
export default slice.reducer

