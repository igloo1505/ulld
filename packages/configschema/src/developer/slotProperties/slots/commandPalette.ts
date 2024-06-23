import { z } from "zod";
import { internalSlotPropertiesSchema } from "../main";
import { commandPaletteSubSlots } from "../../subslots/commandPalette";
import {pluginSlotSchema} from "../../slotsSchema"

export const schema = internalSlotPropertiesSchema.extend({
    slot: commandPaletteSubSlots.keyof(),
    parentSlot: pluginSlotSchema.keyof().default("navigation"),
});

export const configs: z.input<typeof schema>[] = [
    {
        slot: "commandPalette",
        clientOnly: false,
        inStoreProvider: false,
    },
];
