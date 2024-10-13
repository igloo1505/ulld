"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BibUncheckedCreateWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibUncheckedCreateWithoutEntriesInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  filename: _zod.z.string(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional()
}).strict();
var BibUncheckedCreateWithoutEntriesInputSchema_default = BibUncheckedCreateWithoutEntriesInputSchema;




exports.BibUncheckedCreateWithoutEntriesInputSchema = BibUncheckedCreateWithoutEntriesInputSchema; exports.BibUncheckedCreateWithoutEntriesInputSchema_default = BibUncheckedCreateWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-TSE7XCT5.cjs.map