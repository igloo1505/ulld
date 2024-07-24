import type { client } from "../../trpc/client";
export declare const getUniversalQuery: (queryKey: keyof typeof client | string, routerParent?: undefined | keyof typeof client, methodType?: "query" | "mutate") => Promise<any>;
//# sourceMappingURL=getUniversalClient.d.ts.map