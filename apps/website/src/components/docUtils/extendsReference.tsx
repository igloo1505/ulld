import React from "react";
import Link from "next/link"

interface ExtendsProps {
    extends: string;
    href?: string
}

const Extends = (props: ExtendsProps) => {
    return (
        <div className={"w-fit"}>
            <span className={"font-bold mr-2"}>Extends:</span>
            {props.href ? <Link className={"text-link"} href={props.href}>{props.extends}</Link> : <span>{props.extends}</span>}
        </div>
    );
};

Extends.displayName = "Extends";

export default Extends;
