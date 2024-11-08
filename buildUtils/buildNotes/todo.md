# ULLD To-Do


## Priority

- [ ] Create utility scripts to read and right each file in  `/Users/bigsexy/Desktop/current/ulld/buildUtils/buildNotes/` similar to the `whenOnline` scripts.
- [ ] Cli script to render markdown using the UlldServer throught he cli and display as an independent page, similar to grip.

---

- Find docs on pushing just the `@ulld/template` package to an independent repository and setup a solid workflow around that.
  - Need to have a much more reliable update script that handles at least these 4 specific cases flawlessly:
    1. Version all packages (must not automatically push website and trigger rebuild)
    2. Commit and Push website
    3. Commit and Push template package (must not automatically push website and trigger rebuild
    4. Version packages and commit and push template package (must not automatically push website and trigger rebuild)
- Create cleanup script in the template package at `apps/template/__scripts__/build/cleanup/main.ts`. Should be split into two separate scripts, pre-build and post-build.
  - Prebuild: Ran after `npm install` and `db:migrate` but before build
  1. Copy `pdf.worker.min.js` from `node_modules/pdfjs-dist/build/pdf.worker.min.js` to `public/utils/pdfWorker.js`
  - Postbuild: Ran as the final script after build is complete.
    1. Cleanup **scripts** dir
    2. Cleanup any automatically generated files created by prisma.
    3. Cleanup the `wireit` and `scripts` fields in the template app's `package.json` file.
    4. Remove the cleanup file itself as a separate command called from the `wireit#build` script
    5. Write new `.gitignore` file.



## Test Utils

- [ ] A test mdx renderer that can run every time without a config and has no other internal dependencies.
- [ ] A test page container with some useful default utilities.
