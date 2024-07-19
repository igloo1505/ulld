
export type TemplateStringId = "settingsPage"|"noteTypePage"|"individualNotePage"

export type SettingsPage = "PLUGIN_NAME" | "PLUGIN_SETTING_PAGE_EXPORT"
export type NoteTypePage = "CATEGORY_ID" | "BASE_URL"
export type IndividualNotePage = "CATEGORY_ID"

type TemplateStringMap = {
    settingsPage: SettingsPage;
    noteTypePage: NoteTypePage;
    individualNotePage: IndividualNotePage
}

export type TemplateStringVariables<T extends keyof TemplateStringMap> = TemplateStringMap[T]

export type TemplateStringVariableRecord<T extends keyof TemplateStringMap> = Record<TemplateStringVariables<T>, string>
