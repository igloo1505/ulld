"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLV672WEPcjs = require('./chunk-LV672WEP.cjs');


var _chunkREZCYSUTcjs = require('./chunk-REZCYSUT.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/BibUpdateToOneWithWhereWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibUpdateToOneWithWhereWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkREZCYSUTcjs.BibUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkLV672WEPcjs.BibUncheckedUpdateWithoutEntriesInputSchema)])
}).strict();
var BibUpdateToOneWithWhereWithoutEntriesInputSchema_default = BibUpdateToOneWithWhereWithoutEntriesInputSchema;




exports.BibUpdateToOneWithWhereWithoutEntriesInputSchema = BibUpdateToOneWithWhereWithoutEntriesInputSchema; exports.BibUpdateToOneWithWhereWithoutEntriesInputSchema_default = BibUpdateToOneWithWhereWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-G7GUTUUX.cjs.map