import {z} from 'zod'

type TableTextStyle = "base" | "lg" | "xl" | "small"

type FrontMatterTableStyles = { 
    fullWidth?: boolean
    text?: TableTextStyle | null
    math?: TableTextStyle | null
    tableCenter?: boolean | null
    textCenter?: boolean | null
    headingCenter?: boolean | null
    float?: "right" | "left" | null
    noMax?: boolean | null
    expand?: boolean | null
}

export type FrontMatterType<T extends unknown = {}> = {
    title?: string | null
    created?: string | null
    updated?: string | null
    summary?: string | null
    subjects?: string | string[] | null
    topics?: string | string[] | null
    tags?: string | string[] | null
    importantValues?: number[] | null
    id?: string | null
    sequential?: number
    sequentialKey?: string
    tableStyles?: FrontMatterTableStyles
} & T

