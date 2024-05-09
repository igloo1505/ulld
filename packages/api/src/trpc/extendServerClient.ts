import type { CreateRouterInner, ProcedureRouterRecord } from "@trpc/server";
import { trpcRoot, router } from "./trpc";
import { _appRouter } from "./main";
import { httpBatchLink } from "./batchLink";
import superjson from "superjson";


type AcceptedRouterTypes =
    | Record<string, ReturnType<typeof router>>
    | Record<string, CreateRouterInner<typeof trpcRoot._config, any>>
    | ProcedureRouterRecord;

export const extendServerClient = <T extends AcceptedRouterTypes>(
    routerExtension: T,
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
