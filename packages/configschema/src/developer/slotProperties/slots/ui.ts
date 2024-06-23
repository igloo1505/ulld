import { z } from "zod";
import { internalSlotPropertiesSchema } from "../main";
import { uiSubSlots } from "../../subslots/UI";
import { pluginSlotSchema } from "../../slotsSchema";

export const schema = internalSlotPropertiesSchema.extend({
    slot: uiSubSlots.keyof(),
    parentSlot: pluginSlotSchema.keyof().default("navigation"),
});

export const configs: z.input<typeof schema>[] = [
    {
        slot: "landingPage",
        clientOnly: false,
        inStoreProvider: false,
    },
];
