import { FC, ReactNode } from "react"

export const initialFeatureTimeout = 3000

export type BadgesGroup = {
    label: string
    badges: string[]
}

type Orientation = "rtl" | "ltr"

export type FeatureUIStage = "hidden" | "current" | "past"

type FeatureFCField = FC<{orientation: Orientation, shouldShow: boolean}>

export interface FeatureContainerProps {
    title: NonNullable<ReactNode> | FeatureFCField
    label: string
    desc: FeatureFCField
    badgesLeft?: BadgesGroup
    badgesRight?: BadgesGroup
    orientation: Orientation
    component: FeatureFCField
    idx: number
}


export type FeaturedContainerPropsRequired = Omit<FeatureContainerProps, "idx" | "orientation">
