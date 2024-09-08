import React from 'react';
interface CopyContextMenuProps {
    children: React.ReactNode;
    content: string;
    btnLabel?: string;
    extraMenuItems?: React.FC<{}>;
    removeMathWrapper?: boolean;
    classes?: {
        menuContent?: string;
    };
}
export declare const CopyContextMenu: {
    ({ children, removeMathWrapper, content, btnLabel, extraMenuItems, classes }: CopyContextMenuProps): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=copyContextMenu.d.ts.map