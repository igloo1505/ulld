import { ParsedSettings, settingSchema } from '@ulld/parsers/settings/settingsParser'

export type LocalSettingsType = Omit<ParsedSettings, "id" | "lastSync" | "firstSync"> & { id?: number }


export const defaultSettingsState: ParsedSettings = settingSchema.parse({
    id: 1,
    title: "Uh Little Less Dum",
})


export const getCompletedSettings = (s: ParsedSettings): ParsedSettings => {
    return {
        ...defaultSettingsState,
        ...s
    }
}
