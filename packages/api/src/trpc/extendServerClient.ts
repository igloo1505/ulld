import type { CreateRouterInner, ProcedureRouterRecord } from "@trpc/server";
import superjson from "superjson";
import type { trpcRoot, UlldRouterType } from "./trpc";
import { router } from "./trpc";
import { _appRouter } from "./main";
import { httpBatchLink } from "./batchLink";

export type AcceptedRouterTypes =
    | ProcedureRouterRecord
    | Record<string, CreateRouterInner<typeof trpcRoot._config, any>>
    | Record<string, ReturnType<UlldRouterType>>


const trpcRootConfig = {
        config(opts: {ctx: object}) {
            return {
                links: httpBatchLink(opts.ctx),
                transformer: superjson,
            };
        },
    }


type MergedRouters<T extends AcceptedRouterTypes> = T & typeof _appRouter

type ExtendedAppRouter<T extends AcceptedRouterTypes> = ReturnType<typeof router<MergedRouters<T>>>


interface ExtendedTrpcRouter<T extends AcceptedRouterTypes> {
    appRouter: ExtendedAppRouter<T>
    // WITH_WIFI: Look up trpc docs on how to best type the return of createCaller based on a generic. Look around in their types a bit, but not worth spending a bunch of time on it when I can just look it up when I'm back online.
    serverClient: any
}


export const extendServerClient = <T extends AcceptedRouterTypes>(
    routerExtension: T,
): ExtendedTrpcRouter<T> => {

    const appRouter = router({
        ...routerExtension,
        ..._appRouter,
    });

    const serverClient = appRouter.createCaller(trpcRootConfig);

    return {
        appRouter,
        serverClient,
    }
};
