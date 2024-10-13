"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/SnippetSelectSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetSelectSchema_default = SnippetSelectSchema;



exports.SnippetSelectSchema = SnippetSelectSchema; exports.default = SnippetSelectSchema_default;
//# sourceMappingURL=SnippetSelectSchema.cjs.map