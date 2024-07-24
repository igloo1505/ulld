import { appRouter } from "./main";
import { httpBatchLink } from "./batchLink";
import superjson from 'superjson'


export const serverClient = appRouter.createCaller({
    config(opts: any) {
        return {
            links: httpBatchLink(opts.ctx),
            transformer: superjson,
        }
    }
})
