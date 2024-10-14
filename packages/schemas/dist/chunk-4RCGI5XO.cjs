"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3EAHHQ7Ycjs = require('./chunk-3EAHHQ7Y.cjs');


var _chunkOAHVAABOcjs = require('./chunk-OAHVAABO.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/TopicUpdateManyArgsSchema.ts
var _zod = require('zod');
var TopicUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkOAHVAABOcjs.TopicUpdateManyMutationInputSchema, _chunk3EAHHQ7Ycjs.TopicUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.TopicWhereInputSchema.optional()
}).strict();
var TopicUpdateManyArgsSchema_default = TopicUpdateManyArgsSchema;




exports.TopicUpdateManyArgsSchema = TopicUpdateManyArgsSchema; exports.TopicUpdateManyArgsSchema_default = TopicUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-4RCGI5XO.cjs.map