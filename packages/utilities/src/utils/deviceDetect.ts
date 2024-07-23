import { DeviceType } from "../types/general";
import { ArrayUtilities } from "./arrayUtilities";
import {
    isMobile,
    isTablet,
    isMobileOnly,
    isDesktop,
    isMacOs,
    isIOS,
    isAndroid,
    isSmartTV,
} from "react-device-detect";

const deviceTypeValidationMap: Record<DeviceType, boolean> = {
    mobile: isMobile,
    tablet: isTablet,
    iOS: isIOS,
    android: isAndroid,
    smartTv: isSmartTV,
    macOS: isMacOs,
    mobileOnly: isMobileOnly,
    desktop: isDesktop,
};

export const validateDeviceType = (_types: DeviceType | DeviceType[]) => {
    return ArrayUtilities.beArray(_types).some(
        (deviceType) => deviceTypeValidationMap[deviceType],
    );
};
