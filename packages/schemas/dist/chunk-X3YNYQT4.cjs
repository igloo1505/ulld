"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkM66B4AGYcjs = require('./chunk-M66B4AGY.cjs');


var _chunkMKD2LA6Tcjs = require('./chunk-MKD2LA6T.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/DefinitionUpdateManyArgsSchema.ts
var _zod = require('zod');
var DefinitionUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkMKD2LA6Tcjs.DefinitionUpdateManyMutationInputSchema, _chunkM66B4AGYcjs.DefinitionUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.DefinitionWhereInputSchema.optional()
}).strict();
var DefinitionUpdateManyArgsSchema_default = DefinitionUpdateManyArgsSchema;




exports.DefinitionUpdateManyArgsSchema = DefinitionUpdateManyArgsSchema; exports.DefinitionUpdateManyArgsSchema_default = DefinitionUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-X3YNYQT4.cjs.map