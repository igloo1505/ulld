import { getPages } from 'docs';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('advanced', {
  indexes: getPages().map((page) => ({
    id: page.data._id,
    title: page.data.title,
    url: page.url,
    structuredData: "structuredData" in page.data ? page.data.structuredData as any : undefined,
  })),
});
