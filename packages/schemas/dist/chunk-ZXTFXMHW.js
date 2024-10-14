// src/database/inputTypeSchemas/JsonNullValueInputSchema.ts
import { z } from "zod";
import { Prisma } from "@ulld/database/db";
var JsonNullValueInputSchema = z.enum(["JsonNull"]).transform((value) => value === "JsonNull" ? Prisma.JsonNull : value);

export {
  JsonNullValueInputSchema
};
//# sourceMappingURL=chunk-ZXTFXMHW.js.map