import { z } from 'zod';

// src/schemas/filePath/filePathInput.ts
var filePathGlobPropsSchema = z.object({
  glob: z.string().default("**/*").transform((x) => x.startsWith("/") ? x.slice(1) : x),
  type: z.union([z.literal("dirs"), z.literal("files"), z.literal("dirsAndFiles")]).default("files"),
  ignore: z.union([z.string(), z.string().array()]).nullish(),
  returnAs: z.union([z.literal("absolute"), z.literal("rootRelative")]).default("absolute")
});

export { filePathGlobPropsSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-EXFWPJVA.js.map