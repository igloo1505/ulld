import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
}

const NavbarButtonPortal = ({ children }: Props) => {
    const [em, setEm] = useState<Element | false>(false);
    useEffect(() => {
        let _em = document.getElementById("navbar-btn-container");
        if (!_em) return;
        setEm(_em);
    }, []);
    if (!em) return null;
    return createPortal(children, em);
};

NavbarButtonPortal.displayName = "NavbarButtonPortal";

export default NavbarButtonPortal;
