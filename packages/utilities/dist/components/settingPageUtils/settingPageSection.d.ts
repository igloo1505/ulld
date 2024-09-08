import React, { ReactNode } from "react";
export interface SettingPageSectionProps {
    title: ReactNode;
    desc?: ReactNode;
    children: ReactNode;
    classes?: {
        title?: string;
        desc?: string;
    };
}
export declare const SettingPageSection: {
    ({ title, desc, children, classes, }: SettingPageSectionProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=settingPageSection.d.ts.map