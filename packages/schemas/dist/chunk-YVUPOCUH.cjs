"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYTOSIBE2cjs = require('./chunk-YTOSIBE2.cjs');


var _chunk6UEHU4KZcjs = require('./chunk-6UEHU4KZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutKanbanInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk6UEHU4KZcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkYTOSIBE2cjs.TagUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutKanbanInputSchema_default = TagUpdateManyWithWhereWithoutKanbanInputSchema;




exports.TagUpdateManyWithWhereWithoutKanbanInputSchema = TagUpdateManyWithWhereWithoutKanbanInputSchema; exports.TagUpdateManyWithWhereWithoutKanbanInputSchema_default = TagUpdateManyWithWhereWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-YVUPOCUH.cjs.map