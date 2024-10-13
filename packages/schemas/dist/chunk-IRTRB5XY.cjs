"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/NoteTypeSchema.ts
var _zod = require('zod');
var NoteTypeSchema = _zod.z.object({
  name: _zod.z.string()
});
var NoteTypePartialSchema = NoteTypeSchema.partial();
var NoteTypeSchema_default = NoteTypeSchema;





exports.NoteTypeSchema = NoteTypeSchema; exports.NoteTypePartialSchema = NoteTypePartialSchema; exports.NoteTypeSchema_default = NoteTypeSchema_default;
//# sourceMappingURL=chunk-IRTRB5XY.cjs.map