import { ArrayUtilities } from '../chunk-JEBMZLDZ.js';
import '../chunk-F3FYYIAV.js';

// src/utils/searchUtils.ts
var getFirstLetterWithLatex = (value) => {
  return value.replaceAll(/\\|\:|\-|\=|\_/gm, "")[0];
};
var getSearchType = (sp) => {
  if (sp.equationId) {
    return "byEquation";
  }
  if (sp.sequentialId) {
    return "bySequentialId";
  }
  if (sp.tags && sp.tags.length) {
    return "byTag";
  }
  return "searchAll";
};
var searchAllParamsToSearchParamsClass = (sp) => {
  let data = new URLSearchParams();
  if (!sp) {
    return data;
  }
  if (sp.query) {
    data.set("query", sp.query);
  }
  if (sp.page || typeof sp.page === "number") {
    data.set("page", sp.page);
  }
  if (sp.tags) {
    for (const t of ArrayUtilities.beArray(sp.tags)) {
      data.append("tags", t);
    }
  }
  if (sp.take) {
    data.set("take", sp.take);
  }
  if (sp.remote) {
    data.set("remote", "true");
  }
  if (sp.topics) {
    for (const t of ArrayUtilities.beArray(sp.topics)) {
      data.append("topics", t);
    }
  }
  if (sp.subjects) {
    for (const t of ArrayUtilities.beArray(sp.subjects)) {
      data.append("subjects", t);
    }
  }
  if (sp.perPage) {
    data.set("perPage", sp.perPage);
  }
  if (sp.tagRegex) {
    for (const t of ArrayUtilities.beArray(sp.tagRegex)) {
      data.append("tagRegex", t.source);
    }
  }
  if (sp.citations) {
    for (const c of ArrayUtilities.beArray(sp.citations)) {
      data.append("citations", c);
    }
  }
  if (sp.categories) {
    for (const t of ArrayUtilities.beArray(sp.categories)) {
      data.append("categories", t);
    }
  }
  if (sp.sequentialId) {
    data.set("sequentialId", sp.sequentialId);
  }
  if (sp.equationId) {
    data.set("equationId", sp.equationId);
  }
  return data;
};
var getTaggablesFromSearchAllParams = (sp) => {
  return {
    tags: sp.tags || [],
    topics: sp.topics || [],
    subjects: sp.subjects || []
  };
};
var clearNullSearchParams = (p) => {
  for (const k of p.keys()) {
    let val = p.get(k);
    if (!val) {
      p.delete(k);
    }
  }
  return p;
};

export { clearNullSearchParams, getFirstLetterWithLatex, getSearchType, getTaggablesFromSearchAllParams, searchAllParamsToSearchParamsClass };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=searchUtils.js.map