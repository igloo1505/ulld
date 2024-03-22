import { autoSetting } from "@prisma/client";
import { publicProcedure, router } from "../trpc";
import { getInternalConfig } from "@ulld/configschema";
import { syncOptionsSchema } from "../../schemas";
import { cleanDatabase, getAutoSettingsWithRegex, syncAutoSettings, syncBib, syncDirRecursively, syncConfig, backupSettings, backupEquations, backupSnippets, backupQAPairAndExams, backupAutoSettings, backupReadingLists, backupBib, backupGoogleAuth, backupQuotes, dailyFocus } from "../../trpcInternalMethods";


export interface AutoSettingType {
    id?: number
    glob: string,
    type: autoSetting,
    value: string
}


export const syncRouter = router({
    syncDir: publicProcedure.input(syncOptionsSchema.optional()).mutation(async ({ input }) => {
        const config = getInternalConfig()
        if (input?.cleanBeforeSync) {
            await cleanDatabase()
        }
        const _autoSettings = await getAutoSettingsWithRegex()
        await syncAutoSettings()
        await syncBib()
        await syncDirRecursively(config.fsRoot, config.database?.removeIfNotPresentInFs || input?.removeIfNotInFs || false, _autoSettings, input)
        await syncConfig()
    }),
    backupNonFileSystemDB: publicProcedure.mutation(async () => {
        await backupSettings()
        await backupEquations()
        await backupSnippets()
        await backupQAPairAndExams()
        await backupSettings()
        await backupAutoSettings()
        await backupReadingLists()
        await backupBib()
        await backupGoogleAuth()
        await backupQuotes()
        await dailyFocus()
    }),
})
