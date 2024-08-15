"use client";
import React from "react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@ulld/tailwind/context-menu";
import { copyStringToClipboard } from "@ulld/utilities/copyStringToClipboard";
import { getAllRegexMatches } from "@ulld/utilities/getAllRegexMatches";

interface EquationContextMenuProps {
    children: React.ReactNode;
    python?: string;
    equationId?: string;
    latex?: string;
}

const removeMathDollarSigns = (_s: string) => {
    let s = _s.trim();
    if (
        s.startsWith("$$") &&
        s.endsWith("$$") &&
        getAllRegexMatches(s, /\$\$/gm).length === 2
    ) {
        return s.replaceAll("$$", "").trim()
    }
    if(
        s.startsWith("$") &&
        s.endsWith("$") &&
        getAllRegexMatches(s, /\$/gm).length === 2
    ) {
        return s.replaceAll("$", "").trim()
    }
    return s
};



const EquationContextMenu = ({
    children,
    python,
    latex,
}: EquationContextMenuProps) => {
    if (!python) return children; // Add more checks here as capabilities grow
    return (
        <ContextMenu>
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                {python && (
                    <ContextMenuItem
                        inset
                        onClick={async () => copyStringToClipboard(python)}
                    >
                        Copy Python
                    </ContextMenuItem>
                )}
                {latex && (
                    <ContextMenuItem
                        inset
                        onClick={async () => copyStringToClipboard(removeMathDollarSigns(latex))}
                    >
                        Copy Latex
                    </ContextMenuItem>
                )}
            </ContextMenuContent>
        </ContextMenu>
    );
};

EquationContextMenu.displayName = "EquationContextMenu";

export default EquationContextMenu;
