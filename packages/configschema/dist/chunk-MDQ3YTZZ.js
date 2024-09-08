import {
  navigationLinkCategory
} from "./chunk-NG6HCK6Y.js";

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
//# sourceMappingURL=chunk-MDQ3YTZZ.js.map