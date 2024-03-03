import { autoSetting } from "@prisma/client";
import { publicProcedure, router } from "../trpc";
import { syncBib } from "#/trpcInternalMethods/bib/syncBib";
import { getAutoSettingsWithRegex } from "#/trpcInternalMethods/settings/autoSettings/getAutosettingWithRegex";
import { syncAutoSettings } from "#/trpcInternalMethods/settings/autoSettings/syncAutoSettings";
import { getInternalConfig } from "@ulld/config";
import { cleanDatabase } from "#/trpcInternalMethods/maintenance/cleanDatabase";
import { syncOptionsSchema } from "#/schemas/syncing/syncOptions";
import { syncConfig } from "#/trpcInternalMethods/syncing/config/syncConfig";
import { syncDirRecursively } from "#/trpcInternalMethods/syncing/mdx/syncDirRecursively";
import { backupAutoSettings } from "#/trpcInternalMethods/backup/nonFileSystem/autoSettings";
import { backupBib } from "#/trpcInternalMethods/backup/nonFileSystem/bib";
import { dailyFocus } from "#/trpcInternalMethods/backup/nonFileSystem/dailyFocus";
import { backupEquations } from "#/trpcInternalMethods/backup/nonFileSystem/equations";
import { backupGoogleAuth } from "#/trpcInternalMethods/backup/nonFileSystem/googleAuth";
import { backupQAPairAndExams } from "#/trpcInternalMethods/backup/nonFileSystem/qa";
import { backupQuotes } from "#/trpcInternalMethods/backup/nonFileSystem/quotes";
import { backupReadingLists } from "#/trpcInternalMethods/backup/nonFileSystem/readingLists";
import { backupSettings } from "#/trpcInternalMethods/backup/nonFileSystem/settings";
import { backupSnippets } from "#/trpcInternalMethods/backup/nonFileSystem/snippets";


export interface AutoSettingType {
    id?: number
    glob: string,
    type: autoSetting,
    value: string
}

export interface AutoSettingWithRegex {
    id?: number
    glob: RegExp
    globString: string
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
