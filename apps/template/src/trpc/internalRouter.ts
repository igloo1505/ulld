import { router } from "@ulld/api";
import { generatedRouter } from "./generatedRouter";

export let hasGeneratedRouter = Object.keys(generatedRouter).length > 0

export const internalTrpcRouter = router(generatedRouter)


export type InternalTrpcRouter = typeof internalTrpcRouter
