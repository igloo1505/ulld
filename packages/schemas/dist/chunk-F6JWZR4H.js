import {
  IpynbCreatecitationsListOrderInputSchema
} from "./chunk-UVQGJQS6.js";
import {
  IpynbCreateoutgoingQuickLinksInputSchema
} from "./chunk-CJKS2C2I.js";
import {
  IpynbCreateimportantValuesInputSchema
} from "./chunk-5KU54GLW.js";

// src/database/inputTypeSchemas/IpynbCreateManySequentialListInputSchema.ts
import { z } from "zod";
var IpynbCreateManySequentialListInputSchema = z.object({
  id: z.number().int().optional(),
  rootRelativePath: z.string(),
  isProtected: z.boolean().optional().nullable(),
  title: z.string(),
  latexTitle: z.string().optional().nullable(),
  citationsListOrder: z.union([z.lazy(() => IpynbCreatecitationsListOrderInputSchema), z.string().array()]).optional(),
  importantValues: z.union([z.lazy(() => IpynbCreateimportantValuesInputSchema), z.number().array()]).optional(),
  href: z.string(),
  outgoingQuickLinks: z.union([z.lazy(() => IpynbCreateoutgoingQuickLinksInputSchema), z.string().array()]).optional(),
  raw: z.instanceof(Buffer),
  sequentialIndex: z.number().int().optional().nullable(),
  bookmarked: z.boolean().optional(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var IpynbCreateManySequentialListInputSchema_default = IpynbCreateManySequentialListInputSchema;

export {
  IpynbCreateManySequentialListInputSchema,
  IpynbCreateManySequentialListInputSchema_default
};
//# sourceMappingURL=chunk-F6JWZR4H.js.map