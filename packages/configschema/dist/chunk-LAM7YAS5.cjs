"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/navigationLinkType.ts
var _zod = require('zod');
var navigationLinkCategory = _zod.z.union([
  _zod.z.literal("math"),
  _zod.z.literal("snippets"),
  _zod.z.literal("code"),
  _zod.z.literal("AI"),
  _zod.z.literal("ML"),
  _zod.z.literal("writing"),
  _zod.z.literal("search"),
  _zod.z.literal("notebooks"),
  _zod.z.literal("database"),
  _zod.z.literal("work"),
  _zod.z.literal("school"),
  _zod.z.literal("organization"),
  _zod.z.literal("task-management"),
  _zod.z.literal("academic"),
  _zod.z.literal("research"),
  _zod.z.literal("project-planning"),
  _zod.z.literal("calendar"),
  _zod.z.literal("general")
]);



exports.navigationLinkCategory = navigationLinkCategory;
//# sourceMappingURL=chunk-LAM7YAS5.cjs.map