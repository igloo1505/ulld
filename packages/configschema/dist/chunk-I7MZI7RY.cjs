"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/features/main.ts
var _zod = require('zod');
var featuresConfigSchema = _zod.z.object({
  enabled: _zod.z.object({
    commandPalette: _zod.z.boolean().default(true).describe("Whether or not app should include the command palette feature. This is only made available for the rare instance of breaking bugs within the command palette."),
    tikz: _zod.z.boolean().default(true).describe("Whether or not to build with support for the tikz component. To allow drawing diagrams with the tikz latex package's syntax.")
  }).default({
    commandPalette: true,
    tikz: true
  }),
  pages: _zod.z.object({
    equations: _zod.z.boolean().default(true).describe("Whether or not to generate an 'equations' page to input, store, reference and search equations."),
    snippets: _zod.z.boolean().default(true).describe("Whether or not to generate a 'snippets' page to input, store, reference and search equations."),
    calendar: _zod.z.boolean().default(true).describe("Whether or not to build a calendar page to integrate Google calendar within ULLD."),
    bibliography: _zod.z.boolean().default(true).describe("Whether or not to build a bibliography page to allow the searching, sorting and referencing files and citations related to the apps .bib content."),
    taskManager: _zod.z.boolean().default(true).describe("Whether or not to build a 'todo' page to integrate a task manager within the app.")
  })
}).optional();



exports.featuresConfigSchema = featuresConfigSchema;
//# sourceMappingURL=chunk-I7MZI7RY.cjs.map