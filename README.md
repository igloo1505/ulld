# Uh Little Less Dum

_Forever free, perpetually open source note taking._

- [x] Write your notes in modern markdown, [mdx](https://mdxjs.com). All of the simplicity of markdown with the ability to embed entire react components.
- [x] Take advantage of mdx by embedding:
  - [x] Videos with the ability to link to specific time stamps elsewhere in your notes.
  - [x] Images through a vastly extended Image component, while still supporting the native markdown image syntax.
  - [x] Interactive tabular data in table form
  - [x] Interactive, 2d and 3d plots (Rewrite in progress. Currently in beta but will be available in the coming weeks)
  - [x] Juyter cells
  - [x] Pdf's
  - [ ] Interactive modals, sidebars and more.
- [x] An integrated bibliography manager with search functionality and the ability to link directly to PDFs.
- [x] An integrated snippets database
- [x] An integrated equations database with added support for embedding, searching by equation, linking snippets to equations and more.
- [x] Jupyter cells and notebooks, either embedded within a mdx note or as a standalone component.
- [x] Pdf's, both embedded directly within a note or as a standalone component with support for multiple views
  - [ ] While linking an mdx note to a PDF is currently very straightforward, an improved annotation experience is planned for the near future.
- [x] During the conversion of this framework from a personal tool to an open sources framework, my focus was on the ease of extensibility. Anyone familiar with React, Node, or even just Css can extend this app by creating their own plugin, and simplying adding that plugin to their configuration file. Developers can add:
  - [ ] Embeddable components
  - [ ] Slot components (Override existing components that appear elsewhere in the app, outside of a user's note)
  - [ ] Command palette actions
  - [ ] Parsers to extend the syntax of Mdx
  - [ ] And much more! Because all components are rendered on the server by default, adding your own server-side related features are as simple as creating a React server component.

Learn more by visiting our website at [UhLittleLessDum.com](https://uhlittlelessdum.com), and if you're curious, check out my notes on the model that inspired this application as part of the demo for this application [here](https://uhlittlelessdum.com/myWork).
