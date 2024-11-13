// src/cliConfig/main.ts
import { z } from "zod";
var buildConfigSchema = z.object({
  buildDir: z.string().optional().describe(
    "Absolute path to the directory where the ULLD app should be generated."
  )
});
var ulldCliConfigSchema = z.object({
  build: buildConfigSchema.default({}),
  logLevel: z.union([
    z.literal("info"),
    z.literal("warn"),
    z.literal("error"),
    z.literal("debug")
  ]).optional(),
  logFile: z.string().optional().describe("Absolute path to a log file used during the build process.")
});
export {
  ulldCliConfigSchema
};
//# sourceMappingURL=main.mjs.map