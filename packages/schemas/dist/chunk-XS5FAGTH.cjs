"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4U2KQM45cjs = require('./chunk-4U2KQM45.cjs');


var _chunkZVLC4XKLcjs = require('./chunk-ZVLC4XKL.cjs');

// src/api/prismaMdxRelations/taskList/todoList/classProps.ts
var _zod = require('zod');
var todoListZodObject = _zod.z.object({
  id: _zod.z.number().int(),
  label: _zod.z.string(),
  tasks: _zod.z.any().array().default([])
}).merge(
  _chunk4U2KQM45cjs.readingListZodObject.pick({
    createdAt: true,
    lastUpdate: true
  })
).merge(_chunkZVLC4XKLcjs.taggableFields);



exports.todoListZodObject = todoListZodObject;
//# sourceMappingURL=chunk-XS5FAGTH.cjs.map