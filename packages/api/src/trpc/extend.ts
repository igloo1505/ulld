import { type CreateRouterInner, type ProcedureRouterRecord } from "@trpc/server";
import { type trpcRoot, type router } from "./trpc";
import { type _appRouter } from "./main";
import { httpBatchLink } from "./batchLink";
import { createTRPCProxyClient } from "@trpc/client";

type AcceptedRouterTypes =
    | Record<string, ReturnType<typeof router>>
    | Record<string, CreateRouterInner<typeof trpcRoot._config, any>>
    | ProcedureRouterRecord;


export const extendAppRouter = <T extends AcceptedRouterTypes>(
) => {

    const client = createTRPCProxyClient<ReturnType<typeof router<typeof _appRouter & T>>>({
        links: httpBatchLink(),
    });

    return {
        client,
    };
};
