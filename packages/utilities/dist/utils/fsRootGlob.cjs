'use strict';

var enums = require('@ulld/types/enums');
require('server-only');
var glob = require('glob');
var fs = require('fs');
var path = require('path');
var zod = require('zod');
require('axios');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);

// src/utils/fsRootGlob.ts

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
var filePathGlobPropsSchema = zod.z.object({
  glob: zod.z.string().default("**/*").transform((x) => x.startsWith("/") ? x.slice(1) : x),
  type: zod.z.union([zod.z.literal("dirs"), zod.z.literal("files"), zod.z.literal("dirsAndFiles")]).default("files"),
  ignore: zod.z.union([zod.z.string(), zod.z.string().array()]).nullish(),
  returnAs: zod.z.union([zod.z.literal("absolute"), zod.z.literal("rootRelative")]).default("absolute")
});
var withForwardSlash = (p) => p.startsWith("/") ? p : `/${p}`;

// src/utils/glob/getGlobServerSide.ts
var getGlobServerSide = async (props, appConfig) => {
  let input = filePathGlobPropsSchema.parse(props);
  let res = await glob.glob(
    input.glob,
    {
      cwd: appConfig.fsRoot,
      ignore: input.ignore || void 0,
      nodir: input.type === "files"
    }
  );
  let returnAbsolute = input.returnAs === "absolute";
  if (returnAbsolute) {
    res = res.map((x) => path__default.default.join(appConfig.fsRoot, x));
  } else {
    res = res.map((x) => withForwardSlash(x));
  }
  if (input.type === "dirs") {
    res = res.filter(
      (x) => fs__default.default.statSync(returnAbsolute ? x : path__default.default.join(appConfig.fsRoot, x)).isDirectory()
    );
  }
  return res;
};

// src/utils/fsRootGlob.ts
var FsRootGlob = class {
  constructor(props) {
    this.props = props;
  }
  formatFileTypeArrayGlobPattern(fts) {
    return `{${fts.join(",")}}`;
  }
  getGlobPattern(defaultOpts) {
    let fts = this.props.fileTypes ? ArrayUtilities.beArray(this.props.fileTypes) : enums.supportedFileTypes;
    return `${this.props.path}.${this.formatFileTypeArrayGlobPattern(fts)}`;
  }
  getFetchOpts(defaultOpts) {
    return {
      type: "files",
      glob: this.getGlobPattern(),
      ...defaultOpts
    };
  }
  // TODO: Add method here to sort these results by the file types preffered order in the appConfig.
  sortResults(vals) {
    return vals;
  }
  async getFileMatches(appConfig, opts) {
    let res = await getGlobServerSide(this.getFetchOpts(opts), appConfig);
    return res ? this.sortResults(res) : [];
  }
};

exports.FsRootGlob = FsRootGlob;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=fsRootGlob.cjs.map