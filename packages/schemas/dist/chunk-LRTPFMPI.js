// src/database/inputTypeSchemas/DIETARY_GOALSchema.ts
import { z } from "zod";
var DIETARY_GOALSchema = z.enum(["weightLoss", "muscleGain", "autoImmune", "allergy", "gsd", "skin", "sexDrive", "anxiety", "memory", "energy", "adhd", "sleep", "depression", "mentalHealth"]);
var DIETARY_GOALSchema_default = DIETARY_GOALSchema;

export {
  DIETARY_GOALSchema,
  DIETARY_GOALSchema_default
};
//# sourceMappingURL=chunk-LRTPFMPI.js.map