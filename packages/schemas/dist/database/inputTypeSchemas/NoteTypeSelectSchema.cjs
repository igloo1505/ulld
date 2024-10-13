"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NoteTypeSelectSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeSelectSchema_default = NoteTypeSelectSchema;



exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.default = NoteTypeSelectSchema_default;
//# sourceMappingURL=NoteTypeSelectSchema.cjs.map