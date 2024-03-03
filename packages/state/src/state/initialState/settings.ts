import type { serverClient } from '#/trpc/serverClient'
import { Settings } from '@prisma/client'

export type LocalSettingsType = Omit<Settings, "id" | "lastSync" | "firstSync"> & { id?: number }

export type RetrievedSettings = Awaited<ReturnType<typeof serverClient.settings.getSettings>>

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


export const getCompletedSettings = (s: RetrievedSettings): LocalSettingsType => {
    return {
        ...defaultSettingsState,
        ...s
    }
}
