"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/MdxNoteUpdateimportantValuesInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateimportantValuesInputSchema = _zod.z.object({
  set: _zod.z.number().array().optional(),
  push: _zod.z.union([_zod.z.number(), _zod.z.number().array()]).optional()
}).strict();
var MdxNoteUpdateimportantValuesInputSchema_default = MdxNoteUpdateimportantValuesInputSchema;




exports.MdxNoteUpdateimportantValuesInputSchema = MdxNoteUpdateimportantValuesInputSchema; exports.MdxNoteUpdateimportantValuesInputSchema_default = MdxNoteUpdateimportantValuesInputSchema_default;
//# sourceMappingURL=chunk-S3AMXT2Z.cjs.map