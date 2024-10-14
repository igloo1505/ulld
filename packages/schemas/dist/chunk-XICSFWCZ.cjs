"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/MdxNoteUpdateoutgoingQuickLinksInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateoutgoingQuickLinksInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var MdxNoteUpdateoutgoingQuickLinksInputSchema_default = MdxNoteUpdateoutgoingQuickLinksInputSchema;




exports.MdxNoteUpdateoutgoingQuickLinksInputSchema = MdxNoteUpdateoutgoingQuickLinksInputSchema; exports.MdxNoteUpdateoutgoingQuickLinksInputSchema_default = MdxNoteUpdateoutgoingQuickLinksInputSchema_default;
//# sourceMappingURL=chunk-XICSFWCZ.cjs.map