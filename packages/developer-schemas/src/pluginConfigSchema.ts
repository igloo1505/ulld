import { plugin } from "postcss";
import { z } from "zod";

const makeValidPath = (p: string) => {
    if (!p) return p;
    if (p.startsWith(".")) {
        p = p.slice(1, p.length);
    }
    if (p.startsWith("/")) {
        p = p.slice(1, p.length);
    }
    return p;
};

export const pluginConfigSchema = z.object({
    $schema: z.string().optional(),
    paths: z
        .object({
            routers: z
                .string()
                .refine((a) => a.endsWith(".tsx") || a.endsWith(".ts"))
                .optional(),
            pluginManager: z.string().optional().default("src/lib/pluginManager.ts"),
            styles: z
                .string()
                .transform(makeValidPath)
                .refine((p) => p.startsWith("src/styles"))
                .optional(),
            app: z
                .string()
                .transform(makeValidPath)
                .refine((p) => !p.startsWith("src/app"))
                .default("src/ulld_app"),
            public: z
                .string()
                .transform(makeValidPath)
                .refine((p) => !p.startsWith("public"))
                .default("src/ulld_public"),
            globalStateComponents: z
                .string()
                .default("src/globalStateComponents.tsx"),
        })
        .default({}),
});

export type PluginConfig = z.output<typeof pluginConfigSchema>;

export const requiredPluginConfigPaths: (keyof PluginConfig["paths"])[] = [
    "app",
    "public",
    "globalStateComponents",
    "pluginManager",
];
