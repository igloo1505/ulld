import React from 'react'
import { LogoAsText } from '../general/logoAsText';
import clsx from 'clsx'



interface RemoteExampleLimitationProps {
   muted?: boolean
}

const RemoteExampleLimitation = ({muted=true}: RemoteExampleLimitationProps) => {
return (
    <p className={clsx("text-sm", muted && "text-muted-foreground")}>This example is not shown due to limitations on the examples that can be displayed remotely. This is not a limitation of <LogoAsText fontSize={13}/>, but is done for cost savings. As I'm writing this, I have $0.24 in my bank account. The struggle is <span className={"font-bold italic"}>real</span>.</p>
)
}


RemoteExampleLimitation.displayName = "RemoteExampleLimitation"


export default RemoteExampleLimitation;
