import { z } from "zod";


const buildConfigSchema = z.object({
    buildDir: z
        .string()
        .optional()
        .describe(
            "Absolute path to the directory where the ULLD app should be generated.",
        ),
})

export const ulldCliConfigSchema = z.object({
    build: buildConfigSchema.default({}),
    logLevel: z.union([
        z.literal("info"),
        z.literal("warn"),
        z.literal("error"),
        z.literal("debug"),
    ]).optional(),
    logFile: z.string().optional().describe("Absolute path to a log file used during the build process.")
});
