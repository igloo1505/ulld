import { getPages } from 'docs';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('advanced', {
  indexes: getPages().map((page) => ({
    title: page.data.title,
    structuredData: (page.data as any).structuredData,
    id: page.url,
    url: page.url,
  })),
});
