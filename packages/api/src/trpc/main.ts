import { router } from "./trpc";
import { syncRouter } from "./routers/sync";
import { autoSettingRouter } from "./routers/autoSettings";
import { advancedSearchRouter } from "./routers/search";
import { healthRouter } from "./routers/health/healthRouter";
import { parsingProcedure } from "./routers/parsing";
import { settingsRouter } from "./routers/settings";
import { mdxNoteActionsRouter } from "./routers/mdxNote";
import { fsUtilRouter } from "./routers/fsUtil";
import { readingListRouter } from "./routers/readingList";
import { universalNoteRouter } from "./routers/universalNotes";
import { mediaRouter } from "./routers/media/mediaRouter";
import { qaRouter } from "./routers/qa";
import { betaRouter } from "./routers/beta";
import fs from "fs";
import path from "path";
import type { AnyProcedure, AnyRouter, ProcedureRouterRecord } from "@trpc/server";

console.log(
    `/Users/bigsexy/Desktop/currentProjects/ulld/packages/api/src/trpc/main.ts`,
);
const _appRouter = {
    autoSettings: autoSettingRouter,
    sync: syncRouter,
    // toDo: toDoRouter,
    // equations: equationsRouter,
    // commandPalette: commandPaletteRouter,
    search: advancedSearchRouter,
    // boards: kanBanBoardsRouter,
    health: healthRouter,
    parse: parsingProcedure,
    settings: settingsRouter,
    mdx: mdxNoteActionsRouter,
    // ipynb: ipynbRouter,
    // snippets: snippetRouter,
    fsUtils: fsUtilRouter,
    readingList: readingListRouter,
    universalNotes: universalNoteRouter,
    media: mediaRouter,
    qa: qaRouter,
    // whiteboard: whiteboardRouter,
    beta: betaRouter,
};

const getRouterPaths = async () => {
    const p = await fs.promises.readFile(
        path.join(process.cwd(), "package.json"),
        "utf-8",
    );
    const packageJson = JSON.parse(p);
    return packageJson?.ulld?.routerPaths;
};


// TODO: Come back to this. Work on the developer package, and add a cli function to copy the routers over in a 'preBuild' script in the package.json
const applyRouterPaths = async (existingRouter: ProcedureRouterRecord) => {
    const routerPaths = await getRouterPaths();
    if (!routerPaths) return existingRouter
    const files = Object.entries(routerPaths);
    for await (const f of files){
        const _path = path.join(process.cwd(), f[1] as string)
        const content = await fs.promises.readFile(_path, "utf-8")
        const _router = await import("/Users/bigsexy/Desktop/currentProjects/ulld/packages/equations/src/lib/equationsRouter.ts")
        const _router2 = await import(`${_path}`)
        // const blob = new Blob([content], {type: "text/javascript"})
        // const url = URL.createObjectURL(blob)
        // const _router = await import(url)
        console.log("_router: ", _router)
        if(_router) {
        existingRouter[f[0]] = "default" in _router ? _router.default : _router as AnyProcedure | AnyRouter
        }
    }
    return existingRouter
};

export const appRouter = router(process.env.NODE_ENV === "production" ? _appRouter : await (async () => await applyRouterPaths(_appRouter))());

export type AppRouterType = typeof appRouter;
