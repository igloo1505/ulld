// src/zod/build/database/postgres.ts
import { z } from "zod";
var postgresConfigSchema = z.object({
  port: z.coerce.number().int().default(5432),
  dbName: z.string().default("ulld"),
  connectionURI: z.string().default("")
}).default({}).refine(
  (data) => Boolean(data.connectionURI !== "" || data.port && data.dbName)
).transform((data) => {
  if (data.connectionURI && data.connectionURI !== "") {
    return {
      connectionURI: data.connectionURI
    };
  }
  return {
    port: data.port,
    dbName: data.dbName
  };
});

export {
  postgresConfigSchema
};
//# sourceMappingURL=chunk-3N3P3LRD.js.map