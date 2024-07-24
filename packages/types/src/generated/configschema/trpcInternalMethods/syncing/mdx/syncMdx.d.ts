import { SyncOptions } from '../../../schemas/syncing/syncOptions';
import { AutoSettingWithRegex } from '../../../trpc/types';
export declare const syncMdx: (file: string, dir: string, autoSettings: AutoSettingWithRegex[], opts?: SyncOptions) => Promise<{
    id: number;
    isProtected: boolean | null;
    dietSummaryKey: string | null;
    title: string;
    latexTitle: string | null;
    rootRelativePath: string;
    noteType: string;
    content: string;
    formatted: string | null;
    summary: string | null;
    citationsListOrder: string[];
    importantValues: number[];
    imageSrc: string | null;
    href: string;
    sequentialKey: string | null;
    sequentialIndex: number | null;
    floatImages: boolean;
    remoteUrl: string | null;
    trackRemote: boolean;
    outgoingQuickLinks: string[];
    quickLink: string | null;
    bookmarked: boolean;
    firstSync: Date;
    lastSync: Date;
} | undefined>;
//# sourceMappingURL=syncMdx.d.ts.map