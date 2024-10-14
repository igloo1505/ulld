"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5IEER5MZcjs = require('./chunk-5IEER5MZ.cjs');


var _chunk7677ZGKHcjs = require('./chunk-7677ZGKH.cjs');


var _chunkRT3WXQAZcjs = require('./chunk-RT3WXQAZ.cjs');

// src/database/outputTypeSchemas/WhiteboardUpdateManyArgsSchema.ts
var _zod = require('zod');
var WhiteboardUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk5IEER5MZcjs.WhiteboardUpdateManyMutationInputSchema, _chunk7677ZGKHcjs.WhiteboardUncheckedUpdateManyInputSchema]),
  where: _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema.optional()
}).strict();
var WhiteboardUpdateManyArgsSchema_default = WhiteboardUpdateManyArgsSchema;




exports.WhiteboardUpdateManyArgsSchema = WhiteboardUpdateManyArgsSchema; exports.WhiteboardUpdateManyArgsSchema_default = WhiteboardUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-3HKJEP6F.cjs.map