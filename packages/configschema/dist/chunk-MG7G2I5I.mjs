// src/zod/build/additional/additionalUserContent.ts
import { z } from "zod";
var validImageExtends = ["jpg", "jpeg", "svg", "png", "webp"];
var validFaviconExtensions = ["ico", "png", "jpg", "svg"];
var additionalUserContent = z.object({
  css: z.string().optional(),
  favicon: z.string().refine(
    (s) => {
      let _s = s.split(".").at(-1);
      if (!_s)
        return false;
      return validFaviconExtensions.includes(_s);
    },
    {
      message: `Your favicon must be of a valid favicon type. Currently supported extensions are:
${validFaviconExtensions.join("\n")}`
    }
  ).optional(),
  logo: z.string().refine(
    (s) => {
      let _s = s.split(".").at(-1);
      if (!_s)
        return false;
      return validImageExtends.includes(_s);
    },
    {
      message: `Your logo must be of a valid image type. Currently supported image extensions are:
${validImageExtends.join("\n")}`
    }
  ).optional()
}).default({});
var additionalUserContentOutput = z.object({
  css: z.string().optional(),
  favicon: z.string().optional(),
  logo: z.string().optional()
});

export {
  additionalUserContent,
  additionalUserContentOutput
};
//# sourceMappingURL=chunk-MG7G2I5I.mjs.map