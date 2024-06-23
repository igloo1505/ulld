import { router } from "@ulld/api";
// ULLD_BUILD_PROCESS: Add exported trpc routers here.
// import { contactsRouter } from "./routers/contacts";



export const internalTrpcRouter = router({
    // contacts: contactsRouter
})



export type InternalTrpcRouter = typeof internalTrpcRouter
