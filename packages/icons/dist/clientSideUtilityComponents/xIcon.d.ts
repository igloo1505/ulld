import { XIcon } from 'lucide-react';
import React, { ComponentPropsWithoutRef } from 'react';
interface ClientSideXIconProps extends ComponentPropsWithoutRef<typeof XIcon> {
    className?: string;
    backOnClick?: boolean;
}
export declare const ClientSideXIcon: {
    ({ backOnClick, ...props }: ClientSideXIconProps): React.JSX.Element;
    displayName: string;
};
export {};
