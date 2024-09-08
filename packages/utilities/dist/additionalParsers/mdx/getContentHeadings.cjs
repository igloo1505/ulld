'use strict';

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
var getMarkdownTitleDepth = (val) => {
  return val.indexOf(" ");
};
var parseMarkdownTitle = (s) => {
  let val = s;
  for (const f of funcs) {
    val = f(val);
  }
  return val;
};
var getMarkdownTitleId = (s) => {
  let re = /.*\[\#(?<content>[^\]]*)\]/gm;
  let m = re.exec(s);
  return m?.groups?.content;
};
var getContentHeadings = (rawContent) => {
  let titles = rawContent.split("\n").filter((f) => f.trim().startsWith("#"));
  let items = titles.map((t) => {
    let id = getMarkdownTitleId(t);
    return {
      title: parseMarkdownTitle(t),
      depth: getMarkdownTitleDepth(t),
      url: id ? `#${id}` : ""
    };
  });
  return items;
};

exports.getContentHeadings = getContentHeadings;
exports.getMarkdownTitleId = getMarkdownTitleId;
exports.parseMarkdownTitle = parseMarkdownTitle;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getContentHeadings.cjs.map