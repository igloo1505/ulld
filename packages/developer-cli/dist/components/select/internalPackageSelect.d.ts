import { type ReactNode } from 'react';
interface InternalPackageSelectProps {
    type?: 'package' | 'app' | 'both';
}
declare const InternalPackageSelect: {
    ({ type, }: InternalPackageSelectProps): ReactNode;
    displayName: string;
};
export default InternalPackageSelect;
