import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState/initialState";



const slice = createSlice({
    name: "functionality",
    initialState: initialState.functionality as typeof initialState['functionality'],
    reducers: {
        hasInitialState(state) {
            state.hasInitialState = true
        },
        setCurrentNoteId(state, action: PayloadAction<number>) {
            state.currentNoteId = action.payload
        },
        setCurrentNoteData(state, action: PayloadAction<{ id: number, currentToc: typeof initialState.functionality.currentToc }>) {
            state.currentNoteId = action.payload.id
            if (action.payload.currentToc) {
                state.currentToc = action.payload.currentToc
                state.tocNoteId = action.payload.id
            }

        },
        setTocContent(state, action: PayloadAction<{ headingContent: typeof initialState.functionality.currentToc, noteId: string | number }>) {
            state.currentToc = action.payload.headingContent
            state.tocNoteId = action.payload.noteId
        }
    }
})


export const { hasInitialState, setCurrentNoteData, setTocContent, setCurrentNoteId } = slice.actions
export const FunctionalityReducer = slice.reducer

