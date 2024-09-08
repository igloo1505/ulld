"use client"
'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var reactResponsive = require('react-responsive');

var i=({children:e})=>reactResponsive.useMediaQuery({minWidth:992})?e:null,r=({children:e})=>reactResponsive.useMediaQuery({minWidth:768,maxWidth:991})?e:null,c=({children:e})=>reactResponsive.useMediaQuery({maxWidth:767})?e:null,l=({children:e})=>reactResponsive.useMediaQuery({minWidth:768})?e:null;

exports.ScreenDesktop = i;
exports.ScreenMobile = c;
exports.ScreenNotMobile = l;
exports.ScreenTablet = r;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map