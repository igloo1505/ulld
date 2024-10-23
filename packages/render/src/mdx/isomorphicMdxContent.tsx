import React, { type ReactNode } from "react";
import dynamic from "next/dynamic"
import { MdxContentCLIENT } from "./mdxContentCLIENT";

interface IsomorphicMdxProps { }

const IsomorphicMdx = (props: IsomorphicMdxProps): ReactNode => {
    if (typeof window !== "undefined") {
        const MdxContentRSC = dynamic(() => import("./mdxContentRSC.tsx").then((a) => a.MdxContentRSC))
        return <MdxContentRSC {...props} />;
    }
    return <MdxContentCLIENT {...props}/>
};

IsomorphicMdx.displayName = "IsomorphicMdx";

export default IsomorphicMdx;
