import {extendAppRouter} from "@ulld/api/extend"
import type {InternalTrpcRouter} from "./internalRouter"

const globalTrpc = global as unknown as {
    client: ReturnType<typeof extendAppRouter<InternalTrpcRouter>>["client"]
}


const { client } = Boolean(globalTrpc.client) ? {client: globalTrpc.client} : extendAppRouter<InternalTrpcRouter>()

globalTrpc.client = client

export {client}
