import { z } from "zod";
export declare const pluginStatusTypeSchema: z.ZodUnion<[z.ZodLiteral<"installed">, z.ZodLiteral<"install-failed">, z.ZodLiteral<"not-found">, z.ZodLiteral<"not-installed">]>;
export type PluginStatus = z.output<typeof pluginStatusTypeSchema>;
