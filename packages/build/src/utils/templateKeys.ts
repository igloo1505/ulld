
export type TemplateStringId = "noteTypePage"|"individualNotePage"

export type NoteTypePage = "CATEGORY_ID" | "BASE_URL"
export type IndividualNotePage = "CATEGORY_ID"

type TemplateStringMap = {
    noteTypePage: NoteTypePage;
    individualNotePage: IndividualNotePage
}

export type TemplateStringVariables<T extends keyof TemplateStringMap> = TemplateStringMap[T]

export type TemplateStringVariableRecord<T extends keyof TemplateStringMap> = Record<TemplateStringVariables<T>, string>
