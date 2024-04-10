import { ParsedSettings, settingSchema } from '@ulld/parsers/settings/settingsParser'

export type LocalSettingsType = Omit<ParsedSettings, "id" | "lastSync" | "firstSync"> & { id?: number }


export const defaultSettingsState: ParsedSettings = settingSchema.omit({
    lastSync: true,
    firstSync: true
}).parse({
    id: 1,
    title: "Uh Little Less Dum",
    tooltips: true,
    summary_showTags: true,
    summary_showCitations: true,
    landingImageAlign: "center",
    cleanOnSync: false
})


export const getCompletedSettings = (s: ParsedSettings): ParsedSettings => {
    return {
        ...defaultSettingsState,
        ...s
    }
}
