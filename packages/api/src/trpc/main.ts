import { router } from "./trpc";
import { autoSettingRouter } from "./routers/autoSettings";
import { syncRouter } from "./routers/sync";
import { equationsRouter } from "./routers/equations";
import { commandPaletteRouter } from "./routers/commandPalette";
import { advancedSearchRouter } from "./routers/search";
import { toDoRouter } from "./routers/todo";
import { kanBanBoardsRouter } from "./routers/boards";
import { healthRouter } from "./routers/health/healthRouter";
import { parsingProcedure } from "./routers/parsing";
import { settingsRouter } from "./routers/settings";
import { mdxNoteActionsRouter } from "./routers/mdxNote";
import { bibliographyRouter } from "./routers/bibliography";
import { snippetRouter } from "./routers/snippet";
import { ipynbRouter } from "./routers/ipynb";
import { fsUtilRouter } from "./routers/fsUtil";
import { readingListRouter } from "./routers/readingList";
import { universalNoteRouter } from "./routers/universalNotes";
import { mediaRouter } from "./routers/media/mediaRouter";
import { qaRouter } from "./routers/qa";
import { betaRouter } from "./routers/beta";



console.log(`/Users/bigsexy/Desktop/currentProjects/ulld/packages/api/src/trpc/main.ts`)
export const appRouter = router({
    autoSettings: autoSettingRouter,
    sync: syncRouter,
    toDo: toDoRouter,
    equations: equationsRouter,
    commandPalette: commandPaletteRouter,
    search: advancedSearchRouter,
    boards: kanBanBoardsRouter,
    health: healthRouter,
    parse: parsingProcedure,
    settings: settingsRouter,
    mdx: mdxNoteActionsRouter,
    ipynb: ipynbRouter,
    bibliography: bibliographyRouter,
    snippets: snippetRouter,
    fsUtils: fsUtilRouter,
    readingList: readingListRouter,
    universalNotes: universalNoteRouter,
    media: mediaRouter,
    qa: qaRouter,
    beta: betaRouter
})

export type AppRouterType = typeof appRouter;
