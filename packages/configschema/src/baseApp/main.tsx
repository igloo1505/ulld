import { z } from "zod";
import { baseAppSlot } from "./slot.js";

export const baseAppBuildData = z.object({
    slots: baseAppSlot.array()
})
