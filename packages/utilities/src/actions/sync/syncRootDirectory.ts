import { toast } from "@ulld/tailwind/use-toast";
import { errorToastRecord } from "../../errorHandling/main";


export const syncRootDirectory = async () => {
    let res = await fetch("/api/events/onSync", {
        method: "POST",
        body: JSON.stringify({
            offline: !navigator.onLine,
            // TODO: Actually enable these options through something like a 'hard' sync or the like.
            removeIfNotInFs: false,
            cleanBeforeSync: false,
        }),
    });
    let resBody = await res.json();
    // let res = await axios.post(getDevPath("/api/events/onSync"), {
    //     offline: !navigator.onLine,
    //     // TODO: Actually enable these options through something like a 'hard' sync or the like.
    //     removeIfNotInFs: false,
    //     cleanBeforeSync: false,
    // });
    if (resBody?.errorNotifications && resBody?.errorNotifications?.length) {
        for (const err of resBody.errorNotifications) {
            toast(
                errorToastRecord[err.errorKey as keyof typeof errorToastRecord],
            );
        }
    } else if (resBody.success) {
        toast({
            title: "Success",
            description: "File system was synced with database.",
        });
    }
    return true;
};
