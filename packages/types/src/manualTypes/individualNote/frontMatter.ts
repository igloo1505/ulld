type TableTextStyle = "base" | "lg" | "xl" | "small"

type FrontMatterTableStyles = { 
    fullWidth?: boolean | null
    text?: TableTextStyle | null
    math?: TableTextStyle | null
    tableCenter?: boolean | null
    textCenter?: boolean | null
    headingCenter?: boolean | null
    float?: "right" | "left" | null
    noMax?: boolean | null
    expand?: boolean | null
}


// TODO: Remove this from the types package and rely only on a zodFrontMatter object in the schemas package.
export type FrontMatterType<T extends object = {}> = {
    title?: string | null
    created?: string | null
    updated?: string | null
    summary?: string | null
    subjects?: string | string[] | null
    topics?: string | string[] | null
    tags?: string | string[] | null
    importantValues?: number[] | null
    id?: string | null
    sequential?: number | null
    sequentialKey?: string | null
    tableStyles?: FrontMatterTableStyles | null
} & T

