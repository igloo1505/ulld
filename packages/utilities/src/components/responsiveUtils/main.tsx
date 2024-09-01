"use client"
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface ScreenResponsiveProps {
    children: ReactNode;
}


/** minWidth: 992px */
export const ScreenDesktop = ({ children }: ScreenResponsiveProps) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
};

/** minWidth: 768px, maxWidth: 991px */
export const ScreenTablet = ({ children }: ScreenResponsiveProps) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
};

/** maxWidth: 767px */
export const ScreenMobile = ({ children }: ScreenResponsiveProps) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};

/** minWidth: 768px */
export const ScreenNotMobile = ({ children }: ScreenResponsiveProps) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
};
