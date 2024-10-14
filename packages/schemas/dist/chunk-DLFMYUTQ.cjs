"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQV56XSUYcjs = require('./chunk-QV56XSUY.cjs');


var _chunkGUMZLG5Jcjs = require('./chunk-GUMZLG5J.cjs');


var _chunkM2TTZGTPcjs = require('./chunk-M2TTZGTP.cjs');

// src/database/inputTypeSchemas/BibCreateOrConnectWithoutEntriesInputSchema.ts
var _zod = require('zod');
var BibCreateOrConnectWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkM2TTZGTPcjs.BibWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkQV56XSUYcjs.BibCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkGUMZLG5Jcjs.BibUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var BibCreateOrConnectWithoutEntriesInputSchema_default = BibCreateOrConnectWithoutEntriesInputSchema;




exports.BibCreateOrConnectWithoutEntriesInputSchema = BibCreateOrConnectWithoutEntriesInputSchema; exports.BibCreateOrConnectWithoutEntriesInputSchema_default = BibCreateOrConnectWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-DLFMYUTQ.cjs.map