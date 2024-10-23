'use strict';

var c = require('react');
var i = require('ink-multi-select');
var internalDataHelpers = require('@ulld/utilities/internalDataHelpers');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var c__default = /*#__PURE__*/_interopDefault(c);
var i__default = /*#__PURE__*/_interopDefault(i);

var u={package:internalDataHelpers.getInternalPackageNames,app:internalDataHelpers.getInternalAppNames,both:internalDataHelpers.getAllInternalNames},o=({type:s="both"})=>{let [m,g]=c.useState(new Set([])),l=c.useMemo(()=>{let e=[],a=[],n=u[s]();for(let t of n)m.has(t)?a.push({label:t,value:t}):e.push({label:t,value:t});return {listedItems:e,selectedItems:a}},[s]);({selected:l.selectedItems,items:l.listedItems});return c__default.default.createElement(i__default.default,{selected:l.selectedItems,items:l.listedItems,onSelect:e=>console.log(e),onSubmit:e=>console.log(e)})};o.displayName="InternalPackageSelect";var R=o;

exports.a = R;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-7KL7RO4L.cjs.map