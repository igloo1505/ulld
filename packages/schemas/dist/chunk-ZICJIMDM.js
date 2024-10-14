// src/database/inputTypeSchemas/JsonNullValueFilterSchema.ts
import { z } from "zod";
import { Prisma } from "@ulld/database/db";
var JsonNullValueFilterSchema = z.enum(["DbNull", "JsonNull", "AnyNull"]).transform((value) => value === "JsonNull" ? Prisma.JsonNull : value === "DbNull" ? Prisma.JsonNull : value === "AnyNull" ? Prisma.AnyNull : value);

export {
  JsonNullValueFilterSchema
};
//# sourceMappingURL=chunk-ZICJIMDM.js.map