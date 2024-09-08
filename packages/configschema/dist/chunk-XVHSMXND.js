import { z } from 'zod';

// src/zod/credentials/main.ts
var credentialsConfigSchema = z.object({
  googleServiceAccountJsonPath: z.string().optional().describe("Path to the service account credentials file to enable calendar integration.")
}).default({});

export { credentialsConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-XVHSMXND.js.map