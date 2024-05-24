import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState/initialState";



const slice = createSlice({
    name: "functionality",
    initialState: initialState.note as typeof initialState['note'],
    reducers: {
        setFigureIndices(state, action: PayloadAction<string[]>){
            state.figureIds = [...action.payload]
        }
    }
})


export const { setFigureIndices } = slice.actions
export const NoteReducer = slice.reducer

