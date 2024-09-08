import '../chunk-5WT32FJO.js';

var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",o=(r=16)=>{let e=`${t.charAt(Math.floor(Math.random()*52))}`;for(var a=0;a<r;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},d=(r="")=>r.replaceAll(" ","").replaceAll(/([^\w]|\d)/gm,""),c=(r="")=>r.replaceAll(/[^\w]/gmi,"");

export { o as getRandomId, d as makeValidId, c as makeValidIdOnlyLetters };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=identity.js.map