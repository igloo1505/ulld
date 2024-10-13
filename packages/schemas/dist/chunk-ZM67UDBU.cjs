"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/MdxNoteUpdatecitationsListOrderInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdatecitationsListOrderInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var MdxNoteUpdatecitationsListOrderInputSchema_default = MdxNoteUpdatecitationsListOrderInputSchema;




exports.MdxNoteUpdatecitationsListOrderInputSchema = MdxNoteUpdatecitationsListOrderInputSchema; exports.MdxNoteUpdatecitationsListOrderInputSchema_default = MdxNoteUpdatecitationsListOrderInputSchema_default;
//# sourceMappingURL=chunk-ZM67UDBU.cjs.map