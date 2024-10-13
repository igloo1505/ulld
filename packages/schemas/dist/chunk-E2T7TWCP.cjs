"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFBONB66Kcjs = require('./chunk-FBONB66K.cjs');

// src/database/outputTypeSchemas/DietaryItemCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DietaryItemCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkFBONB66Kcjs.DietaryItemCreateManyInputSchema, _chunkFBONB66Kcjs.DietaryItemCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DietaryItemCreateManyAndReturnArgsSchema_default = DietaryItemCreateManyAndReturnArgsSchema;




exports.DietaryItemCreateManyAndReturnArgsSchema = DietaryItemCreateManyAndReturnArgsSchema; exports.DietaryItemCreateManyAndReturnArgsSchema_default = DietaryItemCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-E2T7TWCP.cjs.map