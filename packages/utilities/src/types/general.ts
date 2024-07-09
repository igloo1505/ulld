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


export interface ConfirmationModalConfig {
    title: string
    body: string
    buttonText?: string
    primaryId?: string | number | null
    domId?: string
    onConfirmCallback?: (c: ConfirmationModalConfig) => void
    buttonVariant?: "outline" | "destructive" | "secondary" | "ghost" | "link"
    onConfirm: string
    toast?: {
        title: string
        description?: string
    }
}
