"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBTZWBHRFcjs = require('./chunk-BTZWBHRF.cjs');


var _chunkG7GUTUUXcjs = require('./chunk-G7GUTUUX.cjs');


var _chunkLV672WEPcjs = require('./chunk-LV672WEP.cjs');


var _chunkREZCYSUTcjs = require('./chunk-REZCYSUT.cjs');


var _chunkDLFMYUTQcjs = require('./chunk-DLFMYUTQ.cjs');


var _chunkQV56XSUYcjs = require('./chunk-QV56XSUY.cjs');


var _chunkGUMZLG5Jcjs = require('./chunk-GUMZLG5J.cjs');


var _chunkM2TTZGTPcjs = require('./chunk-M2TTZGTP.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/BibUpdateOneWithoutEntriesNestedInputSchema.ts
var _zod = require('zod');
var BibUpdateOneWithoutEntriesNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkQV56XSUYcjs.BibCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkGUMZLG5Jcjs.BibUncheckedCreateWithoutEntriesInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkDLFMYUTQcjs.BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkBTZWBHRFcjs.BibUpsertWithoutEntriesInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkM2TTZGTPcjs.BibWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkG7GUTUUXcjs.BibUpdateToOneWithWhereWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkREZCYSUTcjs.BibUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkLV672WEPcjs.BibUncheckedUpdateWithoutEntriesInputSchema)]).optional()
}).strict();
var BibUpdateOneWithoutEntriesNestedInputSchema_default = BibUpdateOneWithoutEntriesNestedInputSchema;




exports.BibUpdateOneWithoutEntriesNestedInputSchema = BibUpdateOneWithoutEntriesNestedInputSchema; exports.BibUpdateOneWithoutEntriesNestedInputSchema_default = BibUpdateOneWithoutEntriesNestedInputSchema_default;
//# sourceMappingURL=chunk-2IB5TDV3.cjs.map