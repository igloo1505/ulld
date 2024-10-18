import {
  navigationLinkCategory
} from "./chunk-CFDJDG42.mjs";

// src/developer/navigationLink.ts
import { z } from "zod";
var navigationLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  icon: z.string().optional(),
  pluginName: z.string().optional(),
  category: navigationLinkCategory.default("general")
});

export {
  navigationLinkSchema
};
//# sourceMappingURL=chunk-FBSQUA72.mjs.map