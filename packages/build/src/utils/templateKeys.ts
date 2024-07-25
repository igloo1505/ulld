
export type TemplateStringId = "prismaSchema" | "settingsPage" | "noteTypePage" | "individualNotePage" | "gitignore"

export type PrismaSchema = never
export type SettingsPage = "PLUGIN_NAME" | "PLUGIN_SETTING_PAGE_EXPORT"
export type NoteTypePage = "CATEGORY_ID" | "BASE_URL"
export type IndividualNotePage = "CATEGORY_ID"
export type Gitignore = never

type TemplateStringMap = {
    prismaSchema: PrismaSchema;
    settingsPage: SettingsPage;
    noteTypePage: NoteTypePage;
    individualNotePage: IndividualNotePage;
    gitignore: Gitignore
}

export type TemplateStringVariables<T extends keyof TemplateStringMap> = TemplateStringMap[T]

export type TemplateStringVariableRecord<T extends keyof TemplateStringMap> = Record<TemplateStringVariables<T>, string>
