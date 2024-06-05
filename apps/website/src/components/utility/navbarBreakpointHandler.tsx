"use client"
import { setDrawerBreakpoint } from "#/state/slices/core";
import store from "#/state/store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const breakpointMap: Record<string, number> = {
    blog: 840,
};

const NavbarBreakpointHandler = () => {
    const sp = usePathname();
    useEffect(() => {
        let bp = sp in breakpointMap ? breakpointMap[sp] : 1024;
        store.dispatch(setDrawerBreakpoint(bp));
    }, [sp]);
    return null;
};

NavbarBreakpointHandler.displayName = "NavbarBreakpointHandler";

export default NavbarBreakpointHandler;
