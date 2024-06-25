// @ts-check
// const { ReflectionKind } = require("typedoc");
// const { MarkdownPageEvent } = require("typedoc-plugin-markdown");

// /**
//  * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
//  */
// function load(app) {
//   app.renderer.on(
//     MarkdownPageEvent.BEGIN,
//     /** @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page */
//     (page) => {
//       let date = new Date()
//       /**
//        * Update page.frontmatter object using information from the page model as JSON
//        *
//        * Here if the page is a class, we set the title to the class name
//        */
//       if (page?.model.kind == ReflectionKind.Class) {
//         page.frontmatter = {
//           // spread the existing frontmatter
//           ...page.frontmatter,
//           // e.g add a title
//           title: page.model?.name,
//           updated: `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`,
//         };
//       }
//     }
//   );
// }

// module.exports = { load }
