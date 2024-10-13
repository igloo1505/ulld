import {
  dateTimeStringTransform
} from "./chunk-YVRRK3PZ.js";

// src/api/prismaMdxRelations/readingList/classProps.ts
import { z } from "zod";
var readingListZodObject = z.object({
  name: z.string(),
  description: z.string().nullable(),
  bibEntries: z.any().array(),
  mdxNotes: z.any().array().default([]),
  ipynbNotes: z.any().array().default([]),
  createdAt: z.union([z.string().datetime(), z.date()]).nullish().transform(dateTimeStringTransform),
  lastUpdate: z.union([z.string().datetime(), z.date()]).nullish().transform(dateTimeStringTransform)
});

export {
  readingListZodObject
};
//# sourceMappingURL=chunk-I6ZKXDT5.js.map