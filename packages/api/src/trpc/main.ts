import { router } from "./trpc";
import { syncRouter } from "./routers/sync";
import { autoSettingRouter } from "./routers/autoSettings";
import { advancedSearchRouter } from "./routers/search";
// import { healthRouter } from "./routers/health/healthRouter";
import { notebookRouter } from "./routers/notebook/main.tsx"
import { settingsRouter } from "./routers/settings";
import { mdxNoteActionsRouter } from "./routers/mdxNote.tsx";
import { fsUtilRouter } from "./routers/fsUtil";
import { readingListRouter } from "./routers/readingList";
import { universalNoteRouter } from "./routers/universalNotes";
import { mediaRouter } from "./routers/media/mediaRouter";
import { qaRouter } from "./routers/qa";
import { betaRouter } from "./routers/beta";
import { toDoRouter } from "./routers/taskManager/taskManagerRouter";
import equationsRouter from "./routers/equations/equationsRouter";
import { kanBanBoardsRouter } from "./routers/kanban/kanbanRouter";
import { commandPaletteRouter } from "./routers/commandPalette/commandPaletteRouter";
import { snippetRouter } from "./routers/snippets/snippetRouter";
import { whiteboardRouter } from "./routers/whiteboard/whiteboardRouter";
import bibliographyRouter from "./routers/bibliography/bibliographyRouter";



export const _appRouter = {
    autoSettings: autoSettingRouter,
    sync: syncRouter,
    toDo: toDoRouter,
    equations: equationsRouter,
    commandPalette: commandPaletteRouter,
    search: advancedSearchRouter,
    boards: kanBanBoardsRouter,
    // health: healthRouter,
    settings: settingsRouter,
    mdx: mdxNoteActionsRouter,
    notebook: notebookRouter,
    snippets: snippetRouter,
    fsUtils: fsUtilRouter,
    readingList: readingListRouter,
    universalNotes: universalNoteRouter,
    media: mediaRouter,
    qa: qaRouter,
    whiteboard: whiteboardRouter,
    bibliography: bibliographyRouter,
    beta: betaRouter,
};


export const appRouter = router(_appRouter);

export type AppRouterType = typeof appRouter;
