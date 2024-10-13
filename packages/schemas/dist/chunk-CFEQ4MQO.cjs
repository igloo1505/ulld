"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6NH63TVScjs = require('./chunk-6NH63TVS.cjs');


var _chunkH55OC673cjs = require('./chunk-H55OC673.cjs');


var _chunkWKAU5QB7cjs = require('./chunk-WKAU5QB7.cjs');

// src/database/outputTypeSchemas/DJTUpdateManyArgsSchema.ts
var _zod = require('zod');
var DJTUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkH55OC673cjs.DJTUpdateManyMutationInputSchema, _chunk6NH63TVScjs.DJTUncheckedUpdateManyInputSchema]),
  where: _chunkWKAU5QB7cjs.DJTWhereInputSchema.optional()
}).strict();
var DJTUpdateManyArgsSchema_default = DJTUpdateManyArgsSchema;




exports.DJTUpdateManyArgsSchema = DJTUpdateManyArgsSchema; exports.DJTUpdateManyArgsSchema_default = DJTUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-CFEQ4MQO.cjs.map