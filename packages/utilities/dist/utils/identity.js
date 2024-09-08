import '../chunk-GQSCBKA6.js';

var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",l=(r=16)=>{let e=`${t.charAt(Math.floor(Math.random()*52))}`;for(var a=0;a<r;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},n=(r="")=>r.replaceAll(" ","").replaceAll(/([^\w]|\d)/gm,""),o=(r="")=>r.replaceAll(/[^\w]/gmi,"");

export { l as getRandomId, n as makeValidId, o as makeValidIdOnlyLetters };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=identity.js.map