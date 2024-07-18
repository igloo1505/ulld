"use client";
import React, { useContext, useEffect, useId, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@ulld/tailwind/tabs";
import { TabGroupProps } from "./props";
import clsx from "clsx";
import { TabGroupContextContext, TabGroupContextDispatchContext, TabGroupContextProvider } from "./tabContext";

const getChild = <T extends unknown>(
    item: T,
    validityCheck: (data: T | any) => boolean,
    maxDepth: number = 3,
    currentDepth: number = 1,
) => {
    let isValid = validityCheck(item);
    if (isValid) {
        return item;
    }
    /* @ts-ignore */
    if (item?.props?.children && item.props.children.length) {
        /* @ts-ignore */
        for (const k of item.props.children) {
            let data: any = getChild(k, validityCheck, maxDepth, currentDepth + 1);
            if (data) {
                return data;
            }
        }
    }
    return undefined;
};

/* NOTE: Overriding children to display better property in documentation without causing typescript errors. */
const TabGroupInternal = ({
    children,
    primary,
}: TabGroupProps) => {

    const id = useId();
    const data = useContext(TabGroupContextContext)
    const dispatch = useContext(TabGroupContextDispatchContext)

    return (
            <div
                className={clsx(
                    "w-full @group/tabGroup flex flex-col justify-center items-center mb-3 not-prose",
                    primary && "tabGroupPrimary",
                )}
            >
                <Tabs
                    /* defaultValue={initialId} */
                    value={data.tabs[data.activeTabIndex]?.id}
                onValueChange={(newValue: string) => dispatch({
                    type: "setById",
                    payload: newValue
                })}
                    className="w-[400px] min-w-fit"
                >
                    <TabsList
                        className="grid w-full @group-[.tabGroupPrimary]/tabGroup:border @group-[.tabGroupPrimary]/tabGroup:bg-background"
                        style={{
                            gridTemplateColumns: `repeat(${data.tabs.length}, 1fr)`,
                        }}
                    >
                        {data.tabs.map((c, i) => {
                            return (
                                <TabsTrigger 
                                key={`tab-trigger-${id}-${i}`}
                                value={c.id}
                            >
                                    {c.label}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    {children}
                </Tabs>
            </div>
    );
};


export const TabGroup = ({children, ...props}: TabGroupProps) => {
    return (
        <TabGroupContextProvider>
            <TabGroupInternal {...props}>
                {children}
            </TabGroupInternal>
        </TabGroupContextProvider>
    )
}

TabGroup.displayName = "TabGroup";
