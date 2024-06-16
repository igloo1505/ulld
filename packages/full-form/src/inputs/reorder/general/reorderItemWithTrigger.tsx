import { Reorder, useDragControls } from "framer-motion";
import { GripIcon } from "lucide-react";
import React, { ReactNode } from "react";

interface ReorderItemWithTriggerProps<ItemType extends unknown> {
    item: ItemType;
    className?: string
    label?: ReactNode
}

const ReorderItemWithTrigger = <ItemType extends unknown>({
    item,
className,
    label
}: ReorderItemWithTriggerProps<ItemType>) => {
    const controls = useDragControls();
    return (
        <Reorder.Item value={item} dragListener={false} dragControls={controls}>
            {label}
            <GripIcon
                className={className}
                onPointerDown={controls.start}
            />
        </Reorder.Item>
    );
};

ReorderItemWithTrigger.displayName = "ReorderItemWithTrigger";

export default ReorderItemWithTrigger;
