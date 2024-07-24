import type { CreateRouterInner, ProcedureRouterRecord } from "@trpc/server";
import { trpcRoot, router, UlldRouterType } from "./trpc";
import { _appRouter } from "./main";
import { httpBatchLink } from "./batchLink";
import superjson from "superjson";


export type AcceptedRouterTypes =
    | ProcedureRouterRecord
    | Record<string, CreateRouterInner<typeof trpcRoot._config, any>>
    | Record<string, ReturnType<UlldRouterType>>


export const extendServerClient = (
    routerExtension: AcceptedRouterTypes
) => {
    const appRouter = router({
        ...routerExtension,
        ..._appRouter,
    });

    const serverClient = appRouter.createCaller({
        config(opts: any) {
            return {
                links: httpBatchLink(opts.ctx),
                transformer: superjson,
            };
        },
    });

    return {
        appRouter,
        serverClient,
    };
};
