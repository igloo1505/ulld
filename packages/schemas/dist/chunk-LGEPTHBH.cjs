"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BibCreateManyInputSchema.ts
var _zod = require('zod');
var BibCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  filename: _zod.z.string(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional()
}).strict();
var BibCreateManyInputSchema_default = BibCreateManyInputSchema;




exports.BibCreateManyInputSchema = BibCreateManyInputSchema; exports.BibCreateManyInputSchema_default = BibCreateManyInputSchema_default;
//# sourceMappingURL=chunk-LGEPTHBH.cjs.map