import { a as a$1 } from '../../chunk-3AAYGORZ.js';
import '../../chunk-GHLLEUW2.js';
import '../../chunk-VPNDFFRQ.js';
import '../../chunk-WP27HNDK.js';
import '../../chunk-GQSCBKA6.js';
import { toast } from '@ulld/tailwind/use-toast';

var a=async()=>{let e=await(await fetch("/api/events/onSync",{method:"POST",body:JSON.stringify({offline:!navigator.onLine,removeIfNotInFs:!1,cleanBeforeSync:!1})})).json();if(e?.errorNotifications&&e?.errorNotifications?.length)for(let t of e.errorNotifications)toast(a$1[t.errorKey]);else e.success&&toast({title:"Success",description:"File system was synced with database."});return !0};

export { a as syncRootDirectory };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=syncRootDirectory.js.map