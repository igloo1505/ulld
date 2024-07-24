import { publicProcedure, router } from "../trpc";
import { backupEquations } from "../../trpcInternalMethods/backup/nonFileSystem/equations";
import { backupSnippets } from "../../trpcInternalMethods/backup/nonFileSystem/snippets";
import { backupQAPairAndExams } from "../../trpcInternalMethods/backup/nonFileSystem/qa";
import { backupSettings } from "../../trpcInternalMethods/backup/nonFileSystem/settings";
import { backupAutoSettings } from "../../trpcInternalMethods/backup/nonFileSystem/autoSettings";
import { backupReadingLists } from "../../trpcInternalMethods/backup/nonFileSystem/readingLists";
import { backupBib } from "../../trpcInternalMethods/backup/nonFileSystem/bib";
import { backupGoogleAuth } from "../../trpcInternalMethods/backup/nonFileSystem/googleAuth";
import { backupQuotes } from "../../trpcInternalMethods/backup/nonFileSystem/quotes";
import { dailyFocus } from "../../trpcInternalMethods/backup/nonFileSystem/dailyFocus";

export const syncRouter = router({
    backupNonFileSystemDB: publicProcedure.mutation(async () => {
        await backupSettings();
        await backupEquations();
        await backupSnippets();
        await backupQAPairAndExams();
        await backupSettings();
        await backupAutoSettings();
        await backupReadingLists();
        await backupBib();
        await backupGoogleAuth();
        await backupQuotes();
        await dailyFocus();
    }),
});
