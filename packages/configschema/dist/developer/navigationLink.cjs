'use strict';

var zod = require('zod');

// src/developer/navigationLink.ts
var navigationLinkCategory = zod.z.union([
  zod.z.literal("math"),
  zod.z.literal("snippets"),
  zod.z.literal("code"),
  zod.z.literal("AI"),
  zod.z.literal("ML"),
  zod.z.literal("writing"),
  zod.z.literal("search"),
  zod.z.literal("notebooks"),
  zod.z.literal("database"),
  zod.z.literal("work"),
  zod.z.literal("school"),
  zod.z.literal("organization"),
  zod.z.literal("task-management"),
  zod.z.literal("academic"),
  zod.z.literal("research"),
  zod.z.literal("project-planning"),
  zod.z.literal("calendar"),
  zod.z.literal("general")
]);

// src/developer/navigationLink.ts
var navigationLinkSchema = zod.z.object({
  label: zod.z.string(),
  href: zod.z.string(),
  icon: zod.z.string().optional(),
  pluginName: zod.z.string().optional(),
  category: navigationLinkCategory.default("general")
});

exports.navigationLinkSchema = navigationLinkSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=navigationLink.cjs.map