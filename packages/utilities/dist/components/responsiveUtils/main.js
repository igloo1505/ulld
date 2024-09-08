"use client"
import '../../chunk-F3FYYIAV.js';
import { useMediaQuery } from 'react-responsive';

var ScreenDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
var ScreenTablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
var ScreenMobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
var ScreenNotMobile = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export { ScreenDesktop, ScreenMobile, ScreenNotMobile, ScreenTablet };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.js.map