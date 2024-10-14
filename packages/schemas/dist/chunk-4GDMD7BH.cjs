"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTZB4RC6Dcjs = require('./chunk-TZB4RC6D.cjs');


var _chunkSJYOKQRIcjs = require('./chunk-SJYOKQRI.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/KanbanUpdateToOneWithWhereWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanUpdateToOneWithWhereWithoutListsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkSJYOKQRIcjs.KanbanUpdateWithoutListsInputSchema), _zod.z.lazy(() => _chunkTZB4RC6Dcjs.KanbanUncheckedUpdateWithoutListsInputSchema)])
}).strict();
var KanbanUpdateToOneWithWhereWithoutListsInputSchema_default = KanbanUpdateToOneWithWhereWithoutListsInputSchema;




exports.KanbanUpdateToOneWithWhereWithoutListsInputSchema = KanbanUpdateToOneWithWhereWithoutListsInputSchema; exports.KanbanUpdateToOneWithWhereWithoutListsInputSchema_default = KanbanUpdateToOneWithWhereWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-4GDMD7BH.cjs.map