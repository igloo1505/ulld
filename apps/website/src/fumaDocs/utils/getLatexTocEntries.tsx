import { DocsPageProps } from "fumadocs-ui/page";
import { parseMarkdownTitle } from "@ulld/utilities/getMarkdownHeadings";
import { MdxContentRSC } from "@ulld/render/mdx/rsc";

export const getLatexTocEntries = (
  toc: DocsPageProps["toc"] = [],
  content: string,
  titleAsComponent: boolean = false,
) => {
  let titles = content.split("\n").filter((f) => f.trim().startsWith("#"));
  let t: DocsPageProps["toc"] = [];
  if (toc.length !== titles.length) {
    console.error(
      `Found different lengths for the toc. Fumadocs found ${toc.length} entries, and you found ${titles.length}.`,
    );
  }
  toc.forEach((entry, i) => {
    const newTitle = parseMarkdownTitle(titles[i].trim());
    t.push({
      ...entry,
      title: titleAsComponent ? (
        <MdxContentRSC
          notProse
          content={newTitle}
          className={"no-list-margin"}
        />
      ) : (
        newTitle
      ),
    });
  });
  return t;
};
