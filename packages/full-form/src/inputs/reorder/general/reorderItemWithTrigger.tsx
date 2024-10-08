import cn from "@ulld/utilities/cn";
import { Reorder, useDragControls } from "framer-motion";
import { GripIcon } from "lucide-react";
import React, { ReactNode } from "react";

export interface ReorderItemWithTriggerProps<ItemType extends unknown> {
    item: ItemType;
    classes?: {
        dragHandle?: string;
        item?: string;
    };
    label?: ReactNode;
}

/* BUG: Fix this issue with the drag handle when on WIFI. Currently getting some context error from framer-motion. */
const ReorderItemWithTrigger = <ItemType extends unknown>({
    item,
    classes = {},
    label,
}: ReorderItemWithTriggerProps<ItemType>) => {
    const controls = useDragControls();
    return (
        <Reorder.Item
            value={item}
            dragListener={false}
            dragControls={controls}
            className={cn("border grid grid-cols-[1fr_32px] px-4 py-3", classes.item)}
        >
            {label}
            <GripIcon className={classes.dragHandle} onPointerDown={controls.start} />
        </Reorder.Item>
    );
};

ReorderItemWithTrigger.displayName = "ReorderItemWithTrigger";

export default ReorderItemWithTrigger;
