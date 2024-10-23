'use strict';

var validIconNameEnum = require('@ulld/types/validIconNameEnum');



Object.keys(validIconNameEnum).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return validIconNameEnum[k]; }
	});
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=validIconNameEnum.cjs.map