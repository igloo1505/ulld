"use client"
'use strict';

var reactResponsive = require('react-responsive');

var ScreenDesktop = ({ children }) => {
  const isDesktop = reactResponsive.useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
var ScreenTablet = ({ children }) => {
  const isTablet = reactResponsive.useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
var ScreenMobile = ({ children }) => {
  const isMobile = reactResponsive.useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
var ScreenNotMobile = ({ children }) => {
  const isNotMobile = reactResponsive.useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

exports.ScreenDesktop = ScreenDesktop;
exports.ScreenMobile = ScreenMobile;
exports.ScreenNotMobile = ScreenNotMobile;
exports.ScreenTablet = ScreenTablet;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map