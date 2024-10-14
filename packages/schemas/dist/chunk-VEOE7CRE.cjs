"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4G6ZO6VUcjs = require('./chunk-4G6ZO6VU.cjs');


var _chunkEIHZIXO2cjs = require('./chunk-EIHZIXO2.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/DefinitionUpdateManyArgsSchema.ts
var _zod = require('zod');
var DefinitionUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkEIHZIXO2cjs.DefinitionUpdateManyMutationInputSchema, _chunk4G6ZO6VUcjs.DefinitionUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.DefinitionWhereInputSchema.optional()
}).strict();
var DefinitionUpdateManyArgsSchema_default = DefinitionUpdateManyArgsSchema;




exports.DefinitionUpdateManyArgsSchema = DefinitionUpdateManyArgsSchema; exports.DefinitionUpdateManyArgsSchema_default = DefinitionUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-VEOE7CRE.cjs.map