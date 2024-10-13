"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFBONB66Kcjs = require('./chunk-FBONB66K.cjs');

// src/database/outputTypeSchemas/DietaryItemCreateManyArgsSchema.ts
var _zod = require('zod');
var DietaryItemCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkFBONB66Kcjs.DietaryItemCreateManyInputSchema, _chunkFBONB66Kcjs.DietaryItemCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DietaryItemCreateManyArgsSchema_default = DietaryItemCreateManyArgsSchema;




exports.DietaryItemCreateManyArgsSchema = DietaryItemCreateManyArgsSchema; exports.DietaryItemCreateManyArgsSchema_default = DietaryItemCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-L7KZGOE2.cjs.map