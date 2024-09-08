import {
  navigationLinkCategory
} from "./chunk-GLXDRPPL.js";

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
//# sourceMappingURL=chunk-HWZMF7B2.js.map