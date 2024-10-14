"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLV672WEPcjs = require('./chunk-LV672WEP.cjs');


var _chunkREZCYSUTcjs = require('./chunk-REZCYSUT.cjs');


var _chunkQV56XSUYcjs = require('./chunk-QV56XSUY.cjs');


var _chunkGUMZLG5Jcjs = require('./chunk-GUMZLG5J.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/BibUpsertWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibUpsertWithoutEntriesInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkREZCYSUTcjs.BibUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkLV672WEPcjs.BibUncheckedUpdateWithoutEntriesInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkQV56XSUYcjs.BibCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkGUMZLG5Jcjs.BibUncheckedCreateWithoutEntriesInputSchema)]),
  where: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema).optional()
}).strict();
var BibUpsertWithoutEntriesInputSchema_default = BibUpsertWithoutEntriesInputSchema;




exports.BibUpsertWithoutEntriesInputSchema = BibUpsertWithoutEntriesInputSchema; exports.BibUpsertWithoutEntriesInputSchema_default = BibUpsertWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-BTZWBHRF.cjs.map