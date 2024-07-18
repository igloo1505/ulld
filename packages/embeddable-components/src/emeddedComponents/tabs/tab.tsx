"use client"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@ulld/tailwind/card";
import { TabsContent } from "@ulld/tailwind/tabs";
import { getRandomId, makeValidId } from "@ulld/utilities/identity";
import React, { useContext, useEffect, useMemo } from "react";
import { TabGroupContextContext, TabGroupContextDispatchContext } from "./tabContext";
import { TabProps } from "./props";

const getConsistenId = (p: TabProps) => {
       let s = typeof p.label === "string" ? p.label : ""
       if(typeof p.title === "string"){
        s += `-${p.title}`
    }
    if(typeof p.description === "string"){
        s += `-${p.description}`
    }
    return s
}

export const Tab = (props: TabProps) => {
    const id = useMemo(() => getConsistenId(props), [props])
    const { label, title, description, children } = props
    const items = useContext(TabGroupContextContext)
    /* const id = items.tabs.length === 0 ? items.initialTabId : typeof label === "string" ? makeValidId(label) : getRandomId(); */
    const dispatch = useContext(TabGroupContextDispatchContext);

    useEffect(() => {
        dispatch({
            type: "appendTab",
            payload: {
                label,
                title,
                description,
                id,
            },
        });
    }, []);

    return (
        <TabsContent value={id}>
            <Card className={"this-is-my-card"}>
                {Boolean(title || description) && (
                    <CardHeader>
                        {title && <CardTitle>{title}</CardTitle>}
                        {description && <CardDescription>{description}</CardDescription>}
                    </CardHeader>
                )}
                <CardContent className="space-y-2 prose">
                    <div
                        className={
                            "w-full h-full flex flex-col justify-center items-center p-4 tabContent"
                        }
                        id={id}
                    >
                        {children}
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    );
};

Tab.displayName = "Tab";
