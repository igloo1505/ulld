import { LetterType } from "../types/general";

export const getFirstLetterWithLatex = (value: string): LetterType => {
    return value.replaceAll(/\\|\:|\-|\=|\_/gm, "")[0] as LetterType
}

