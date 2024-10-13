import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/IpynbCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var IpynbCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.lazy(() => SortOrderSchema).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  raw: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var IpynbCountOrderByAggregateInputSchema_default = IpynbCountOrderByAggregateInputSchema;

export {
  IpynbCountOrderByAggregateInputSchema,
  IpynbCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-2GZKSKYQ.js.map