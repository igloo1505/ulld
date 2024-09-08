import React, { HTMLProps, ReactNode } from "react";
export interface LocalDevelopmentItem {
    href: string;
    label: ReactNode;
    props?: Omit<HTMLProps<HTMLAnchorElement>, "href">;
}
interface LocalDevelopmentMenuProps {
    items: LocalDevelopmentItem[];
}
declare const LocalDevelopmentMenu: {
    ({ items }: LocalDevelopmentMenuProps): React.JSX.Element;
    displayName: string;
};
export default LocalDevelopmentMenu;
//# sourceMappingURL=localDevelopmentMenu.d.ts.map