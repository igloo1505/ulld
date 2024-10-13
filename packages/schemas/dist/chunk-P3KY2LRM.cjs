"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRXOGSTKAcjs = require('./chunk-RXOGSTKA.cjs');


var _chunkWIHJXK4Pcjs = require('./chunk-WIHJXK4P.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/BibUpdateManyArgsSchema.ts
var _zod = require('zod');
var BibUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRXOGSTKAcjs.BibUpdateManyMutationInputSchema, _chunkWIHJXK4Pcjs.BibUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.BibWhereInputSchema.optional()
}).strict();
var BibUpdateManyArgsSchema_default = BibUpdateManyArgsSchema;




exports.BibUpdateManyArgsSchema = BibUpdateManyArgsSchema; exports.BibUpdateManyArgsSchema_default = BibUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-P3KY2LRM.cjs.map