import { LandingSection } from "#/types/landingSection"
import { FC, ReactNode } from "react"

export const initialFeatureTimeout = 3000

export type BadgesGroup = {
    label: string
    badges: string[]
}

type Orientation = "rtl" | "ltr"

export type FeatureUIStage = "hidden" | "current" | "past"

type FeatureFCField = FC<{orientation: Orientation, shouldShow: boolean, section: LandingSection | string, animFinished: boolean}>

export interface FeatureContainerProps {
    title: NonNullable<ReactNode> | FeatureFCField
    label: NonNullable<ReactNode> | FeatureFCField
    desc: FeatureFCField
    badgesLeft?: BadgesGroup
    badgesRight?: BadgesGroup
    orientation: Orientation
    component: FeatureFCField
    expandDisplay?: boolean
    spaceEven?: boolean
    idx: number
    displayContainerClasses?: string
}


export type FeaturedContainerPropsRequired = Omit<FeatureContainerProps, "idx" | "orientation">
