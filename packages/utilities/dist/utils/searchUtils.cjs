'use strict';

// src/utils/arrayUtilities.ts
var _ArrayUtilities = class _ArrayUtilities {
  constructor() {
  }
  static itemFromListWithLoop(list, index) {
    if (index < list.length - 1) {
      return list[index];
    }
    return list[index % list.length];
  }
  static listFromListWithLoop(list, take) {
    let items = [];
    for (var i = 0; i < take; i++) {
      items.push(_ArrayUtilities.itemFromListWithLoop(list, i));
    }
    return items;
  }
  // TODO: Look up how to type n-dimensional arrays and apply that everywhere this is called
  static meshGrid(N, dimensions) {
    let d = N;
    let l = 0;
    let b = [];
    for (var i = 0; i < dimensions - 1; i++) {
      let a = d.flat(dimensions).map(() => N);
      do {
        let j = a.slice(l, l + N.length);
        if (j.length > 0) {
          b.length > 0 ? b.push(j) : b = j;
        }
        l += N.length;
      } while (l < a.length - N.length);
    }
    return b;
  }
  static randomFromList(list) {
    list[Math.floor(Math.random() * list.length)];
  }
  static compute1DIfNotNull(f, axisData) {
    let values = [[], []];
    axisData.forEach((n) => {
      let val = f(n);
      if (n) {
        values[0].push(n);
        values[1].push(val);
      }
    });
    return values;
  }
  static generateData(func) {
    let data = [];
    for (let i = -200; i <= 200; i += 0.1) {
      data.push([i, func(i)]);
    }
    return data;
  }
  static doesOverlap(a, b, caseInsensitive = false) {
    if (caseInsensitive) {
      a = a.map((s) => s.toLowerCase());
    }
    for (var i = 0; i < b.length; i++) {
      if (a.indexOf(caseInsensitive ? b[i].toLowerCase() : b[i]) >= 0)
        return true;
    }
    return false;
  }
  static containsAll(a, b) {
    for (var i = 0; i < b.length; i++) {
      if (a.indexOf(b[i]) === -1)
        return false;
    }
    return true;
  }
  static arrayTruthy(a) {
    Boolean(Array.isArray(a) && a.length > 0);
  }
  static arrayOrItem(a, validate = "arrayIfMoreThanOne") {
    if (!a)
      return validate === "alwaysReturnArray" ? [] : null;
    if (validate === "alwaysReturnArray")
      return Array.isArray(a) ? a : [a];
    if (Array.isArray(a)) {
      if (validate === "arrayIfMoreThanOne")
        return a;
      if (validate === "firstIfMoreThanOne")
        return a[0];
      if (validate === "nullIfMoreThanOne")
        return a.length === 1 ? a[0] : null;
      if (validate === "arrayIfExists")
        return a;
    }
    return validate === "arrayIfExists" ? [a] : a;
  }
  static arrayStrictBoolean(a) {
    return Array.isArray(a) && a.length > 0;
  }
  static arange(start = 0, end = 10, diff = 1) {
    let data = [start];
    do {
      data.push(data[data.length - 1] + diff);
    } while (data[data.length - 1] + diff <= end);
    return data;
  }
  static stringArrayToTagSubjectOrTopicConnectOrCreate(items) {
    return items.map((t) => ({
      where: {
        value: t
      },
      create: {
        value: t
      }
    }));
  }
  static fieldArrayIsSame(a, k) {
    if (!a.length)
      return;
    let first = a[0].getValue(k);
    return a.every((l) => l.getValue(k) === first) ? first : void 0;
  }
  static toggleItemInArray(items, val, tester, mapAdjustment) {
    let _items = mapAdjustment ? items.map(mapAdjustment) : items;
    return _items.includes(mapAdjustment ? mapAdjustment(val) : val) ? items.filter((a) => {
      if (mapAdjustment) {
        return mapAdjustment(a) !== mapAdjustment(val);
      } else {
        return a !== val;
      }
    }) : [...items, val];
  }
  static replaceSelfInArray(arr, comparison, equalityCheck, replacer) {
    return arr.map((a) => equalityCheck(a) === comparison ? replacer(a) : a);
  }
  static beArray(val) {
    return Array.isArray(val) ? val : [val];
  }
  static concatWithoutDuplicates(initial, additional, comparer) {
    let items = initial;
    for (const item of additional) {
      if (comparer && !items.some((x) => comparer(x, item))) {
        items.push(item);
      } else {
        if (!items.includes(item)) {
          items.push(item);
        }
      }
    }
    return items;
  }
  static sliceAroundIndex(data, targetIndex, maxItems) {
    let items = [data[targetIndex]];
    let i = 1;
    let shouldRun = true;
    do {
      if (items.length <= targetIndex + i) {
        items.push(data[targetIndex + i]);
      }
      if (items.length < maxItems && targetIndex - i >= 0) {
        items.push(data[targetIndex - i]);
      }
      if (items.length < maxItems && (i + 1 + targetIndex < data.length || targetIndex - (i + 1) > 0)) {
        i++;
      } else {
        shouldRun = false;
      }
    } while (shouldRun);
    return items;
  }
  static clampInArray(arr, index) {
    return index >= arr.length ? arr[index % arr.length] : arr[index];
  }
  static concatWithOptionalArray(arr, newArray) {
    return (arr || []).concat(newArray);
  }
};
_ArrayUtilities.asArray = (a) => Boolean(a) ? Array.isArray(a) ? a : [a] : [];
var ArrayUtilities = _ArrayUtilities;

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

exports.clearNullSearchParams = clearNullSearchParams;
exports.getFirstLetterWithLatex = getFirstLetterWithLatex;
exports.getSearchType = getSearchType;
exports.getTaggablesFromSearchAllParams = getTaggablesFromSearchAllParams;
exports.searchAllParamsToSearchParamsClass = searchAllParamsToSearchParamsClass;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=searchUtils.cjs.map