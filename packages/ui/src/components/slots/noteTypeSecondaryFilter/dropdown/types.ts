import { ReactNode } from "react";
import { TagBadgeProps } from "../../../navigationUtilityComponents/badges/taggableBadge";

export interface TaggableListDropdownProps {
    activeItems: TagBadgeProps[];
    inactiveItems: TagBadgeProps[];
    type: "tag" | "subject" | "topic"
    label: ReactNode
}
