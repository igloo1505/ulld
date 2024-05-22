"use client";
import { useMathjaxDynamicParse } from "@ulld/hooks/useMathjaxDynamicParse";
import React, { ReactNode } from "react";
import { useObserveChildren } from "@ulld/hooks/useObserveChildren";

interface EquationReferenceAnchorProps {
    children: ReactNode;
    id: string;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "equation-rendered": CustomEvent;
    }
}

const EquationReferenceAnchor = ({
    children,
    id,
}: EquationReferenceAnchorProps) => {
    const ref = useObserveChildren<HTMLDivElement>(() => {
        window.dispatchEvent(
            new CustomEvent("equation-rendered", {
                detail: {
                    id: id,
                },
            }),
        );
    });
    useMathjaxDynamicParse(children);

    return (
        <div className={"w-full h-fit"} id={`eqRef-${id}`} ref={ref}>
            {children}
        </div>
    );
};

EquationReferenceAnchor.displayName = "EquationReferenceAnchor";

export default EquationReferenceAnchor;
