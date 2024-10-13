"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBI5QGDEGcjs = require('./chunk-BI5QGDEG.cjs');


var _chunkFVCLRUQWcjs = require('./chunk-FVCLRUQW.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/BibEntryUpdateManyArgsSchema.ts
var _zod = require('zod');
var BibEntryUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkFVCLRUQWcjs.BibEntryUpdateManyMutationInputSchema, _chunkBI5QGDEGcjs.BibEntryUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.BibEntryWhereInputSchema.optional()
}).strict();
var BibEntryUpdateManyArgsSchema_default = BibEntryUpdateManyArgsSchema;




exports.BibEntryUpdateManyArgsSchema = BibEntryUpdateManyArgsSchema; exports.BibEntryUpdateManyArgsSchema_default = BibEntryUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-CZFRNV2J.cjs.map