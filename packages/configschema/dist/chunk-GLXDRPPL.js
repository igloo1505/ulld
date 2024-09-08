// src/developer/navigationLinkType.ts
import { z } from "zod";
var navigationLinkCategory = z.union([
  z.literal("math"),
  z.literal("snippets"),
  z.literal("code"),
  z.literal("AI"),
  z.literal("ML"),
  z.literal("writing"),
  z.literal("search"),
  z.literal("notebooks"),
  z.literal("database"),
  z.literal("work"),
  z.literal("school"),
  z.literal("organization"),
  z.literal("task-management"),
  z.literal("academic"),
  z.literal("research"),
  z.literal("project-planning"),
  z.literal("calendar"),
  z.literal("general")
]);

export {
  navigationLinkCategory
};
//# sourceMappingURL=chunk-GLXDRPPL.js.map