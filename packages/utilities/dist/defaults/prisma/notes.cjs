'use strict';

// src/defaults/prisma/notes.ts
var defaultFindRemoteMdxArgs = {
  include: {
    tags: true,
    subjects: true,
    citations: {
      select: {
        id: true,
        htmlCitation: true
      }
    },
    definitions: true,
    topics: true
  }
};

exports.defaultFindRemoteMdxArgs = defaultFindRemoteMdxArgs;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=notes.cjs.map