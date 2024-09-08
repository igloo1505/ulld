import { TOCItemType } from 'fumadocs-core/server';
export type { TOCItemType };
export declare const getLatexTocEntries: (toc: TOCItemType[] | undefined, content: string) => TOCItemType[];
export declare const getTocFromContent: (content: string) => Promise<TOCItemType[]>;
//# sourceMappingURL=getTocFromContent.d.ts.map