"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXXCDDULDcjs = require('./chunk-XXCDDULD.cjs');


var _chunkO36HWGOTcjs = require('./chunk-O36HWGOT.cjs');


var _chunkZ425KUN2cjs = require('./chunk-Z425KUN2.cjs');

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutKanbanInputSchema.ts
var _zod = require('zod');
var TagUpdateManyWithWhereWithoutKanbanInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkO36HWGOTcjs.TagScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZ425KUN2cjs.TagUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkXXCDDULDcjs.TagUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutKanbanInputSchema_default = TagUpdateManyWithWhereWithoutKanbanInputSchema;




exports.TagUpdateManyWithWhereWithoutKanbanInputSchema = TagUpdateManyWithWhereWithoutKanbanInputSchema; exports.TagUpdateManyWithWhereWithoutKanbanInputSchema_default = TagUpdateManyWithWhereWithoutKanbanInputSchema_default;
//# sourceMappingURL=chunk-DKLU22JM.cjs.map