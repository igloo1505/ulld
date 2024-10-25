'use strict';

var chunkPL5XZASK_cjs = require('../../chunk-PL5XZASK.cjs');
require('../../chunk-243XK7G3.cjs');
require('../../chunk-DP5PBFG3.cjs');
require('../../chunk-4SS7WEWH.cjs');
require('../../chunk-7ARU3YXQ.cjs');
var useToast = require('@ulld/tailwind/use-toast');

var a=async()=>{let e=await(await fetch("/api/events/onSync",{method:"POST",body:JSON.stringify({offline:!navigator.onLine,removeIfNotInFs:!1,cleanBeforeSync:!1})})).json();if(e?.errorNotifications&&e?.errorNotifications?.length)for(let t of e.errorNotifications)useToast.toast(chunkPL5XZASK_cjs.a[t.errorKey]);else e.success&&useToast.toast({title:"Success",description:"File system was synced with database."});return !0};

exports.syncRootDirectory = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=syncRootDirectory.cjs.map