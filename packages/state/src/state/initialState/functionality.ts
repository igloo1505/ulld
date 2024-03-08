export interface InitialFunctionalityStateType {
    hasInitialState: boolean
    currentNoteId: number | undefined
    currentToc: [number, string, string][] | null
    tocNoteId: string | number | null
}


export const initialFunctionalityState: InitialFunctionalityStateType = {
    hasInitialState: false,
    currentNoteId: undefined,
    currentToc: null,
    tocNoteId: null
}

