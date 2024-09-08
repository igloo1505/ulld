'use strict';

var transformExportString = require('@ulld/utilities/transformExportString');



Object.keys(transformExportString).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return transformExportString[k]; }
	});
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=transforms.cjs.map