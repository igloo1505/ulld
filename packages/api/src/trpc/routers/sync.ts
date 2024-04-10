import { autoSetting } from "@ulld/database/internalDatabaseTypes";
import { publicProcedure, router } from "../trpc";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { syncOptionsSchema } from "../../schemas/syncing/syncOptions";
import { getAutoSettingsWithRegex } from "../../trpcInternalMethods/settings/autoSettings/getAutosettingWithRegex";
import { syncAutoSettings } from "../../trpcInternalMethods/settings/autoSettings/syncAutoSettings";
import { syncDirRecursively } from "../../trpcInternalMethods/syncing/mdx/syncDirRecursively";
import { cleanDatabase } from "../../trpcInternalMethods/maintenance/cleanDatabase";
import { syncConfig } from "../../trpcInternalMethods/syncing/config/syncConfig";
import { backupEquations } from "../../trpcInternalMethods/backup/nonFileSystem/equations"
import { backupSnippets } from "../../trpcInternalMethods/backup/nonFileSystem/snippets"
import { backupQAPairAndExams } from "../../trpcInternalMethods/backup/nonFileSystem/qa"
import { backupSettings } from "../../trpcInternalMethods/backup/nonFileSystem/settings"
import { backupAutoSettings } from "../../trpcInternalMethods/backup/nonFileSystem/autoSettings"
import { backupReadingLists } from "../../trpcInternalMethods/backup/nonFileSystem/readingLists"
import { backupBib } from "../../trpcInternalMethods/backup/nonFileSystem/bib"
import { backupGoogleAuth } from "../../trpcInternalMethods/backup/nonFileSystem/googleAuth"
import { backupQuotes } from "../../trpcInternalMethods/backup/nonFileSystem/quotes"
import { dailyFocus } from "../../trpcInternalMethods/backup/nonFileSystem/dailyFocus"

export interface AutoSettingType {
    id?: number
    glob: string,
    type: autoSetting,
    value: string
}



const syncPluginsRecursively = async () => {
    throw new Error("Ah shit. Forgot this.")
    }


export const syncRouter = router({
    syncDir: publicProcedure.input(syncOptionsSchema.optional()).mutation(async ({ input }) => {
        const config = getInternalConfig()
        if (input?.cleanBeforeSync) {
            await cleanDatabase()
        }
        const _autoSettings = await getAutoSettingsWithRegex()
        await syncAutoSettings()
        await syncPluginsRecursively()
        // await syncBib()
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
