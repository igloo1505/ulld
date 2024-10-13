"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFNC37XSIcjs = require('./chunk-FNC37XSI.cjs');


var _chunkDOTAABR4cjs = require('./chunk-DOTAABR4.cjs');


var _chunk7SNXTVFRcjs = require('./chunk-7SNXTVFR.cjs');


var _chunkTSE7XCT5cjs = require('./chunk-TSE7XCT5.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/BibUpsertWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibUpsertWithoutEntriesInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkDOTAABR4cjs.BibUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkFNC37XSIcjs.BibUncheckedUpdateWithoutEntriesInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunk7SNXTVFRcjs.BibCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkTSE7XCT5cjs.BibUncheckedCreateWithoutEntriesInputSchema)]),
  where: _zod.z.lazy(() => _chunkXQKVAOTYcjs.BibWhereInputSchema).optional()
}).strict();
var BibUpsertWithoutEntriesInputSchema_default = BibUpsertWithoutEntriesInputSchema;




exports.BibUpsertWithoutEntriesInputSchema = BibUpsertWithoutEntriesInputSchema; exports.BibUpsertWithoutEntriesInputSchema_default = BibUpsertWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-SBOXSHOO.cjs.map