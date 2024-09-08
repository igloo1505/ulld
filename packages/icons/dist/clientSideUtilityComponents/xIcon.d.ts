import { XIcon } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';
interface ClientSideXIconProps extends ComponentPropsWithoutRef<typeof XIcon> {
    className?: string;
    backOnClick?: boolean;
}
export declare const ClientSideXIcon: {
    ({ backOnClick, ...props }: ClientSideXIconProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
