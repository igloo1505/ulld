import c, { useState, useMemo } from 'react';
import i from 'ink-multi-select';
import { getInternalPackageNames, getInternalAppNames, getAllInternalNames } from '@ulld/utilities/internalDataHelpers';

var u={package:getInternalPackageNames,app:getInternalAppNames,both:getAllInternalNames},o=({type:s="both"})=>{let [m,g]=useState(new Set([])),l=useMemo(()=>{let e=[],a=[],n=u[s]();for(let t of n)m.has(t)?a.push({label:t,value:t}):e.push({label:t,value:t});return {listedItems:e,selectedItems:a}},[s]);({selected:l.selectedItems,items:l.listedItems});return c.createElement(i,{selected:l.selectedItems,items:l.listedItems,onSelect:e=>console.log(e),onSubmit:e=>console.log(e)})};o.displayName="InternalPackageSelect";var _=o;

export { _ as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-YVAOG6YC.js.map