"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXS5FAGTHcjs = require('./chunk-XS5FAGTH.cjs');


var _chunkZVLC4XKLcjs = require('./chunk-ZVLC4XKL.cjs');


var _chunkHFGI5CVIcjs = require('./chunk-HFGI5CVI.cjs');

// src/api/prismaMdxRelations/taskList/todo/classProps.ts
var _zod = require('zod');
var _toDoStatusData = require('@ulld/utilities/toDoStatusData');
var _internalDatabaseTypes = require('@ulld/database/internalDatabaseTypes');
var todoTaskZodObject = _zod.z.object({
  id: _zod.z.number().int(),
  createdAt: _zod.z.union([_zod.z.string().datetime(), _zod.z.date()]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform),
  task: _zod.z.string(),
  dueAt: _zod.z.union([_zod.z.string().datetime(), _zod.z.date()]).nullish().transform(_chunkHFGI5CVIcjs.dateTimeStringTransform),
  details: _zod.z.string().nullish(),
  associatedNotes: _zod.z.any().array().default([]),
  parentId: _zod.z.number().int().nullish(),
  category: _zod.z.nativeEnum(_internalDatabaseTypes.TaskCategory),
  bookmarked: _zod.z.boolean().default(false),
  status: _zod.z.enum(_toDoStatusData.toDoItemStatuses),
  priority: _zod.z.number().min(0).max(10),
  parent: _zod.z.any().nullish().default(null),
  child: _zod.z.any().nullish().default(null),
  ToDoList: _chunkXS5FAGTHcjs.todoListZodObject,
  toDoListId: _zod.z.number().int()
}).merge(_chunkZVLC4XKLcjs.taggableFields);



exports.todoTaskZodObject = todoTaskZodObject;
//# sourceMappingURL=chunk-B3DHHFFO.cjs.map