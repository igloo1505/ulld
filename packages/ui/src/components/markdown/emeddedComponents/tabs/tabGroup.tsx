import React, { useId } from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '#/components/shad/ui/tabs'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#/components/shad/ui/card'



interface TabGroupProps {
    children: any[]
}


/* import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" */
{/* <Tabs defaultValue="account" className="w-[400px]"> */ }
{/*   <TabsList> */ }
{/*     <TabsTrigger value="account">Account</TabsTrigger> */ }
{/*     <TabsTrigger value="password">Password</TabsTrigger> */ }
{/*   </TabsList> */ }
{/*   <TabsContent value="account">Make changes to your account here.</TabsContent> */ }
{/*   <TabsContent value="password">Change your password here.</TabsContent> */ }
{/* </Tabs> */ }



/*     const titles = children.map((c) => c.props.title) */
/*     const id = useId() */
/*     return ( */
/*         <div className={"group/tabGroup my-4 active-0 tabGroup"} id={id}> */
/*             <div className={"flex flex-row justify-center items-center gap-1"}>{titles.map((t: string, i: number) => <TabButton groupId={id} title={t} index={i} key={`tab-btn-${i}`} />)}</div> */
/*             <div className={"relative"}> */
/*                 {/// @ts-ignore */
/*                     children.map((c, i) => { */
/*                         return <Tab {...c.props} key={`tab-${i}`} index={i} /> */
/*                     })} */
/*             </div> */
/*         </div> */




const TabGroup = ({ children }: TabGroupProps) => {
    /* HACK: Fix this when back on wifi. Look up the syntax for using a specific component as a children array type. */
    /* const titles = children.map((c) => c.props.title) */
    /// @ts-ignore
    /* const descriptions = children.map((c) => c.props.descriptions) */
    /* const labels = children.map((c) => c.props.descriptions) */
    const id = useId()
    return (
        <div className={"w-full flex flex-col justify-center items-center mb-3"}>
            <Tabs defaultValue={children[0].props.label} className="w-[400px] min-w-fit">
                <TabsList className="grid w-full" style={{
                    gridTemplateColumns: `repeat(${children.length}, 1fr)`
                }}>
                    {children.map((c, i) => {
                        return (
                            <TabsTrigger key={`tab-trigger-${id}-${i}`} value={c.props.label}>{c.props.label}</TabsTrigger>
                        )
                    })}
                </TabsList>
                {/// @ts-ignore
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
                                    <CardContent className="space-y-2">
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


export default TabGroup;
