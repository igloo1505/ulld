"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFNC37XSIcjs = require('./chunk-FNC37XSI.cjs');


var _chunkDOTAABR4cjs = require('./chunk-DOTAABR4.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/BibUpdateToOneWithWhereWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibUpdateToOneWithWhereWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkDOTAABR4cjs.BibUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkFNC37XSIcjs.BibUncheckedUpdateWithoutEntriesInputSchema)])
}).strict();
var BibUpdateToOneWithWhereWithoutEntriesInputSchema_default = BibUpdateToOneWithWhereWithoutEntriesInputSchema;




exports.BibUpdateToOneWithWhereWithoutEntriesInputSchema = BibUpdateToOneWithWhereWithoutEntriesInputSchema; exports.BibUpdateToOneWithWhereWithoutEntriesInputSchema_default = BibUpdateToOneWithWhereWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-7XIOIJAH.cjs.map