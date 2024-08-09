# @repo/jest-presets

## 0.0.62

### Patch Changes

- Going back on the individual prisma generator approach for now. It's failing to run in the generated app, even when the dependencies are specified as regular runtime dependencies and not dev-dependencies.

## 0.0.61

### Patch Changes

- Had to add database dev dependencies to regular dependencies to avoid build issues in the target app.

## 0.0.60

### Patch Changes

- Fix some small tweaks, but mostly fix issue with the build script to incorporate new generators.

## 0.0.59

### Patch Changes

- Some minor fixes reworking of the build script to work with new tailwind sources collection in the generated app.

## 0.0.58

### Patch Changes

- Update the way shiki is handled to improve reliability.

## 0.0.57

### Patch Changes

- Push before working offline again.

## 0.0.56

### Patch Changes

- Broken snippets package due to some build script issue converting an entire file to lower case.

## 0.0.55

### Patch Changes

- Moved shiki to dynamic import to resolve issue with Shiki and Next 14.2.x

## 0.0.54

### Patch Changes

- Broken build script causing mismatched versions in some packages.

## 0.0.53

### Patch Changes

- Missing dependencies came out of nowhere...

## 0.0.52

### Patch Changes

- Update after resolving issues last night while not on wifi.

## 0.0.51

### Patch Changes

- Update after resolving issues last night while not on wifi.

## 0.0.50

### Patch Changes

- Removed imgly for now to address build issue at a later date. Super promising, but there are more important things to focus on for now.

## 0.0.49

### Patch Changes

- Fix some task-manager UI issues, and added a method to remove image background to the trpc router.

## 0.0.48

### Patch Changes

- Broken build. Attempting to resolve with a new build from remote. The issue might be a result of a dependency relying on a database client that it can't find.

## 0.0.47

### Patch Changes

- Update dashboard and equations page to fix minor style issues.

## 0.0.46

### Patch Changes

- Fix issue with trpc missing routes.

## 0.0.45

### Patch Changes

- Update equations package to address layout issues.

## 0.0.44

### Patch Changes

- Update dashboard and included @ulld/plot in the tailwind config sources.

## 0.0.43

### Patch Changes

- Update dashboard mostly.

## 0.0.42

### Patch Changes

- Removing broken paths.

## 0.0.41

### Patch Changes

- Left over development files leaked into the build and are causing build issues. They don't affect anything, but still need to be handled.

## 0.0.40

### Patch Changes

- Broke-d the versioning by accidentally marking the eslint package
  private.

## 0.0.39

### Patch Changes

- Package version mismatches.

## 0.0.38

### Patch Changes

- Wrap up the dashboard component and attempt to finalize build script.

## 0.0.37

### Patch Changes

- Fix import issues in the dashboard component.

## 0.0.36

### Patch Changes

- Update to add utility methods that gather an overview of the user's app to the trpc router.

## 0.0.35

### Patch Changes

- Update landing page layout slot.

## 0.0.34

### Patch Changes

- Removed some old functions that have been replaced but not implemented everywhere.

## 0.0.33

### Patch Changes

- Fix missing files after trying to clean things up while offline.

## 0.0.32

### Patch Changes

- Broken database script again...

## 0.0.31

### Patch Changes

- Fix broken database generation script.

## 0.0.30

### Patch Changes

- Fix some more TS errors that result as part of the build script.

## 0.0.29

### Patch Changes

- Need to come up with a much better deployement script. This is a
  nightmare always forgetting to run specific scripts first.

## 0.0.28

### Patch Changes

- Broken plugin slot after deleted a slot and didn't remove it from the
  slotMap.

## 0.0.27

### Patch Changes

- Much plugin config generation script.

## 0.0.26

### Patch Changes

- Update database build script.

## 0.0.25

### Patch Changes

- Fixed a few TS errors that result as part of the build process.

## 0.0.24

### Patch Changes

- Moved all references to prisma to referring to the internal DB package
  directly.

## 0.0.23

### Patch Changes

- Doing everything twice after reverting parts of the package.json files
  in almost all internal packages.

## 0.0.22

### Patch Changes

- Fixing mismatched version after reverting package.json files that blew up while working on the build process.

## 0.0.9

### Patch Changes

- Lord I hope these package.json files are back in working order.

## 0.0.21

### Patch Changes

- Update react version and lift to monorepo root.

## 0.0.20

### Patch Changes

- 06a2aa9: Patch bump, resolved a ton of TS errors in most of the core packages.
- Patch bump after cleaning all TS errors in most core internal packages.

## 0.0.19

### Patch Changes

- Broken prisma script.

## 0.0.18

### Patch Changes

- Update prisma export.

## 0.0.17

### Patch Changes

- Removed next-mdx-remote entirely. Now using mdx package directly.

## 0.0.16

### Patch Changes

- Fix a bunch of misaligned references.

## 0.0.15

### Patch Changes

- Update sync method.

## 0.0.14

### Patch Changes

- Update misaligned imports.

## 0.0.13

### Patch Changes

- Fix issue created by the build script.

## 0.0.12

### Patch Changes

- Update missing source paths.

## 0.0.11

### Patch Changes

- Update file source paths. Build script modified the files path in the form package, causing the build to fail.

## 0.0.10

### Patch Changes

- Update remote to fix some misaligned imports mostly.

## 0.0.9

### Patch Changes

- Update dependency versions, moved a bunch of stuff to peer dependencies to avoid version conflicts, fixed a bunch of errors mostly around client side / server side issues, and adjusted a few misaligned imports.

## 0.0.8

### Patch Changes

- 609abeb: Add missing plugin configs.

## 0.0.7

### Patch Changes

- Update to match base app's template progress.

## 0.0.6

### Patch Changes

- Removed all unpublished packages dynamically.

## 0.0.5

### Patch Changes

- One more time with this cluster\*\*\*\* of dependencies.

## 0.0.4

### Patch Changes

- Remove cookbook dependency.

## 0.0.3

### Patch Changes

- Update to include utility repo dependencies.

## 0.0.2

### Patch Changes

- ceb2d95: Update dependencies to support base-configs.

## 0.0.1

### Patch Changes

- Publish to work on build script.
