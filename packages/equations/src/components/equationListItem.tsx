import React from "react";
import { EquationListItem as EquationListItemType } from "./types";
import Link from "next/link";
import { buttonVariants } from "@ulld/tailwind/button";
import { H4 } from "@ulld/embeddable-components/heading";
import { MdxContentSERVER } from "@ulld/render/mdx/server";
import EquationListItemDeleteButton from "./equationListItemDeleteButton";

interface EquationListItemProps {
    equation: EquationListItemType;
}

const EquationListItem = ({ equation }: EquationListItemProps) => {
    return (
        <li
            className={
                "w-full h-full min-w-[min(400px,90vw)] rounded-lg border px-4 py-3 flex flex-col justify-center items-center shadow-md hover:shadow-sm transition-shadow duration-300 relative"
            }
        >
            <H4 className={"pr-4 w-full"}>
                <MdxContentSERVER
                    content={equation.title}
                    inline
                />
                <EquationListItemDeleteButton
                    equationId={equation.id}
                    className={"absolute top-2 right-2"}
                />
            </H4>
            <div
                className={"w-full h-full flex flex-col flex-grow justify-center items-center my-6"}
            >
                <MdxContentSERVER
                    isMathOnly
                    autoWrap
                    large
                    display
                    content={equation.content}
                    className={"mx-6"}
                    parserOpts={{
                        mathLabels: false
                    }}
                />
            </div>
            <div className={"mt-3 w-full flex flex-row justify-end items-center"}>
                <Link
                    href={`/equations/details/${equation.id}`}
                    className={buttonVariants({ variant: "secondary", size: "sm" })}
                >
                    Details
                </Link>
            </div>
        </li>
    );
};

EquationListItem.displayName = "EquationListItem";

export default EquationListItem;
