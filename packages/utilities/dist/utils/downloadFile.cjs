'use strict';

require('../chunk-7ARU3YXQ.cjs');

var c=(n,l="appConfig.ulld.json")=>{let o=new File([n],l,{type:"application/json"}),t=URL.createObjectURL(o),e=document.createElement("a");e.href=t,e.download=o.name,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(t);};

exports.downloadFile = c;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=downloadFile.cjs.map