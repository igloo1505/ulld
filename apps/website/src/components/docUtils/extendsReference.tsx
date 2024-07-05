import React from "react";
import Link from "next/link"

interface ExtendsProps {
    extends: string;
    href?: string
}

const Extends = (props: ExtendsProps) => {
    return (
        <div className={"w-fit text-sm"}>
            <span className={"font-bold mr-2 text-cyan-500 dark:text-cyan-400"}>Extends:</span>
            {props.href ? <Link className={"hover:!text-link transition-colors duration-300"} href={props.href}>{props.extends}</Link> : <span>{props.extends}</span>}
        </div>
    );
};

Extends.displayName = "Extends";

export default Extends;
