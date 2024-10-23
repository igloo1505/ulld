import { type ReactNode } from 'react';
interface FullScreenProps {
    children: ReactNode;
    applyHeight?: boolean;
}
declare const FullScreen: {
    ({ children, applyHeight, }: FullScreenProps): ReactNode;
    displayName: string;
};
export default FullScreen;
