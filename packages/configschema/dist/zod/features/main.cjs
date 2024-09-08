'use strict';

var zod = require('zod');

// src/zod/features/main.ts
var featuresConfigSchema = zod.z.object({
  enabled: zod.z.object({
    commandPalette: zod.z.boolean().default(true).describe("Whether or not app should include the command palette feature. This is only made available for the rare instance of breaking bugs within the command palette."),
    tikz: zod.z.boolean().default(true).describe("Whether or not to build with support for the tikz component. To allow drawing diagrams with the tikz latex package's syntax.")
  }).default({
    commandPalette: true,
    tikz: true
  }),
  pages: zod.z.object({
    equations: zod.z.boolean().default(true).describe("Whether or not to generate an 'equations' page to input, store, reference and search equations."),
    snippets: zod.z.boolean().default(true).describe("Whether or not to generate a 'snippets' page to input, store, reference and search equations."),
    calendar: zod.z.boolean().default(true).describe("Whether or not to build a calendar page to integrate Google calendar within ULLD."),
    bibliography: zod.z.boolean().default(true).describe("Whether or not to build a bibliography page to allow the searching, sorting and referencing files and citations related to the apps .bib content."),
    taskManager: zod.z.boolean().default(true).describe("Whether or not to build a 'todo' page to integrate a task manager within the app.")
  })
}).optional();

exports.featuresConfigSchema = featuresConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map