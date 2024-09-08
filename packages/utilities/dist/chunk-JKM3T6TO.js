import axios from 'axios';

// src/utils/fsUtils.ts
var withForwardSlash = (p) => p.startsWith("/") ? p : `/${p}`;
var withForwardSlashOptional = (p) => typeof p === "undefined" ? void 0 : withForwardSlash(p);
var noTrailingSlash = (p) => p.endsWith("/") ? p.slice(0, p.length - 1) : p;
var withTrailingSlash = (p) => p.endsWith("/") ? p : `${p}/`;
var makeHref = (s) => {
  if (/^http(s?):\/\//gm.test(s)) {
    return s;
  }
  if (typeof window === "undefined") {
    return s;
  }
  let isHttps = window?.location?.href.startsWith("http") ? window.location.href.startsWith("https") : process.env.NEXT_PUBLIC_PRODUCTION_REMOTE;
  return `${isHttps ? "https" : "http"}://${s}`;
};
var noLeadingSlash = (p) => p.startsWith("/") ? p.slice(1, p.length) : p;
var setSlashes = ({
  value,
  leading,
  trailing
}) => {
  let v = value;
  v = leading ? withForwardSlash(v) : noLeadingSlash(v);
  v = trailing ? withTrailingSlash(v) : noTrailingSlash(v);
  return v;
};
var parentDir = (p) => p.indexOf("/") >= 0 ? p.slice(0, p.lastIndexOf("/")) : p;
var getFilenameFromString = (p) => p.indexOf("/") === -1 ? p : p.slice(p.lastIndexOf("/") + 1, p.length);
var ensureRootRelative = (p, fsRoot) => withForwardSlash(p.indexOf(fsRoot) === -1 ? p : p.split(fsRoot)[1]);
var ensureAbsolute = (p, fsRoot) => {
  return p.includes(fsRoot) ? p : `${fsRoot}${setSlashes({ value: p, leading: true, trailing: false })}`;
};
var getParentDirAndFilename = (p, ensureRootRelativeParent = true, fsRoot) => {
  return {
    parent: ensureRootRelativeParent ? ensureRootRelative(parentDir(p), fsRoot) : parentDir(p),
    filename: getFilenameFromString(p)
  };
};
var fileExtension = (path) => {
  return path.split(".").at(-1);
};
var replacePrefix = (content, regex, replaceWith = "") => {
  return content.startsWith(regex) ? `${replaceWith}${content.split(regex)[1]}` : content;
};
var replaceAppendix = (content, regex, replaceWith = "") => {
  return content.endsWith(regex) ? `${content.slice(0, content.length - regex.length)}${replaceWith}` : content;
};
var getFsRootGlob = async (props) => {
  try {
    let res = await axios.post("/api/glob", props);
    if (res.data.filePaths) {
      return res.data.filePaths;
    }
  } catch (err) {
    console.error(err);
  }
};

export { ensureAbsolute, ensureRootRelative, fileExtension, getFilenameFromString, getFsRootGlob, getParentDirAndFilename, makeHref, noLeadingSlash, noTrailingSlash, parentDir, replaceAppendix, replacePrefix, setSlashes, withForwardSlash, withForwardSlashOptional, withTrailingSlash };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-JKM3T6TO.js.map