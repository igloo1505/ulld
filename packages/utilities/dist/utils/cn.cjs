'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

// src/utils/cn.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var cn_default = cn;

exports.cn = cn;
exports.default = cn_default;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=cn.cjs.map