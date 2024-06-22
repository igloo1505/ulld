import { z } from "zod";
import { internalSlotPropertiesSchema } from "../main";
import { navigationSubSlots } from "../../subslots/navigation";
import {pluginSlotSchema} from "../../slotsSchema"

export const schema = internalSlotPropertiesSchema.extend({
    slot: navigationSubSlots.keyof(),
    parentSlot: pluginSlotSchema.keyof().default("navigation"),
});

export const configs: z.input<typeof schema>[] = [
    {
        slot: "navbar",
        clientOnly: false,
        inStoreProvider: false,
    },
    {
        slot: "secondary",
        clientOnly: false,
        inStoreProvider: false,
    },
    // {
    //     slot: "footer",
    //     clientOnly: true,
    //     inStoreProvider: true,
    // },
];
