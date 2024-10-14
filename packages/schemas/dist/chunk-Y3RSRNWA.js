import {
  IpynbAvgOrderByAggregateInputSchema
} from "./chunk-YPY3HX67.js";
import {
  IpynbCountOrderByAggregateInputSchema
} from "./chunk-I2FED456.js";
import {
  IpynbMinOrderByAggregateInputSchema
} from "./chunk-RGMC7UBG.js";
import {
  IpynbMaxOrderByAggregateInputSchema
} from "./chunk-ERUARMYW.js";
import {
  IpynbSumOrderByAggregateInputSchema
} from "./chunk-CKOO6QK2.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/IpynbOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var IpynbOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  raw: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  sequentialIndex: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IpynbCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IpynbAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IpynbMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IpynbMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IpynbSumOrderByAggregateInputSchema).optional()
}).strict();
var IpynbOrderByWithAggregationInputSchema_default = IpynbOrderByWithAggregationInputSchema;

export {
  IpynbOrderByWithAggregationInputSchema,
  IpynbOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-Y3RSRNWA.js.map