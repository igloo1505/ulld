import { ValidIconName } from "@ulld/icons";
import { ReactNode } from "react";

export type FeatureImageGalleryKey = "plotting" | "bibliography" | "taskManager" | "organization" | "inputs"

export type MiniFeature = {
    title: ReactNode;
    desc: ReactNode
    icon: ValidIconName
    featureKey?: FeatureImageGalleryKey
    seeMoreHref?: string
}



