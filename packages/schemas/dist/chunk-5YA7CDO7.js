// src/mdx/frontMatter/utility.ts
import { z } from "zod";
var frontMatterTextStyleSchema = z.union([
  z.literal("base"),
  z.literal("lg"),
  z.literal("xl"),
  z.literal("small")
]);

export {
  frontMatterTextStyleSchema
};
//# sourceMappingURL=chunk-5YA7CDO7.js.map