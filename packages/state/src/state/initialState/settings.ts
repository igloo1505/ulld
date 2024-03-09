import { Settings } from '@ulld/database'
export type LocalSettingsType = Omit<Settings, "id" | "lastSync" | "firstSync"> & { id?: number }


export const defaultSettingsState: LocalSettingsType = {
    id: 1,
    title: "Uh Little Less Dum",
    tooltips: true,
    summary_showTags: true,
    summary_showCitations: true,
    landingImageAlign: "center",
    lockedLandingImage: null,
    cleanOnSync: false
}


export const getCompletedSettings = (s: Partial<Settings>): LocalSettingsType => {
    return {
        ...defaultSettingsState,
        ...s
    }
}
