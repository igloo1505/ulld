import { a as a$1 } from '../../chunk-HOUPXRXN.mjs';
import '../../chunk-2PAU243P.mjs';
import '../../chunk-Z4IHFD72.mjs';
import '../../chunk-BBL4N5FU.mjs';
import '../../chunk-T7KECS5U.mjs';
import { toast } from '@ulld/tailwind/use-toast';

var a=async()=>{let e=await(await fetch("/api/events/onSync",{method:"POST",body:JSON.stringify({offline:!navigator.onLine,removeIfNotInFs:!1,cleanBeforeSync:!1})})).json();if(e?.errorNotifications&&e?.errorNotifications?.length)for(let t of e.errorNotifications)toast(a$1[t.errorKey]);else e.success&&toast({title:"Success",description:"File system was synced with database."});return !0};

export { a as syncRootDirectory };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=syncRootDirectory.mjs.map