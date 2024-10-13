import {
  zodOptNum,
  zodOptStr
} from "./chunk-HZ5UTSVD.js";
import {
  zodFrontMatterTableStylesObject
} from "./chunk-YTEVVTH6.js";

// src/mdx/frontMatter/main.ts
import { z } from "zod";
var jsonSerializableQuantity = z.union([
  z.boolean(),
  z.string(),
  z.number(),
  z.null()
]);
var superJsonSerializableQuantity = jsonSerializableQuantity.or(z.union([
  z.undefined(),
  z.date(),
  z.instanceof(RegExp),
  z.instanceof(Error),
  z.instanceof(URL)
]));
var jsonSerializableValue = z.union([
  jsonSerializableQuantity,
  z.record(z.string(), jsonSerializableQuantity),
  z.record(z.string(), z.record(z.string(), jsonSerializableQuantity)),
  z.record(z.string(), jsonSerializableQuantity).array(),
  jsonSerializableQuantity.array(),
  jsonSerializableQuantity.array().array()
]);
var frontMatterSchema = z.object({
  title: z.string().nullish(),
  created: zodOptStr,
  updated: zodOptStr,
  summary: zodOptStr,
  subjects: z.union([z.string(), z.string().array()]).transform(
    (a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]
  ).default([]),
  topics: z.union([z.string(), z.string().array()]).transform(
    (a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]
  ).default([]),
  tags: z.union([z.string(), z.string().array()]).transform(
    (a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]
  ).default([]),
  importantValues: z.number().array().default([]),
  id: zodOptStr,
  sequential: zodOptNum,
  sequentialKey: zodOptStr,
  tableStyles: zodFrontMatterTableStylesObject.optional()
});
var extendedFrontMatterSchema = frontMatterSchema.and(z.record(z.string(), jsonSerializableValue));

export {
  jsonSerializableValue,
  frontMatterSchema,
  extendedFrontMatterSchema
};
//# sourceMappingURL=chunk-KDNETXET.js.map