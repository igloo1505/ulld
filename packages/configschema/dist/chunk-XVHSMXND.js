// src/zod/credentials/main.ts
import { z } from "zod";
var credentialsConfigSchema = z.object({
  googleServiceAccountJsonPath: z.string().optional().describe("Path to the service account credentials file to enable calendar integration.")
}).default({});

export {
  credentialsConfigSchema
};
//# sourceMappingURL=chunk-XVHSMXND.js.map