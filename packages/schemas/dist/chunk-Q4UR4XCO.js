import {
  IpynbCountOutputTypeSelectSchema
} from "./chunk-3KP7KBW7.js";

// src/database/outputTypeSchemas/IpynbCountOutputTypeArgsSchema.ts
import { z } from "zod";
var IpynbCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => IpynbCountOutputTypeSelectSchema).nullish()
}).strict();
var IpynbCountOutputTypeArgsSchema_default = IpynbCountOutputTypeSelectSchema;

export {
  IpynbCountOutputTypeArgsSchema,
  IpynbCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-Q4UR4XCO.js.map