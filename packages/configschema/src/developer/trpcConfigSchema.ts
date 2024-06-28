import { z } from "zod";
import { TrpcConfig } from "./types/trpcConfig";

export const trpcConfigSchema: z.ZodType<TrpcConfig> = z.object({
    routerName: z.string(),
    routerExport: z
        .string()
        .describe(
            "The optional export path of a trpc router that will be appended to the main router at the devloperConfigSchema.trpc.routerName property.",
        ),
});
