import { z } from "zod";
import { licenseUnion } from "./licenseUnion.js";

const exportFieldObject = z.object({
    types: z.string().optional(),
    import: z.string().optional(),
    require: z.string().optional(),
})

export const ulldCompletePackageJsonSchema = z.object({
    name: z
        .string()
        .max(214)
        .refine((a) => {
            return a.toLowerCase() === a;
        }),
    version: z.string().optional().default("0.0.0"),
    exports: z.record(z.string(), z.string().or(exportFieldObject)).optional(),
    files: z.string().array().optional().default(["src"]),
    dependencies: z.record(z.string(), z.string()),
    packageManager: z.string().optional().default("pnpm@8.1.1"),
    devDependencies: z.record(z.string(), z.string()).optional(),
    peerDependencies: z.record(z.string(), z.string()).optional(),
    peerDependenciesMeta: z.any().optional(),
    optionalDependencies: z.record(z.string(), z.string()).optional(),
    bundleDependencies: z.record(z.string(), z.string()).optional(),
    type: z.string().optional(),
    scripts: z.record(z.string(), z.string()).optional(),
    private: z.boolean().optional(),
    os: z.string().array().optional(),
    cpu: z.string().array().optional(),
    workspaces: z.string().array().optional(),
    funding: z
        .object({
            type: z.union([z.literal("individual"), z.literal("patreon")]),
            url: z.string().url(),
        })
        .optional(),
    main: z.string().optional(),
    bin: z.string().optional(),
    man: z.union([
        z.string(),
        z.string().array()
    ]).optional(),
    keywords: z
        .string()
        .array()
        .default(["ulld-plugin"])
        .transform((a) => {
            if (!a.includes("ulld-plugin")) {
                a.push("ulld-plugin");
            }
            return a;
        }),
    homepage: z.string().url().optional(),
    license: licenseUnion.default("MIT"),
    people: z
        .union([
            z.object({
                name: z.string(),
                email: z.string().email().optional(),
                url: z.string().url().optional(),
            }),
            z.object({
                author: z.string(),
            }),
        ])
        .optional(),
    description: z.string().optional()
});

export type PackageJsonType = z.input<typeof ulldCompletePackageJsonSchema>;
