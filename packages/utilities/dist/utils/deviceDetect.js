import { ArrayUtilities } from '../chunk-JEBMZLDZ.js';
import '../chunk-F3FYYIAV.js';
import { isMobile, isTablet, isIOS, isAndroid, isSmartTV, isMacOs, isMobileOnly, isDesktop } from 'react-device-detect';

var deviceTypeValidationMap = {
  mobile: isMobile,
  tablet: isTablet,
  iOS: isIOS,
  android: isAndroid,
  smartTv: isSmartTV,
  macOS: isMacOs,
  mobileOnly: isMobileOnly,
  desktop: isDesktop
};
var validateDeviceType = (_types) => {
  return ArrayUtilities.beArray(_types).some(
    (deviceType) => deviceTypeValidationMap[deviceType]
  );
};

export { validateDeviceType };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=deviceDetect.js.map