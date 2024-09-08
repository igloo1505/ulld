"use client"
'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var reactResponsive = require('react-responsive');

var t=({children:e})=>reactResponsive.useMediaQuery({minWidth:992})?e:null,i=({children:e})=>reactResponsive.useMediaQuery({minWidth:768,maxWidth:991})?e:null,r=({children:e})=>reactResponsive.useMediaQuery({maxWidth:767})?e:null,c=({children:e})=>reactResponsive.useMediaQuery({minWidth:768})?e:null;

exports.ScreenDesktop = t;
exports.ScreenMobile = r;
exports.ScreenNotMobile = c;
exports.ScreenTablet = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map