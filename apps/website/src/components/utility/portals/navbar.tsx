"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
}

const Large = ({ children }: Props) => {
    const [em, setEm] = useState<Element | false>(false);
    useEffect(() => {
        let _em = document.getElementById("navbar-btn-container");
        if (!_em) return;
        setEm(_em);
    }, []);
    if (!em) return null;
    return createPortal(children, em);
};

const Mobile = ({ children }: Props) => {
    const [em, setEm] = useState<Element | false>(false);
    useEffect(() => {
        let _em = document.getElementById("navbar-btn-container-mobile");
        if (!_em) return;
        setEm(_em);
    }, []);
    if (!em) return null;
    return createPortal(children, em);
};

const NavbarButtonPortal = ({ children }: Props) => {
    return (
        <>
            <Large>{children}</Large>
            <Mobile>{children}</Mobile>
        </>
    );
};

NavbarButtonPortal.displayName = "NavbarButtonPortal";

export default NavbarButtonPortal;
