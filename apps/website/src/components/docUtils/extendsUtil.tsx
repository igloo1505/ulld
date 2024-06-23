import React from "react";
import Extends from "./extendsReference";
import { staticDocsData } from "#/staticData/docs";
import Link from "next/link";

interface ExtendsUtilProps {
    extends: string | string[];
}

const ExtendsUtil = ({ extends: __extends }: ExtendsUtilProps) => {
    const _extends = Array.isArray(__extends) ? __extends : [__extends];

    let items = _extends.map((x) => {
        if (x! in staticDocsData.extendsMap) {
            throw new Error(
                `No staticDocsData.extendsMap entry found for ${_extends}`,
            );
        }
        return staticDocsData.extendsMap[x];
    });

    return (
        <div className={"w-fit"}>
            <span className={"font-bold mr-2"}>Extends:</span>
            {items.map((item, i) => {
                return (
                    <Link href={item.href} className={"text-link"}>
                        {i === items.length - 1 ? item.label : <>{item.label},</>}
                    </Link>
                );
            })}
        </div>
    );
};

ExtendsUtil.displayName = "ExtendsUtil";

export default ExtendsUtil;
