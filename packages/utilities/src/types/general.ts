import { autoSetting } from "@ulld/database/internalDatabaseTypes"

export interface AutoSettingType {
    id?: number
    glob: string,
    type: autoSetting,
    value: string
}

export interface SearchAllParams {
    query?: string
    tags?: string[]
    categories?: string[]
    subjects?: string[]
    topics?: string[]
    citations?: string[]
    tagRegex?: RegExp[]
    equationId?: string
    sequentialId?: string
    perPage?: string
    take?: string
    page?: string
    remote?: boolean
}

export interface DictionaryDefinitionReturnType {
    id: string;
    label: string | null;
    content: string | null;
    alphabeticalLabel: string | null;
    mdxNoteId: number | null;
}

export type LetterType = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "number"
