// src/database/inputTypeSchemas/TransactionIsolationLevelSchema.ts
import { z } from "zod";
var TransactionIsolationLevelSchema = z.enum(["ReadUncommitted", "ReadCommitted", "RepeatableRead", "Serializable"]);
var TransactionIsolationLevelSchema_default = TransactionIsolationLevelSchema;

export {
  TransactionIsolationLevelSchema,
  TransactionIsolationLevelSchema_default
};
//# sourceMappingURL=chunk-ZGQPDWPH.js.map