import { z } from "zod";
const makeValidPath = (p) => {
    if (!p)
        return p;
    if (p.startsWith(".")) {
        p = p.slice(1, p.length);
    }
    if (p.startsWith("/")) {
        p = p.slice(1, p.length);
    }
    return p;
};
export const pluginConfigSchema = z.object({
    paths: z.object({
        routers: z
            .string()
            .refine((a) => a.endsWith(".tsx") || a.endsWith(".ts"))
            .array()
            .default([]),
        pluginManager: z.string().default("src/lib/pluginManager.ts"),
        styles: z.string().transform(makeValidPath).refine((p) => p.startsWith("src/styles/")).optional(),
        app: z
            .string()
            .transform(makeValidPath)
            .refine((p) => !p.startsWith("src/app")).default("src/ulld_app"),
        public: z
            .string()
            .transform(makeValidPath)
            .refine((p) => !p.startsWith("public")).default("src/ulld_public"),
        globalStateComponents: z.string().optional()
    }),
});
