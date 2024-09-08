'use strict';

var server = require('fumadocs-core/server');

// src/navigation/getTocFromContent.ts

// src/additionalParsers/mdx/getContentHeadings.ts
var removeIdSyntax = (s) => {
  if (s.includes("[#") && s.endsWith("]")) {
    return s.slice(0, s.lastIndexOf("["));
  }
  return s;
};
var removeLeadingPounds = (s) => {
  if (s.startsWith("#")) {
    return removeLeadingPounds(s.slice(1));
  }
  return s;
};
var temporaryReplaceLogoAsTextWithEntry = (s) => {
  let re = /\<LogoAsText[^/]*\/\>/gm;
  return s.replace(re, "ULLD");
};
var replaceCodeStrings = (s) => {
  return s.replaceAll("`", "");
};
var funcs = [
  removeLeadingPounds,
  removeIdSyntax,
  temporaryReplaceLogoAsTextWithEntry,
  replaceCodeStrings
];
var parseMarkdownTitle = (s) => {
  let val = s;
  for (const f of funcs) {
    val = f(val);
  }
  return val;
};

// src/navigation/getTocFromContent.ts
var getLatexTocEntries = (toc = [], content) => {
  let titles = content.split("\n").filter((f) => f.trim().startsWith("#"));
  let t = [];
  if (toc.length !== titles.length) {
    console.error(
      `Found different lengths for the toc. Fumadocs found ${toc.length} entries, and you found ${titles.length}.`
    );
  }
  toc.forEach((entry, i) => {
    const newTitle = titles[i].trim();
    t.push({
      ...entry,
      title: parseMarkdownTitle(newTitle)
      // Removed this. No longer checking for validity and relying only on index. THe validity check was unreliable previously, but if this causes new issues revisit this.
      // let s = Array(entry.depth).fill("#").join("");
      // title: titles[i].startsWith(s) ? parseTitle(newTitle) : entry.title,
    });
  });
  return t;
};
var getTocFromContent = async (content) => {
  let tocItems = await server.getTableOfContents(content);
  return getLatexTocEntries(
    tocItems,
    content
  );
};

exports.getLatexTocEntries = getLatexTocEntries;
exports.getTocFromContent = getTocFromContent;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getTocFromContent.cjs.map