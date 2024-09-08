'use strict';

var chunkEEBY2HC2_cjs = require('../chunk-EEBY2HC2.cjs');
require('../chunk-7ARU3YXQ.cjs');
var reactDeviceDetect = require('react-device-detect');

var y={mobile:reactDeviceDetect.isMobile,tablet:reactDeviceDetect.isTablet,iOS:reactDeviceDetect.isIOS,android:reactDeviceDetect.isAndroid,smartTv:reactDeviceDetect.isSmartTV,macOS:reactDeviceDetect.isMacOs,mobileOnly:reactDeviceDetect.isMobileOnly,desktop:reactDeviceDetect.isDesktop},T=i=>chunkEEBY2HC2_cjs.a.beArray(i).some(o=>y[o]);

exports.validateDeviceType = T;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=deviceDetect.cjs.map