import { BoxProps } from 'ink';
import { type ReactNode } from 'react';
interface FullScreenProps extends BoxProps {
    children: ReactNode;
    applyHeight?: boolean;
}
declare const FullScreen: {
    ({ children, applyHeight, ...props }: FullScreenProps): ReactNode;
    displayName: string;
};
export default FullScreen;
