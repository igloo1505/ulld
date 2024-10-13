import {
  settingsPageOutputSchema
} from "../chunk-BOVJOOSV.js";
import {
  componentDocumentationSchema
} from "../chunk-USB6ZCXJ.js";
import {
  navigationLinkSchema
} from "../chunk-MDQ3YTZZ.js";
import "../chunk-NG6HCK6Y.js";

// src/buildStaticData/main.ts
import { z } from "zod";
import buildData from "@ulld/utilities/buildStaticData.json";
import { replaceRecursively } from "@ulld/utilities/general";
var getFileTypeAppendices = (parsableExtensions) => {
  let ext = {};
  for (const k of parsableExtensions) {
    ext[k] = replaceRecursively(k, /\./gim, "");
  }
  return ext;
};
var buildStaticDataSchema = z.object({
  fsRoot: z.string(),
  navigationLinks: navigationLinkSchema.array().default([]).transform((a) => [
    ...a,
    {
      label: "Settings",
      href: "/settings",
      icon: "cog"
    }
  ]),
  settingPages: settingsPageOutputSchema.array().default([]),
  componentDocs: componentDocumentationSchema.array().default([]),
  transpilePackages: z.string().array().default([]),
  tailwindSources: z.string().array().default([])
}).transform((a) => {
  return {
    ...a,
    parsableExtensions: buildData.parsableFileExtensions,
    filetypeSpecificAppendices: getFileTypeAppendices(
      buildData.parsableFileExtensions
    ),
    internalDocumentTypes: buildData.internalDocumentTypes,
    fileTypes: {
      image: ["jpeg", "jpg", "webp", "png", "heif", "gif"]
    }
  };
});
export {
  buildStaticDataSchema
};
//# sourceMappingURL=main.js.map