"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEQYI3JD3cjs = require('./chunk-EQYI3JD3.cjs');

// src/database/inputTypeSchemas/BibCreateInputSchema.ts
var _zod = require('zod');
var BibCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  filename: _zod.z.string(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional(),
  entries: _zod.z.lazy(() => _chunkEQYI3JD3cjs.BibEntryCreateNestedManyWithoutBibInputSchema).optional()
}).strict();
var BibCreateInputSchema_default = BibCreateInputSchema;




exports.BibCreateInputSchema = BibCreateInputSchema; exports.BibCreateInputSchema_default = BibCreateInputSchema_default;
//# sourceMappingURL=chunk-IZU26MLD.cjs.map