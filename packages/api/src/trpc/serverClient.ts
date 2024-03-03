import { HttpBatchLink } from "./batchLink";
import {appRouter} from "./index"

import superjson from 'superjson'


export const serverClient = appRouter.createCaller({
    config(opts: any) {
        return {
            links: HttpBatchLink(opts.ctx),
            transformer: superjson,
        }
    }
})
