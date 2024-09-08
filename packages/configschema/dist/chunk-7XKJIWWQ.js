import { z } from 'zod';

// src/zod/features/main.ts
var featuresConfigSchema = z.object({
  enabled: z.object({
    commandPalette: z.boolean().default(true).describe("Whether or not app should include the command palette feature. This is only made available for the rare instance of breaking bugs within the command palette."),
    tikz: z.boolean().default(true).describe("Whether or not to build with support for the tikz component. To allow drawing diagrams with the tikz latex package's syntax.")
  }).default({
    commandPalette: true,
    tikz: true
  }),
  pages: z.object({
    equations: z.boolean().default(true).describe("Whether or not to generate an 'equations' page to input, store, reference and search equations."),
    snippets: z.boolean().default(true).describe("Whether or not to generate a 'snippets' page to input, store, reference and search equations."),
    calendar: z.boolean().default(true).describe("Whether or not to build a calendar page to integrate Google calendar within ULLD."),
    bibliography: z.boolean().default(true).describe("Whether or not to build a bibliography page to allow the searching, sorting and referencing files and citations related to the apps .bib content."),
    taskManager: z.boolean().default(true).describe("Whether or not to build a 'todo' page to integrate a task manager within the app.")
  })
}).optional();

export { featuresConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-7XKJIWWQ.js.map