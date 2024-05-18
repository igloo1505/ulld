import { Component } from "react"

export type ComponentKeys = "LogoAsText"

export interface ComponentMapItem {
   components: ComponentKeys[]
}


export type ComponentMap = Record<string, ComponentMapItem>

export type MDXComponents = Record<string, Component<any, any>>
