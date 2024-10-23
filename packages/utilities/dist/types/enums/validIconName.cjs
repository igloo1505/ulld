'use strict';

var validIconNameList = require('@ulld/types/validIconNameList');



Object.keys(validIconNameList).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return validIconNameList[k]; }
	});
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=validIconName.cjs.map