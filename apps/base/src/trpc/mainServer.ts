import {extendServerClient} from "@ulld/api/extendServerClient"
import { internalTrpcRouter, InternalTrpcRouter } from "./internalRouter"


const globalTrpc = global as unknown as {
    appRouter: ReturnType<typeof extendServerClient<typeof internalTrpcRouter>>["appRouter"]
    serverClient: ReturnType<typeof extendServerClient<typeof internalTrpcRouter>>["serverClient"]
}


const { appRouter, serverClient } = Boolean(globalTrpc.appRouter && globalTrpc.serverClient) ? {appRouter: globalTrpc.appRouter, serverClient: globalTrpc.serverClient} : extendServerClient<InternalTrpcRouter>(internalTrpcRouter)


export {appRouter, serverClient}
