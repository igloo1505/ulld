import '../chunk-5WT32FJO.js';

var a=(n,l="appConfig.ulld.json")=>{let o=new File([n],l,{type:"application/json"}),t=URL.createObjectURL(o),e=document.createElement("a");e.href=t,e.download=o.name,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(t);};

export { a as downloadFile };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=downloadFile.js.map