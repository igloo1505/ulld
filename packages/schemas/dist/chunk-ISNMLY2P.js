// src/database/inputTypeSchemas/JsonNullValueInputSchema.ts
import { z } from "zod";
import { Prisma } from "@prisma/client";
var JsonNullValueInputSchema = z.enum(["JsonNull"]).transform((value) => value === "JsonNull" ? Prisma.JsonNull : value);

export {
  JsonNullValueInputSchema
};
//# sourceMappingURL=chunk-ISNMLY2P.js.map