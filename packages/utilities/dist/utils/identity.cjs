'use strict';

require('../chunk-7ARU3YXQ.cjs');

var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n=(r=16)=>{let e=`${t.charAt(Math.floor(Math.random()*52))}`;for(var a=0;a<r;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},o=(r="")=>r.replaceAll(" ","").replaceAll(/([^\w]|\d)/gm,""),d=(r="")=>r.replaceAll(/[^\w]/gmi,"");

exports.getRandomId = n;
exports.makeValidId = o;
exports.makeValidIdOnlyLetters = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=identity.cjs.map