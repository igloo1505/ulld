import type { client } from "../../trpc/client"

// TODO: This needs to be cleaned up dramatically. The typescript is a mess even if it works, and it still needs to be tested.
export const getUniversalQuery = async (queryKey: keyof typeof client | string, routerParent: undefined | keyof typeof client = undefined, methodType: "query" | "mutate" = "query") => {
    if (typeof window === "undefined") {
        let _client = await import("../../trpc/serverClient").then(d => d.serverClient)
        // return _client[queryKey] as typeof _client[typeof queryKey]
        return routerParent === undefined ? _client[queryKey as keyof typeof _client] : _client[routerParent][queryKey as keyof typeof _client[typeof routerParent]]
    }
    let _client = await import("../../trpc/client").then(d => d.client)
    /* @ts-ignore */
    return routerParent === undefined ? _client[queryKey as keyof typeof _client][methodType as keyof typeof _client[typeof queryKey]] : _client[routerParent][queryKey as keyof typeof _client[typeof routerParent]][methodType as keyof typeof _client[typeof routerParent][typeof queryKey]]
}
