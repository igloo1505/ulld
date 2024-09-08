import { ReactNode } from "react";
interface ScreenResponsiveProps {
    children: ReactNode;
}
/** minWidth: 992px */
export declare const ScreenDesktop: ({ children }: ScreenResponsiveProps) => ReactNode;
/** minWidth: 768px, maxWidth: 991px */
export declare const ScreenTablet: ({ children }: ScreenResponsiveProps) => ReactNode;
/** maxWidth: 767px */
export declare const ScreenMobile: ({ children }: ScreenResponsiveProps) => ReactNode;
/** minWidth: 768px */
export declare const ScreenNotMobile: ({ children }: ScreenResponsiveProps) => ReactNode;
export {};
//# sourceMappingURL=main.d.ts.map