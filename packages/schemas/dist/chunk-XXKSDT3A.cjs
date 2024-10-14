"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDLFMYUTQcjs = require('./chunk-DLFMYUTQ.cjs');


var _chunkQV56XSUYcjs = require('./chunk-QV56XSUY.cjs');


var _chunkGUMZLG5Jcjs = require('./chunk-GUMZLG5J.cjs');


var _chunkM2TTZGTPcjs = require('./chunk-M2TTZGTP.cjs');

// src/database/inputTypeSchemas/BibCreateNestedOneWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibCreateNestedOneWithoutEntriesInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkQV56XSUYcjs.BibCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkGUMZLG5Jcjs.BibUncheckedCreateWithoutEntriesInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkDLFMYUTQcjs.BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkM2TTZGTPcjs.BibWhereUniqueInputSchema).optional()
}).strict();
var BibCreateNestedOneWithoutEntriesInputSchema_default = BibCreateNestedOneWithoutEntriesInputSchema;




exports.BibCreateNestedOneWithoutEntriesInputSchema = BibCreateNestedOneWithoutEntriesInputSchema; exports.BibCreateNestedOneWithoutEntriesInputSchema_default = BibCreateNestedOneWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-XXKSDT3A.cjs.map