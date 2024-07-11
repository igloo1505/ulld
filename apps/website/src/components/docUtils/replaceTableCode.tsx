"use client"
import { useEffect } from "react";

/* WARN: This whole component might be unneccessary now that we're using that fumadocs table. Remove if not needed. */

interface ReplaceTableCodeProps {
    parentId: string;
}

const replaceBackTicks = (s: string) => {
    let val = s;
    if (val.startsWith("`")) {
        val = val.slice(1);
    }

    if (val.endsWith("`")) {
        val = val.slice(0, val.length - 1);
    }
    return val;
};

const replaceTableCode = (id: string) => {
    let em = document.getElementById(id);
    if (!em) return;
    let tds = em.querySelectorAll("td");
    tds.forEach((td) => {
        let codeEm = td.querySelector("code");
        if (codeEm) {
            const text = td.textContent;
            if (text) {
                td.innerHTML = `<span class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm semibold">${replaceBackTicks(text)}</span>`;
            }
        }
    });
};

const ReplaceTableCode = ({ parentId }: ReplaceTableCodeProps) => {
    useEffect(() => {
        replaceTableCode(parentId);
    }, [parentId]);

    return null;
};

ReplaceTableCode.displayName = "ReplaceTableCode";

export default ReplaceTableCode;
