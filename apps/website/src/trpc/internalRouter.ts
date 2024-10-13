import { router } from "@ulld/api";
import { _appRouter } from "@ulld/api/appRouter"
import { contactsRouter } from "./routers/contacts";


export const internalTrpcRouter = router({
    ..._appRouter,
    contacts: contactsRouter
})



export type InternalTrpcRouter = typeof internalTrpcRouter
