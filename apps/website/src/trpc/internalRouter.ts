import { router } from "@ulld/api";
import { contactsRouter } from "./routers/contacts";



export const internalTrpcRouter = router({
    contacts: contactsRouter
})



export type InternalTrpcRouter = typeof internalTrpcRouter
