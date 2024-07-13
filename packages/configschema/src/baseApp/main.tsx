import { z } from "zod";
import { baseAppSlot } from "./slot";

export const baseAppBuildData = z.object({
    slots: baseAppSlot.array()
})
