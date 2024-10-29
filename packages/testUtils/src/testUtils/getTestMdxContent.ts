export const getTestMdxContent = (body: string): string => {
    const now = new Date()
    return `---
title: My Test Title
created: ${now.getMonth()}-${now.getDay()}-${now.getFullYear()}
---

${body}

`
}

