"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BibCreateWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibCreateWithoutEntriesInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  filename: _zod.z.string(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional()
}).strict();
var BibCreateWithoutEntriesInputSchema_default = BibCreateWithoutEntriesInputSchema;




exports.BibCreateWithoutEntriesInputSchema = BibCreateWithoutEntriesInputSchema; exports.BibCreateWithoutEntriesInputSchema_default = BibCreateWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-7SNXTVFR.cjs.map