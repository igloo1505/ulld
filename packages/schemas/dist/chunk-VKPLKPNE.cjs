"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk234AF5YFcjs = require('./chunk-234AF5YF.cjs');

// src/database/inputTypeSchemas/BibUncheckedCreateInputSchema.ts
var _zod = require('zod');
var BibUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  filename: _zod.z.string(),
  firstSync: _zod.z.coerce.date().optional(),
  lastSync: _zod.z.coerce.date().optional(),
  entries: _zod.z.lazy(() => _chunk234AF5YFcjs.BibEntryUncheckedCreateNestedManyWithoutBibInputSchema).optional()
}).strict();
var BibUncheckedCreateInputSchema_default = BibUncheckedCreateInputSchema;




exports.BibUncheckedCreateInputSchema = BibUncheckedCreateInputSchema; exports.BibUncheckedCreateInputSchema_default = BibUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-VKPLKPNE.cjs.map