"use client";
import { cn } from "@ulld/utilities/cn";
import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FoldingAdmonitionTitle } from "./foldingAdmonitionTitle";
import { getIconName, type AdmonitionContainerProps } from "./admonitionUtils";
import { footerClassNames, getBodyClassNames, getContainerClassNames } from "./classNames";

interface FoldingAdmonitionContainerProps extends AdmonitionContainerProps {
    open?: boolean;
    id: string;
    body: ReactNode
}

const getInitial = (dropdown?: boolean, _open?: boolean): "open" | "closed" => {
    if (dropdown) {
        return _open ? "open" : "closed";
    }
    return "open";
};

export const FoldingAdmonitionContainer = (props: FoldingAdmonitionContainerProps): ReactNode => {
    const {
    type,
    id,
    dropdown,
    body,
    open: _open,
    title,
    footer,
    center,
    titleBold,
    icon
} = props
    const [open, setOpen] = useState(dropdown ? _open : true);

    const toggleOpen = (): void => {
        setOpen(!open);
    };

    const _initial = getInitial(dropdown, _open);

    const iconName = getIconName({
        icon,
        type
    })

    return (
        <div
            className={getContainerClassNames(props)}
            data-state={open ? "open" : "closed"}
            id={id}
        >
            <FoldingAdmonitionTitle
                dropdown={dropdown}
                iconName={iconName}
                onClick={dropdown ? toggleOpen : undefined}
                title={title}
                titleBold={titleBold}
            />
            <motion.div
                animate={open ? "open" : "closed"}
                className={getBodyClassNames(props)}
                initial={_initial}
                variants={{
                    open: {
                        height: "auto",
                        /* paddingTop: "1rem", */
                        /* paddingBottom: "1rem", */
                    },
                    closed: {
                        height: 0,
                    },
                }}
            >
                <div className="admonition-bodyContainer w-full h-full p-4">
                    {body}
                </div>
            </motion.div>
            {footer ? (
                <div className={footerClassNames}>
                    {footer}
                </div>
            ) : null}
        </div>
    );
};

FoldingAdmonitionContainer.displayName = "FoldingAdmonitionContainer";
