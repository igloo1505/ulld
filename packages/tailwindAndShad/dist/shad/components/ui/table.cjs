'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var e__namespace = /*#__PURE__*/_interopNamespace(e);

var r=e__namespace.forwardRef(({className:t,...a},l)=>e__namespace.createElement("div",{className:"relative w-full overflow-auto"},e__namespace.createElement("table",{ref:l,className:chunkI7EIMM7S_cjs.a("w-full caption-bottom text-sm",t),...a})));r.displayName="Table";var T=e__namespace.forwardRef(({className:t,...a},l)=>e__namespace.createElement("thead",{ref:l,className:chunkI7EIMM7S_cjs.a("[&_tr]:border-b",t),...a}));T.displayName="TableHeader";var b=e__namespace.forwardRef(({className:t,...a},l)=>e__namespace.createElement("tbody",{ref:l,className:chunkI7EIMM7S_cjs.a("[&_tr:last-child]:border-0",t),...a}));b.displayName="TableBody";var s=e__namespace.forwardRef(({className:t,...a},l)=>e__namespace.createElement("tfoot",{ref:l,className:chunkI7EIMM7S_cjs.a("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...a}));s.displayName="TableFooter";var m=e__namespace.forwardRef(({className:t,...a},l)=>e__namespace.createElement("tr",{ref:l,className:chunkI7EIMM7S_cjs.a("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...a}));m.displayName="TableRow";var c=e__namespace.forwardRef(({className:t,...a},l)=>e__namespace.createElement("th",{ref:l,className:chunkI7EIMM7S_cjs.a("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...a}));c.displayName="TableHead";var d=e__namespace.forwardRef(({className:t,...a},l)=>e__namespace.createElement("td",{ref:l,className:chunkI7EIMM7S_cjs.a("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...a}));d.displayName="TableCell";var n=e__namespace.forwardRef(({className:t,...a},l)=>e__namespace.createElement("caption",{ref:l,className:chunkI7EIMM7S_cjs.a("mt-4 text-sm text-muted-foreground",t),...a}));n.displayName="TableCaption";

exports.Table = r;
exports.TableBody = b;
exports.TableCaption = n;
exports.TableCell = d;
exports.TableFooter = s;
exports.TableHead = c;
exports.TableHeader = T;
exports.TableRow = m;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=table.cjs.map