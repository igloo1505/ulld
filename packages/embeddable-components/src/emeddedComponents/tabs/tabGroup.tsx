"use client"
import React, { ReactElement, useId } from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@ulld/tailwind/tabs'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@ulld/tailwind/card'
import { TabGroupProps, TabProps } from './props'
import clsx from 'clsx'
import { Tab } from './tab'

/* NOTE: Overriding children to display better property in documentation without causing typescript errors. */
export const TabGroup = ({ children: _children, primary }: TabGroupProps & {children: Array<ReactElement<TabProps, typeof Tab>>}) => {
    const children = _children.filter((a) => typeof a !== "string")
    console.log("children: ", children, _children.forEach((c) => console.log(typeof c)))
    /* HACK: Fix this when back on wifi. Look up the syntax for using a specific component as a children array type. */
    /* const titles = children.map((c) => c.props.title) */
    /// @ts-ignore
    /* const descriptions = children.map((c) => c.props.descriptions) */
    /* const labels = children.map((c) => c.props.descriptions) */
    const id = useId()
    return (
        <div className={clsx("w-full @group/tabGroup flex flex-col justify-center items-center mb-3 not-prose", primary && "tabGroupPrimary")}>
            <Tabs defaultValue={children[0].props.label} className="w-[400px] min-w-fit">
                <TabsList className="grid w-full @group-[.tabGroupPrimary]/tabGroup:border @group-[.tabGroupPrimary]/tabGroup:bg-background" style={{
                    gridTemplateColumns: `repeat(${children.length}, 1fr)`
                }}>
                    {children.map((c, i) => {
                        return (
                            <TabsTrigger key={`tab-trigger-${id}-${i}`} value={c.props?.label}>{c.props?.label}</TabsTrigger>
                        )
                    })}
                </TabsList>
                {
                    children.map((c, i) => {
                        return (
                            <TabsContent value={c.props.label} key={`card-${id}-${i}`}>
                                <Card>
                                    {Boolean(c.props.title || c.props.description) && <CardHeader>
                                        {c.props.title && <CardTitle>{c.props.title}</CardTitle>}
                                        {c.props.description && <CardDescription>
                                            {c.props.description}
                                        </CardDescription>}
                                    </CardHeader>}
                                    <CardContent className="space-y-2 prose-all">
                                        {c}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        )
                    })}
            </Tabs>
        </div>
    )
}



TabGroup.displayName = "TabGroup"
