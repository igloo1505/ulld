// src/zod/credentials/main.ts
import { z } from "zod";
var credentialsConfigSchema = z.object({
  googleServiceAccountJsonPath: z.string().optional().describe("Path to the service account credentials file to enable calendar integration.")
}).default({});
var credentialsConfigSchemaOutput = z.object({
  googleServiceAccountJsonPath: z.string().optional()
});

export {
  credentialsConfigSchema,
  credentialsConfigSchemaOutput
};
//# sourceMappingURL=chunk-KEWTKAXN.mjs.map