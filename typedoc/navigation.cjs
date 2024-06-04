// @ts-check
 
import { MarkdownApplication } from 'typedoc-plugin-markdown';
 
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
    // The navigation JSON structure is available on the navigation object.
    const navigation = renderer.navigation;
 
    // This can be parsed to something else or written straight to a file:
    fs.writeFileSync(path.join(process.cwd(), "docsNavigation.json"), JSON.stringify(navigation, null, 4));
  });
}
