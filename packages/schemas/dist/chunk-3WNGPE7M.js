// src/api/prismaMdxRelations/bib/bibCore/classProps.ts
import { z } from "zod";
import { appData } from "@ulld/utilities/appData";
var bibCoreSchema = z.object({
  firstSync: z.union([z.string().datetime(), z.date()]).nullish().transform((a) => typeof a === "string" ? new Date(a) : a),
  lastAccess: z.union([z.string().datetime(), z.date()]).nullish().transform((a) => typeof a === "string" ? new Date(a) : a),
  filename: z.string().default(appData.buildDefaults.bibFilePath),
  id: z.number().int().default(1),
  entries: z.any().array().default([])
});

export {
  bibCoreSchema
};
//# sourceMappingURL=chunk-3WNGPE7M.js.map