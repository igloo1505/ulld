# @ulld/component-map

## 0.0.74

### Patch Changes

- Fix broken imports created when build blew up.
- Updated dependencies
  - @ulld/bib-manager@0.0.74
  - @ulld/calendar@0.0.74
  - @ulld/typescript-config@0.0.68
  - @ulld/default-image-map@0.0.74
  - @ulld/diagram@0.0.74
  - @ulld/editor@0.0.74
  - @ulld/embeddable-components@0.0.74
  - @ulld/equations@0.0.74
  - @ulld/full-form@0.0.74
  - @ulld/journal@0.0.74
  - @ulld/navigation@0.0.74
  - @ulld/notebook@0.0.74
  - @ulld/pdf@0.0.74
  - @ulld/plot@0.0.74
  - @ulld/snippets@0.0.74
  - @ulld/tailwind@0.0.68
  - @ulld/task-manager@0.0.74
  - @ulld/types@0.0.68
  - @ulld/whiteboard@0.0.74

## 0.0.73

### Patch Changes

- Moved most or all of internal deps to peer to try and resolve circular deps issue.
- Updated dependencies
  - @ulld/bib-manager@0.0.73
  - @ulld/calendar@0.0.73
  - @ulld/typescript-config@0.0.67
  - @ulld/default-image-map@0.0.73
  - @ulld/diagram@0.0.73
  - @ulld/editor@0.0.73
  - @ulld/embeddable-components@0.0.73
  - @ulld/equations@0.0.73
  - @ulld/full-form@0.0.73
  - @ulld/journal@0.0.73
  - @ulld/navigation@0.0.73
  - @ulld/notebook@0.0.73
  - @ulld/pdf@0.0.73
  - @ulld/plot@0.0.73
  - @ulld/snippets@0.0.73
  - @ulld/tailwind@0.0.67
  - @ulld/task-manager@0.0.73
  - @ulld/types@0.0.67
  - @ulld/whiteboard@0.0.73

## 0.0.72

### Patch Changes

- Remove @ulld/notebook from all. Seems to be causing memory issue.
- Updated dependencies
  - @ulld/bib-manager@0.0.72
  - @ulld/calendar@0.0.72
  - @ulld/typescript-config@0.0.66
  - @ulld/default-image-map@0.0.72
  - @ulld/diagram@0.0.72
  - @ulld/editor@0.0.72
  - @ulld/embeddable-components@0.0.72
  - @ulld/equations@0.0.72
  - @ulld/full-form@0.0.72
  - @ulld/journal@0.0.72
  - @ulld/navigation@0.0.72
  - @ulld/notebook@0.0.72
  - @ulld/pdf@0.0.72
  - @ulld/plot@0.0.72
  - @ulld/snippets@0.0.72
  - @ulld/tailwind@0.0.66
  - @ulld/task-manager@0.0.72
  - @ulld/types@0.0.66
  - @ulld/whiteboard@0.0.72

## 0.0.71

### Patch Changes

- Move most peerDeps to normal.
  Pnpm was reaching the heap limit, and the issue appeared to revolve around peerDeps. There's no guarantee that this will work, but it's worth a shot.
- Updated dependencies
  - @ulld/bib-manager@0.0.71
  - @ulld/calendar@0.0.71
  - @ulld/typescript-config@0.0.65
  - @ulld/default-image-map@0.0.71
  - @ulld/diagram@0.0.71
  - @ulld/editor@0.0.71
  - @ulld/embeddable-components@0.0.71
  - @ulld/equations@0.0.71
  - @ulld/full-form@0.0.71
  - @ulld/journal@0.0.71
  - @ulld/navigation@0.0.71
  - @ulld/notebook@0.0.71
  - @ulld/pdf@0.0.71
  - @ulld/plot@0.0.71
  - @ulld/snippets@0.0.71
  - @ulld/tailwind@0.0.65
  - @ulld/task-manager@0.0.71
  - @ulld/types@0.0.65
  - @ulld/whiteboard@0.0.71

## 0.0.70

### Patch Changes

- Remove dist dirs trying to resolve build heap memory issue.
- Updated dependencies
  - @ulld/bib-manager@0.0.70
  - @ulld/calendar@0.0.70
  - @ulld/default-image-map@0.0.70
  - @ulld/diagram@0.0.70
  - @ulld/editor@0.0.70
  - @ulld/embeddable-components@0.0.70
  - @ulld/equations@0.0.70
  - @ulld/full-form@0.0.70
  - @ulld/journal@0.0.70
  - @ulld/navigation@0.0.70
  - @ulld/notebook@0.0.70
  - @ulld/pdf@0.0.70
  - @ulld/plot@0.0.70
  - @ulld/snippets@0.0.70
  - @ulld/tailwind@0.0.64
  - @ulld/task-manager@0.0.70
  - @ulld/whiteboard@0.0.70

## 0.0.69

### Patch Changes

- A lot of progress towards build completeness.
- Updated dependencies
  - @ulld/bib-manager@0.0.69
  - @ulld/calendar@0.0.69
  - @ulld/default-image-map@0.0.69
  - @ulld/diagram@0.0.69
  - @ulld/editor@0.0.69
  - @ulld/embeddable-components@0.0.69
  - @ulld/equations@0.0.69
  - @ulld/full-form@0.0.69
  - @ulld/journal@0.0.69
  - @ulld/navigation@0.0.69
  - @ulld/notebook@0.0.69
  - @ulld/pdf@0.0.69
  - @ulld/plot@0.0.69
  - @ulld/snippets@0.0.69
  - @ulld/tailwind@0.0.63
  - @ulld/task-manager@0.0.69
  - @ulld/whiteboard@0.0.69

## 0.0.68

### Patch Changes

- Going back on the individual prisma generator approach for now. It's failing to run in the generated app, even when the dependencies are specified as regular runtime dependencies and not dev-dependencies.
- Updated dependencies
  - @ulld/bib-manager@0.0.68
  - @ulld/calendar@0.0.68
  - @ulld/default-image-map@0.0.68
  - @ulld/diagram@0.0.68
  - @ulld/editor@0.0.68
  - @ulld/embeddable-components@0.0.68
  - @ulld/equations@0.0.68
  - @ulld/full-form@0.0.68
  - @ulld/journal@0.0.68
  - @ulld/navigation@0.0.68
  - @ulld/notebook@0.0.68
  - @ulld/pdf@0.0.68
  - @ulld/plot@0.0.68
  - @ulld/snippets@0.0.68
  - @ulld/tailwind@0.0.62
  - @ulld/task-manager@0.0.68
  - @ulld/whiteboard@0.0.68

## 0.0.67

### Patch Changes

- Had to add database dev dependencies to regular dependencies to avoid build issues in the target app.
- Updated dependencies
  - @ulld/bib-manager@0.0.67
  - @ulld/calendar@0.0.67
  - @ulld/default-image-map@0.0.67
  - @ulld/diagram@0.0.67
  - @ulld/editor@0.0.67
  - @ulld/embeddable-components@0.0.67
  - @ulld/equations@0.0.67
  - @ulld/full-form@0.0.67
  - @ulld/journal@0.0.67
  - @ulld/navigation@0.0.67
  - @ulld/notebook@0.0.67
  - @ulld/pdf@0.0.67
  - @ulld/plot@0.0.67
  - @ulld/snippets@0.0.67
  - @ulld/tailwind@0.0.61
  - @ulld/task-manager@0.0.67
  - @ulld/whiteboard@0.0.67

## 0.0.66

### Patch Changes

- Fix some small tweaks, but mostly fix issue with the build script to incorporate new generators.
- Updated dependencies
  - @ulld/bib-manager@0.0.66
  - @ulld/calendar@0.0.66
  - @ulld/default-image-map@0.0.66
  - @ulld/diagram@0.0.66
  - @ulld/editor@0.0.66
  - @ulld/embeddable-components@0.0.66
  - @ulld/equations@0.0.66
  - @ulld/full-form@0.0.66
  - @ulld/journal@0.0.66
  - @ulld/navigation@0.0.66
  - @ulld/notebook@0.0.66
  - @ulld/pdf@0.0.66
  - @ulld/plot@0.0.66
  - @ulld/snippets@0.0.66
  - @ulld/tailwind@0.0.60
  - @ulld/task-manager@0.0.66
  - @ulld/whiteboard@0.0.66

## 0.0.65

### Patch Changes

- Some minor fixes reworking of the build script to work with new tailwind sources collection in the generated app.
- Updated dependencies
  - @ulld/bib-manager@0.0.65
  - @ulld/calendar@0.0.65
  - @ulld/default-image-map@0.0.65
  - @ulld/diagram@0.0.65
  - @ulld/editor@0.0.65
  - @ulld/embeddable-components@0.0.65
  - @ulld/equations@0.0.65
  - @ulld/full-form@0.0.65
  - @ulld/journal@0.0.65
  - @ulld/navigation@0.0.65
  - @ulld/notebook@0.0.65
  - @ulld/pdf@0.0.65
  - @ulld/plot@0.0.65
  - @ulld/snippets@0.0.65
  - @ulld/tailwind@0.0.59
  - @ulld/task-manager@0.0.65
  - @ulld/whiteboard@0.0.65

## 0.0.64

### Patch Changes

- Update the way shiki is handled to improve reliability.
- Updated dependencies
  - @ulld/bib-manager@0.0.64
  - @ulld/calendar@0.0.64
  - @ulld/default-image-map@0.0.64
  - @ulld/diagram@0.0.64
  - @ulld/editor@0.0.64
  - @ulld/embeddable-components@0.0.64
  - @ulld/equations@0.0.64
  - @ulld/full-form@0.0.64
  - @ulld/journal@0.0.64
  - @ulld/navigation@0.0.64
  - @ulld/notebook@0.0.64
  - @ulld/pdf@0.0.64
  - @ulld/plot@0.0.64
  - @ulld/snippets@0.0.64
  - @ulld/tailwind@0.0.58
  - @ulld/task-manager@0.0.64
  - @ulld/whiteboard@0.0.64

## 0.0.63

### Patch Changes

- Push before working offline again.
- Updated dependencies
  - @ulld/bib-manager@0.0.63
  - @ulld/calendar@0.0.63
  - @ulld/default-image-map@0.0.63
  - @ulld/diagram@0.0.63
  - @ulld/editor@0.0.63
  - @ulld/embeddable-components@0.0.63
  - @ulld/equations@0.0.63
  - @ulld/full-form@0.0.63
  - @ulld/journal@0.0.63
  - @ulld/navigation@0.0.63
  - @ulld/notebook@0.0.63
  - @ulld/pdf@0.0.63
  - @ulld/plot@0.0.63
  - @ulld/snippets@0.0.63
  - @ulld/tailwind@0.0.57
  - @ulld/task-manager@0.0.63
  - @ulld/whiteboard@0.0.63

## 0.0.62

### Patch Changes

- Broken snippets package due to some build script issue converting an entire file to lower case.
- Updated dependencies
  - @ulld/bib-manager@0.0.62
  - @ulld/calendar@0.0.62
  - @ulld/default-image-map@0.0.62
  - @ulld/diagram@0.0.62
  - @ulld/editor@0.0.62
  - @ulld/embeddable-components@0.0.62
  - @ulld/equations@0.0.62
  - @ulld/full-form@0.0.62
  - @ulld/journal@0.0.62
  - @ulld/navigation@0.0.62
  - @ulld/notebook@0.0.62
  - @ulld/pdf@0.0.62
  - @ulld/plot@0.0.62
  - @ulld/snippets@0.0.62
  - @ulld/tailwind@0.0.56
  - @ulld/task-manager@0.0.62
  - @ulld/whiteboard@0.0.62

## 0.0.61

### Patch Changes

- Moved shiki to dynamic import to resolve issue with Shiki and Next 14.2.x
- Updated dependencies
  - @ulld/bib-manager@0.0.61
  - @ulld/calendar@0.0.61
  - @ulld/default-image-map@0.0.61
  - @ulld/diagram@0.0.61
  - @ulld/editor@0.0.61
  - @ulld/embeddable-components@0.0.61
  - @ulld/equations@0.0.61
  - @ulld/full-form@0.0.61
  - @ulld/journal@0.0.61
  - @ulld/navigation@0.0.61
  - @ulld/notebook@0.0.61
  - @ulld/pdf@0.0.61
  - @ulld/plot@0.0.61
  - @ulld/snippets@0.0.61
  - @ulld/tailwind@0.0.55
  - @ulld/task-manager@0.0.61
  - @ulld/whiteboard@0.0.61

## 0.0.60

### Patch Changes

- Broken build script causing mismatched versions in some packages.
- Updated dependencies
  - @ulld/bib-manager@0.0.60
  - @ulld/calendar@0.0.60
  - @ulld/default-image-map@0.0.60
  - @ulld/diagram@0.0.60
  - @ulld/editor@0.0.60
  - @ulld/embeddable-components@0.0.60
  - @ulld/equations@0.0.60
  - @ulld/full-form@0.0.60
  - @ulld/journal@0.0.60
  - @ulld/navigation@0.0.60
  - @ulld/notebook@0.0.60
  - @ulld/pdf@0.0.60
  - @ulld/plot@0.0.60
  - @ulld/snippets@0.0.60
  - @ulld/tailwind@0.0.54
  - @ulld/task-manager@0.0.60
  - @ulld/whiteboard@0.0.60

## 0.0.59

### Patch Changes

- Missing dependencies came out of nowhere...
- Updated dependencies
  - @ulld/bib-manager@0.0.59
  - @ulld/calendar@0.0.59
  - @ulld/default-image-map@0.0.59
  - @ulld/diagram@0.0.59
  - @ulld/editor@0.0.59
  - @ulld/embeddable-components@0.0.59
  - @ulld/equations@0.0.59
  - @ulld/full-form@0.0.59
  - @ulld/journal@0.0.59
  - @ulld/navigation@0.0.59
  - @ulld/notebook@0.0.59
  - @ulld/pdf@0.0.59
  - @ulld/plot@0.0.59
  - @ulld/snippets@0.0.59
  - @ulld/tailwind@0.0.53
  - @ulld/task-manager@0.0.59
  - @ulld/whiteboard@0.0.59

## 0.0.58

### Patch Changes

- Update after resolving issues last night while not on wifi.
- Updated dependencies
  - @ulld/bib-manager@0.0.58
  - @ulld/calendar@0.0.58
  - @ulld/default-image-map@0.0.58
  - @ulld/diagram@0.0.58
  - @ulld/editor@0.0.58
  - @ulld/embeddable-components@0.0.58
  - @ulld/equations@0.0.58
  - @ulld/full-form@0.0.58
  - @ulld/journal@0.0.58
  - @ulld/navigation@0.0.58
  - @ulld/notebook@0.0.58
  - @ulld/pdf@0.0.58
  - @ulld/plot@0.0.58
  - @ulld/snippets@0.0.58
  - @ulld/tailwind@0.0.52
  - @ulld/task-manager@0.0.58
  - @ulld/whiteboard@0.0.58

## 0.0.57

### Patch Changes

- Update after resolving issues last night while not on wifi.
- Updated dependencies
  - @ulld/bib-manager@0.0.57
  - @ulld/calendar@0.0.57
  - @ulld/default-image-map@0.0.57
  - @ulld/diagram@0.0.57
  - @ulld/editor@0.0.57
  - @ulld/embeddable-components@0.0.57
  - @ulld/equations@0.0.57
  - @ulld/full-form@0.0.57
  - @ulld/journal@0.0.57
  - @ulld/navigation@0.0.57
  - @ulld/notebook@0.0.57
  - @ulld/pdf@0.0.57
  - @ulld/plot@0.0.57
  - @ulld/snippets@0.0.57
  - @ulld/tailwind@0.0.51
  - @ulld/task-manager@0.0.57
  - @ulld/whiteboard@0.0.57

## 0.0.56

### Patch Changes

- Removed imgly for now to address build issue at a later date. Super promising, but there are more important things to focus on for now.
- Updated dependencies
  - @ulld/bib-manager@0.0.56
  - @ulld/calendar@0.0.56
  - @ulld/default-image-map@0.0.56
  - @ulld/diagram@0.0.56
  - @ulld/editor@0.0.56
  - @ulld/embeddable-components@0.0.56
  - @ulld/equations@0.0.56
  - @ulld/full-form@0.0.56
  - @ulld/journal@0.0.56
  - @ulld/navigation@0.0.56
  - @ulld/notebook@0.0.56
  - @ulld/pdf@0.0.56
  - @ulld/plot@0.0.56
  - @ulld/snippets@0.0.56
  - @ulld/tailwind@0.0.50
  - @ulld/task-manager@0.0.56
  - @ulld/whiteboard@0.0.56

## 0.0.55

### Patch Changes

- Fix some task-manager UI issues, and added a method to remove image background to the trpc router.
- Updated dependencies
  - @ulld/bib-manager@0.0.55
  - @ulld/calendar@0.0.55
  - @ulld/default-image-map@0.0.55
  - @ulld/diagram@0.0.55
  - @ulld/editor@0.0.55
  - @ulld/embeddable-components@0.0.55
  - @ulld/equations@0.0.55
  - @ulld/full-form@0.0.55
  - @ulld/journal@0.0.55
  - @ulld/navigation@0.0.55
  - @ulld/notebook@0.0.55
  - @ulld/pdf@0.0.55
  - @ulld/plot@0.0.55
  - @ulld/snippets@0.0.55
  - @ulld/tailwind@0.0.49
  - @ulld/task-manager@0.0.55
  - @ulld/whiteboard@0.0.55

## 0.0.54

### Patch Changes

- Broken build. Attempting to resolve with a new build from remote. The issue might be a result of a dependency relying on a database client that it can't find.
- Updated dependencies
  - @ulld/bib-manager@0.0.54
  - @ulld/calendar@0.0.54
  - @ulld/default-image-map@0.0.54
  - @ulld/diagram@0.0.54
  - @ulld/editor@0.0.54
  - @ulld/embeddable-components@0.0.54
  - @ulld/equations@0.0.54
  - @ulld/full-form@0.0.54
  - @ulld/journal@0.0.54
  - @ulld/navigation@0.0.54
  - @ulld/notebook@0.0.54
  - @ulld/pdf@0.0.54
  - @ulld/plot@0.0.54
  - @ulld/snippets@0.0.54
  - @ulld/tailwind@0.0.48
  - @ulld/task-manager@0.0.54
  - @ulld/whiteboard@0.0.54

## 0.0.53

### Patch Changes

- Update dashboard and equations page to fix minor style issues.
- Updated dependencies
  - @ulld/bib-manager@0.0.53
  - @ulld/calendar@0.0.53
  - @ulld/default-image-map@0.0.53
  - @ulld/diagram@0.0.53
  - @ulld/editor@0.0.53
  - @ulld/embeddable-components@0.0.53
  - @ulld/equations@0.0.53
  - @ulld/full-form@0.0.53
  - @ulld/journal@0.0.53
  - @ulld/navigation@0.0.53
  - @ulld/notebook@0.0.53
  - @ulld/pdf@0.0.53
  - @ulld/plot@0.0.53
  - @ulld/snippets@0.0.53
  - @ulld/tailwind@0.0.47
  - @ulld/task-manager@0.0.53
  - @ulld/whiteboard@0.0.53

## 0.0.52

### Patch Changes

- Fix issue with trpc missing routes.
- Updated dependencies
  - @ulld/bib-manager@0.0.52
  - @ulld/calendar@0.0.52
  - @ulld/default-image-map@0.0.52
  - @ulld/diagram@0.0.52
  - @ulld/editor@0.0.52
  - @ulld/embeddable-components@0.0.52
  - @ulld/equations@0.0.52
  - @ulld/full-form@0.0.52
  - @ulld/journal@0.0.52
  - @ulld/navigation@0.0.52
  - @ulld/notebook@0.0.52
  - @ulld/pdf@0.0.52
  - @ulld/plot@0.0.52
  - @ulld/snippets@0.0.52
  - @ulld/tailwind@0.0.46
  - @ulld/task-manager@0.0.52
  - @ulld/whiteboard@0.0.52

## 0.0.51

### Patch Changes

- Update equations package to address layout issues.
- Updated dependencies
  - @ulld/bib-manager@0.0.51
  - @ulld/calendar@0.0.51
  - @ulld/default-image-map@0.0.51
  - @ulld/diagram@0.0.51
  - @ulld/editor@0.0.51
  - @ulld/embeddable-components@0.0.51
  - @ulld/equations@0.0.51
  - @ulld/full-form@0.0.51
  - @ulld/journal@0.0.51
  - @ulld/navigation@0.0.51
  - @ulld/notebook@0.0.51
  - @ulld/pdf@0.0.51
  - @ulld/plot@0.0.51
  - @ulld/snippets@0.0.51
  - @ulld/tailwind@0.0.45
  - @ulld/task-manager@0.0.51
  - @ulld/whiteboard@0.0.51

## 0.0.50

### Patch Changes

- Update dashboard and included @ulld/plot in the tailwind config sources.
- Updated dependencies
  - @ulld/bib-manager@0.0.50
  - @ulld/calendar@0.0.50
  - @ulld/default-image-map@0.0.50
  - @ulld/diagram@0.0.50
  - @ulld/editor@0.0.50
  - @ulld/embeddable-components@0.0.50
  - @ulld/equations@0.0.50
  - @ulld/full-form@0.0.50
  - @ulld/journal@0.0.50
  - @ulld/navigation@0.0.50
  - @ulld/notebook@0.0.50
  - @ulld/pdf@0.0.50
  - @ulld/plot@0.0.50
  - @ulld/snippets@0.0.50
  - @ulld/tailwind@0.0.44
  - @ulld/task-manager@0.0.50
  - @ulld/whiteboard@0.0.50

## 0.0.49

### Patch Changes

- Update dashboard mostly.
- Updated dependencies
  - @ulld/bib-manager@0.0.49
  - @ulld/calendar@0.0.49
  - @ulld/default-image-map@0.0.49
  - @ulld/diagram@0.0.49
  - @ulld/editor@0.0.49
  - @ulld/embeddable-components@0.0.49
  - @ulld/equations@0.0.49
  - @ulld/full-form@0.0.49
  - @ulld/journal@0.0.49
  - @ulld/navigation@0.0.49
  - @ulld/notebook@0.0.49
  - @ulld/pdf@0.0.49
  - @ulld/plot@0.0.49
  - @ulld/snippets@0.0.49
  - @ulld/tailwind@0.0.43
  - @ulld/task-manager@0.0.49
  - @ulld/whiteboard@0.0.49

## 0.0.48

### Patch Changes

- Removing broken paths.
- Updated dependencies
  - @ulld/bib-manager@0.0.48
  - @ulld/calendar@0.0.48
  - @ulld/default-image-map@0.0.48
  - @ulld/diagram@0.0.48
  - @ulld/editor@0.0.48
  - @ulld/embeddable-components@0.0.48
  - @ulld/equations@0.0.48
  - @ulld/full-form@0.0.48
  - @ulld/journal@0.0.48
  - @ulld/navigation@0.0.48
  - @ulld/notebook@0.0.48
  - @ulld/pdf@0.0.48
  - @ulld/plot@0.0.48
  - @ulld/snippets@0.0.48
  - @ulld/tailwind@0.0.42
  - @ulld/task-manager@0.0.48
  - @ulld/whiteboard@0.0.48

## 0.0.47

### Patch Changes

- Left over development files leaked into the build and are causing build issues. They don't affect anything, but still need to be handled.
- Updated dependencies
  - @ulld/bib-manager@0.0.47
  - @ulld/calendar@0.0.47
  - @ulld/default-image-map@0.0.47
  - @ulld/diagram@0.0.47
  - @ulld/editor@0.0.47
  - @ulld/embeddable-components@0.0.47
  - @ulld/equations@0.0.47
  - @ulld/full-form@0.0.47
  - @ulld/journal@0.0.47
  - @ulld/navigation@0.0.47
  - @ulld/notebook@0.0.47
  - @ulld/pdf@0.0.47
  - @ulld/plot@0.0.47
  - @ulld/snippets@0.0.47
  - @ulld/tailwind@0.0.41
  - @ulld/task-manager@0.0.47
  - @ulld/whiteboard@0.0.47

## 0.0.46

### Patch Changes

- Broke-d the versioning by accidentally marking the eslint package
  private.
- Updated dependencies
  - @ulld/bib-manager@0.0.46
  - @ulld/calendar@0.0.46
  - @ulld/default-image-map@0.0.46
  - @ulld/diagram@0.0.46
  - @ulld/editor@0.0.46
  - @ulld/embeddable-components@0.0.46
  - @ulld/equations@0.0.46
  - @ulld/full-form@0.0.46
  - @ulld/journal@0.0.46
  - @ulld/navigation@0.0.46
  - @ulld/notebook@0.0.46
  - @ulld/pdf@0.0.46
  - @ulld/plot@0.0.46
  - @ulld/snippets@0.0.46
  - @ulld/tailwind@0.0.40
  - @ulld/task-manager@0.0.46
  - @ulld/whiteboard@0.0.46

## 0.0.45

### Patch Changes

- Package version mismatches.
- Updated dependencies
  - @ulld/bib-manager@0.0.45
  - @ulld/calendar@0.0.45
  - @ulld/default-image-map@0.0.45
  - @ulld/diagram@0.0.45
  - @ulld/editor@0.0.45
  - @ulld/embeddable-components@0.0.45
  - @ulld/equations@0.0.45
  - @ulld/full-form@0.0.45
  - @ulld/journal@0.0.45
  - @ulld/navigation@0.0.45
  - @ulld/notebook@0.0.45
  - @ulld/pdf@0.0.45
  - @ulld/plot@0.0.45
  - @ulld/snippets@0.0.45
  - @ulld/tailwind@0.0.39
  - @ulld/task-manager@0.0.45
  - @ulld/whiteboard@0.0.45

## 0.0.44

### Patch Changes

- @ulld/bib-manager@0.0.44
- @ulld/default-image-map@0.0.44
- @ulld/navigation@0.0.44
- @ulld/notebook@0.0.44
- @ulld/pdf@0.0.44
- @ulld/plot@0.0.44
- @ulld/snippets@0.0.44
- @ulld/task-manager@0.0.44
- @ulld/embeddable-components@0.0.44
- @ulld/calendar@0.0.44
- @ulld/diagram@0.0.44
- @ulld/editor@0.0.44
- @ulld/equations@0.0.44
- @ulld/full-form@0.0.44
- @ulld/journal@0.0.44
- @ulld/whiteboard@0.0.44

## 0.0.43

### Patch Changes

- Updated dependencies
  - @ulld/equations@0.0.43
  - @ulld/bib-manager@0.0.43
  - @ulld/default-image-map@0.0.43
  - @ulld/navigation@0.0.43
  - @ulld/notebook@0.0.43
  - @ulld/pdf@0.0.43
  - @ulld/plot@0.0.43
  - @ulld/snippets@0.0.43
  - @ulld/task-manager@0.0.43
  - @ulld/embeddable-components@0.0.43
  - @ulld/calendar@0.0.43
  - @ulld/diagram@0.0.43
  - @ulld/editor@0.0.43
  - @ulld/full-form@0.0.43
  - @ulld/journal@0.0.43
  - @ulld/whiteboard@0.0.43

## 0.0.42

### Patch Changes

- Wrap up the dashboard component and attempt to finalize build script.
- Updated dependencies
  - @ulld/bib-manager@0.0.42
  - @ulld/calendar@0.0.42
  - @ulld/default-image-map@0.0.42
  - @ulld/diagram@0.0.42
  - @ulld/editor@0.0.42
  - @ulld/embeddable-components@0.0.42
  - @ulld/equations@0.0.42
  - @ulld/full-form@0.0.42
  - @ulld/journal@0.0.42
  - @ulld/navigation@0.0.42
  - @ulld/notebook@0.0.42
  - @ulld/pdf@0.0.42
  - @ulld/plot@0.0.42
  - @ulld/snippets@0.0.42
  - @ulld/tailwind@0.0.38
  - @ulld/task-manager@0.0.42
  - @ulld/whiteboard@0.0.42

## 0.0.41

### Patch Changes

- Fix import issues in the dashboard component.
- Updated dependencies
  - @ulld/bib-manager@0.0.41
  - @ulld/calendar@0.0.41
  - @ulld/default-image-map@0.0.41
  - @ulld/diagram@0.0.41
  - @ulld/editor@0.0.41
  - @ulld/embeddable-components@0.0.41
  - @ulld/equations@0.0.41
  - @ulld/full-form@0.0.41
  - @ulld/journal@0.0.41
  - @ulld/navigation@0.0.41
  - @ulld/notebook@0.0.41
  - @ulld/pdf@0.0.41
  - @ulld/plot@0.0.41
  - @ulld/snippets@0.0.41
  - @ulld/tailwind@0.0.37
  - @ulld/task-manager@0.0.41
  - @ulld/whiteboard@0.0.41

## 0.0.40

### Patch Changes

- Update to add utility methods that gather an overview of the user's app to the trpc router.
- Updated dependencies
  - @ulld/bib-manager@0.0.40
  - @ulld/calendar@0.0.40
  - @ulld/default-image-map@0.0.40
  - @ulld/diagram@0.0.40
  - @ulld/editor@0.0.40
  - @ulld/embeddable-components@0.0.40
  - @ulld/equations@0.0.40
  - @ulld/full-form@0.0.40
  - @ulld/journal@0.0.40
  - @ulld/navigation@0.0.40
  - @ulld/notebook@0.0.40
  - @ulld/pdf@0.0.40
  - @ulld/plot@0.0.40
  - @ulld/snippets@0.0.40
  - @ulld/tailwind@0.0.36
  - @ulld/task-manager@0.0.40
  - @ulld/whiteboard@0.0.40

## 0.0.39

### Patch Changes

- Update landing page layout slot.
- Updated dependencies
  - @ulld/bib-manager@0.0.39
  - @ulld/calendar@0.0.39
  - @ulld/default-image-map@0.0.39
  - @ulld/diagram@0.0.39
  - @ulld/editor@0.0.39
  - @ulld/embeddable-components@0.0.39
  - @ulld/equations@0.0.39
  - @ulld/full-form@0.0.39
  - @ulld/journal@0.0.39
  - @ulld/navigation@0.0.39
  - @ulld/notebook@0.0.39
  - @ulld/pdf@0.0.39
  - @ulld/plot@0.0.39
  - @ulld/snippets@0.0.39
  - @ulld/tailwind@0.0.35
  - @ulld/task-manager@0.0.39
  - @ulld/whiteboard@0.0.39

## 0.0.38

### Patch Changes

- Removed some old functions that have been replaced but not implemented everywhere.
- Updated dependencies
  - @ulld/bib-manager@0.0.38
  - @ulld/calendar@0.0.38
  - @ulld/default-image-map@0.0.38
  - @ulld/diagram@0.0.38
  - @ulld/editor@0.0.38
  - @ulld/embeddable-components@0.0.38
  - @ulld/equations@0.0.38
  - @ulld/full-form@0.0.38
  - @ulld/journal@0.0.38
  - @ulld/navigation@0.0.38
  - @ulld/notebook@0.0.38
  - @ulld/pdf@0.0.38
  - @ulld/plot@0.0.38
  - @ulld/snippets@0.0.38
  - @ulld/tailwind@0.0.34
  - @ulld/task-manager@0.0.38
  - @ulld/whiteboard@0.0.38

## 0.0.37

### Patch Changes

- Fix missing files after trying to clean things up while offline.
- Updated dependencies
  - @ulld/bib-manager@0.0.37
  - @ulld/calendar@0.0.37
  - @ulld/default-image-map@0.0.37
  - @ulld/diagram@0.0.37
  - @ulld/editor@0.0.37
  - @ulld/embeddable-components@0.0.37
  - @ulld/equations@0.0.37
  - @ulld/full-form@0.0.37
  - @ulld/journal@0.0.37
  - @ulld/navigation@0.0.37
  - @ulld/notebook@0.0.37
  - @ulld/pdf@0.0.37
  - @ulld/plot@0.0.37
  - @ulld/snippets@0.0.37
  - @ulld/tailwind@0.0.33
  - @ulld/task-manager@0.0.37
  - @ulld/whiteboard@0.0.37

## 0.0.36

### Patch Changes

- Broken database script again...
- Updated dependencies
  - @ulld/bib-manager@0.0.36
  - @ulld/calendar@0.0.36
  - @ulld/default-image-map@0.0.36
  - @ulld/diagram@0.0.36
  - @ulld/editor@0.0.36
  - @ulld/embeddable-components@0.0.36
  - @ulld/equations@0.0.36
  - @ulld/full-form@0.0.36
  - @ulld/journal@0.0.36
  - @ulld/navigation@0.0.36
  - @ulld/notebook@0.0.36
  - @ulld/pdf@0.0.36
  - @ulld/plot@0.0.36
  - @ulld/snippets@0.0.36
  - @ulld/tailwind@0.0.32
  - @ulld/task-manager@0.0.36
  - @ulld/whiteboard@0.0.36

## 0.0.35

### Patch Changes

- Fix broken database generation script.
- Updated dependencies
  - @ulld/bib-manager@0.0.35
  - @ulld/calendar@0.0.35
  - @ulld/default-image-map@0.0.35
  - @ulld/diagram@0.0.35
  - @ulld/editor@0.0.35
  - @ulld/embeddable-components@0.0.35
  - @ulld/equations@0.0.35
  - @ulld/full-form@0.0.35
  - @ulld/journal@0.0.35
  - @ulld/navigation@0.0.35
  - @ulld/notebook@0.0.35
  - @ulld/pdf@0.0.35
  - @ulld/plot@0.0.35
  - @ulld/snippets@0.0.35
  - @ulld/tailwind@0.0.31
  - @ulld/task-manager@0.0.35
  - @ulld/whiteboard@0.0.35

## 0.0.34

### Patch Changes

- Fix some more TS errors that result as part of the build script.
- Updated dependencies
  - @ulld/bib-manager@0.0.34
  - @ulld/calendar@0.0.34
  - @ulld/default-image-map@0.0.34
  - @ulld/diagram@0.0.34
  - @ulld/editor@0.0.34
  - @ulld/embeddable-components@0.0.34
  - @ulld/equations@0.0.34
  - @ulld/full-form@0.0.34
  - @ulld/journal@0.0.34
  - @ulld/navigation@0.0.34
  - @ulld/notebook@0.0.34
  - @ulld/pdf@0.0.34
  - @ulld/plot@0.0.34
  - @ulld/snippets@0.0.34
  - @ulld/tailwind@0.0.30
  - @ulld/task-manager@0.0.34
  - @ulld/whiteboard@0.0.34

## 0.0.33

### Patch Changes

- @ulld/bib-manager@0.0.33
- @ulld/default-image-map@0.0.33
- @ulld/diagram@0.0.33
- @ulld/editor@0.0.33
- @ulld/embeddable-components@0.0.33
- @ulld/equations@0.0.33
- @ulld/full-form@0.0.33
- @ulld/journal@0.0.33
- @ulld/navigation@0.0.33
- @ulld/notebook@0.0.33
- @ulld/pdf@0.0.33
- @ulld/plot@0.0.33
- @ulld/snippets@0.0.33
- @ulld/tailwind@0.0.29
- @ulld/task-manager@0.0.33
- @ulld/whiteboard@0.0.33
- @ulld/calendar@0.0.33

## 0.0.32

### Patch Changes

- Need to come up with a much better deployement script. This is a
  nightmare always forgetting to run specific scripts first.
- Updated dependencies
  - @ulld/bib-manager@0.0.32
  - @ulld/calendar@0.0.32
  - @ulld/default-image-map@0.0.32
  - @ulld/diagram@0.0.32
  - @ulld/editor@0.0.32
  - @ulld/embeddable-components@0.0.32
  - @ulld/equations@0.0.32
  - @ulld/full-form@0.0.32
  - @ulld/journal@0.0.32
  - @ulld/navigation@0.0.32
  - @ulld/notebook@0.0.32
  - @ulld/pdf@0.0.32
  - @ulld/plot@0.0.32
  - @ulld/snippets@0.0.32
  - @ulld/tailwind@0.0.29
  - @ulld/task-manager@0.0.32
  - @ulld/whiteboard@0.0.32

## 0.0.31

### Patch Changes

- Broken plugin slot after deleted a slot and didn't remove it from the
  slotMap.
- Updated dependencies
  - @ulld/bib-manager@0.0.31
  - @ulld/calendar@0.0.31
  - @ulld/default-image-map@0.0.31
  - @ulld/diagram@0.0.31
  - @ulld/editor@0.0.31
  - @ulld/embeddable-components@0.0.31
  - @ulld/equations@0.0.31
  - @ulld/full-form@0.0.31
  - @ulld/journal@0.0.31
  - @ulld/navigation@0.0.31
  - @ulld/notebook@0.0.31
  - @ulld/pdf@0.0.31
  - @ulld/plot@0.0.31
  - @ulld/snippets@0.0.31
  - @ulld/tailwind@0.0.28
  - @ulld/task-manager@0.0.31
  - @ulld/whiteboard@0.0.31

## 0.0.30

### Patch Changes

- Much plugin config generation script.
- Updated dependencies
  - @ulld/bib-manager@0.0.30
  - @ulld/calendar@0.0.30
  - @ulld/default-image-map@0.0.30
  - @ulld/diagram@0.0.30
  - @ulld/editor@0.0.30
  - @ulld/embeddable-components@0.0.30
  - @ulld/equations@0.0.30
  - @ulld/full-form@0.0.30
  - @ulld/journal@0.0.30
  - @ulld/navigation@0.0.30
  - @ulld/notebook@0.0.30
  - @ulld/pdf@0.0.30
  - @ulld/plot@0.0.30
  - @ulld/snippets@0.0.30
  - @ulld/tailwind@0.0.27
  - @ulld/task-manager@0.0.30
  - @ulld/whiteboard@0.0.30

## 0.0.29

### Patch Changes

- Update database build script.
- Updated dependencies
  - @ulld/bib-manager@0.0.29
  - @ulld/calendar@0.0.29
  - @ulld/default-image-map@0.0.29
  - @ulld/diagram@0.0.29
  - @ulld/editor@0.0.29
  - @ulld/embeddable-components@0.0.29
  - @ulld/equations@0.0.29
  - @ulld/full-form@0.0.29
  - @ulld/journal@0.0.29
  - @ulld/navigation@0.0.29
  - @ulld/notebook@0.0.29
  - @ulld/pdf@0.0.29
  - @ulld/plot@0.0.29
  - @ulld/snippets@0.0.29
  - @ulld/tailwind@0.0.26
  - @ulld/task-manager@0.0.29
  - @ulld/whiteboard@0.0.29

## 0.0.28

### Patch Changes

- Fixed a few TS errors that result as part of the build process.
- Updated dependencies
  - @ulld/bib-manager@0.0.28
  - @ulld/calendar@0.0.28
  - @ulld/default-image-map@0.0.28
  - @ulld/diagram@0.0.28
  - @ulld/editor@0.0.28
  - @ulld/embeddable-components@0.0.28
  - @ulld/equations@0.0.28
  - @ulld/full-form@0.0.28
  - @ulld/journal@0.0.28
  - @ulld/navigation@0.0.28
  - @ulld/notebook@0.0.28
  - @ulld/pdf@0.0.28
  - @ulld/plot@0.0.28
  - @ulld/snippets@0.0.28
  - @ulld/tailwind@0.0.25
  - @ulld/task-manager@0.0.28
  - @ulld/whiteboard@0.0.28

## 0.0.27

### Patch Changes

- Moved all references to prisma to referring to the internal DB package
  directly.
- Updated dependencies
  - @ulld/bib-manager@0.0.27
  - @ulld/calendar@0.0.27
  - @ulld/default-image-map@0.0.27
  - @ulld/diagram@0.0.27
  - @ulld/editor@0.0.27
  - @ulld/embeddable-components@0.0.27
  - @ulld/equations@0.0.27
  - @ulld/full-form@0.0.27
  - @ulld/journal@0.0.27
  - @ulld/navigation@0.0.27
  - @ulld/notebook@0.0.27
  - @ulld/pdf@0.0.27
  - @ulld/plot@0.0.27
  - @ulld/snippets@0.0.27
  - @ulld/tailwind@0.0.24
  - @ulld/task-manager@0.0.27
  - @ulld/whiteboard@0.0.27

## 0.0.26

### Patch Changes

- Doing everything twice after reverting parts of the package.json files
  in almost all internal packages.
- Updated dependencies
  - @ulld/bib-manager@0.0.26
  - @ulld/calendar@0.0.26
  - @ulld/default-image-map@0.0.26
  - @ulld/diagram@0.0.26
  - @ulld/editor@0.0.26
  - @ulld/embeddable-components@0.0.26
  - @ulld/equations@0.0.26
  - @ulld/full-form@0.0.26
  - @ulld/journal@0.0.26
  - @ulld/navigation@0.0.26
  - @ulld/notebook@0.0.26
  - @ulld/pdf@0.0.26
  - @ulld/plot@0.0.26
  - @ulld/snippets@0.0.26
  - @ulld/tailwind@0.0.23
  - @ulld/task-manager@0.0.26
  - @ulld/whiteboard@0.0.26

## 0.0.25

### Patch Changes

- @ulld/bib-manager@0.0.25
- @ulld/equations@0.0.25
- @ulld/full-form@0.0.25
- @ulld/snippets@0.0.25
- @ulld/diagram@0.0.25
- @ulld/embeddable-components@0.0.25
- @ulld/journal@0.0.25
- @ulld/navigation@0.0.25
- @ulld/notebook@0.0.25
- @ulld/pdf@0.0.25
- @ulld/plot@0.0.25
- @ulld/task-manager@0.0.25
- @ulld/whiteboard@0.0.25
- @ulld/calendar@0.0.25
- @ulld/editor@0.0.25
- @ulld/default-image-map@0.0.25

## 0.0.24

### Patch Changes

- @ulld/bib-manager@0.0.24
- @ulld/equations@0.0.24
- @ulld/full-form@0.0.24
- @ulld/snippets@0.0.24
- @ulld/diagram@0.0.24
- @ulld/embeddable-components@0.0.24
- @ulld/journal@0.0.24
- @ulld/navigation@0.0.24
- @ulld/notebook@0.0.24
- @ulld/pdf@0.0.24
- @ulld/plot@0.0.24
- @ulld/task-manager@0.0.24
- @ulld/whiteboard@0.0.24
- @ulld/calendar@0.0.24
- @ulld/editor@0.0.24
- @ulld/default-image-map@0.0.24

## 0.0.23

### Patch Changes

- Fixing mismatched version after reverting package.json files that blew up while working on the build process.
- Updated dependencies
  - @ulld/bib-manager@0.0.23
  - @ulld/calendar@0.0.23
  - @ulld/default-image-map@0.0.23
  - @ulld/diagram@0.0.23
  - @ulld/editor@0.0.23
  - @ulld/embeddable-components@0.0.23
  - @ulld/equations@0.0.23
  - @ulld/full-form@0.0.23
  - @ulld/journal@0.0.23
  - @ulld/navigation@0.0.23
  - @ulld/notebook@0.0.23
  - @ulld/pdf@0.0.23
  - @ulld/plot@0.0.23
  - @ulld/snippets@0.0.23
  - @ulld/tailwind@0.0.22
  - @ulld/task-manager@0.0.23
  - @ulld/whiteboard@0.0.23

## 0.0.9

### Patch Changes

- Lord I hope these package.json files are back in working order.
- Updated dependencies
  - @ulld/bib-manager@0.0.9
  - @ulld/calendar@0.0.9
  - @ulld/default-image-map@0.0.9
  - @ulld/diagram@0.0.9
  - @ulld/editor@0.0.9
  - @ulld/embeddable-components@0.0.9
  - @ulld/equations@0.0.9
  - @ulld/full-form@0.0.9
  - @ulld/journal@0.0.9
  - @ulld/navigation@0.0.9
  - @ulld/notebook@0.0.9
  - @ulld/pdf@0.0.9
  - @ulld/plot@0.0.9
  - @ulld/snippets@0.0.9
  - @ulld/tailwind@0.0.9
  - @ulld/task-manager@0.0.9
  - @ulld/whiteboard@0.0.9

## 0.0.22

### Patch Changes

- Update react version and lift to monorepo root.
- Updated dependencies
  - @ulld/bib-manager@0.0.22
  - @ulld/calendar@0.0.22
  - @ulld/default-image-map@0.0.22
  - @ulld/diagram@0.0.22
  - @ulld/editor@0.0.22
  - @ulld/embeddable-components@0.0.22
  - @ulld/equations@0.0.22
  - @ulld/full-form@0.0.22
  - @ulld/journal@0.0.22
  - @ulld/navigation@0.0.22
  - @ulld/notebook@0.0.22
  - @ulld/pdf@0.0.22
  - @ulld/plot@0.0.22
  - @ulld/snippets@0.0.22
  - @ulld/tailwind@0.0.21
  - @ulld/task-manager@0.0.22
  - @ulld/whiteboard@0.0.22

## 0.0.21

### Patch Changes

- 06a2aa9: Patch bump, resolved a ton of TS errors in most of the core packages.
- Patch bump after cleaning all TS errors in most core internal packages.
- Updated dependencies [06a2aa9]
- Updated dependencies
  - @ulld/bib-manager@0.0.21
  - @ulld/calendar@0.0.21
  - @ulld/default-image-map@0.0.21
  - @ulld/diagram@0.0.21
  - @ulld/editor@0.0.21
  - @ulld/embeddable-components@0.0.21
  - @ulld/equations@0.0.21
  - @ulld/full-form@0.0.21
  - @ulld/journal@0.0.21
  - @ulld/navigation@0.0.21
  - @ulld/notebook@0.0.21
  - @ulld/pdf@0.0.21
  - @ulld/plot@0.0.21
  - @ulld/snippets@0.0.21
  - @ulld/tailwind@0.0.20
  - @ulld/task-manager@0.0.21
  - @ulld/whiteboard@0.0.21

## 0.0.20

### Patch Changes

- Broken prisma script.
- Updated dependencies
  - @ulld/bib-manager@0.0.20
  - @ulld/calendar@0.0.20
  - @ulld/default-image-map@0.0.20
  - @ulld/diagram@0.0.20
  - @ulld/editor@0.0.20
  - @ulld/embeddable-components@0.0.20
  - @ulld/equations@0.0.20
  - @ulld/full-form@0.0.20
  - @ulld/journal@0.0.20
  - @ulld/navigation@0.0.20
  - @ulld/notebook@0.0.20
  - @ulld/pdf@0.0.20
  - @ulld/plot@0.0.20
  - @ulld/snippets@0.0.20
  - @ulld/tailwind@0.0.19
  - @ulld/task-manager@0.0.20
  - @ulld/whiteboard@0.0.20

## 0.0.19

### Patch Changes

- Update prisma export.
- Updated dependencies
  - @ulld/bib-manager@0.0.19
  - @ulld/calendar@0.0.19
  - @ulld/default-image-map@0.0.19
  - @ulld/diagram@0.0.19
  - @ulld/editor@0.0.19
  - @ulld/embeddable-components@0.0.19
  - @ulld/equations@0.0.19
  - @ulld/full-form@0.0.19
  - @ulld/journal@0.0.19
  - @ulld/navigation@0.0.19
  - @ulld/notebook@0.0.19
  - @ulld/pdf@0.0.19
  - @ulld/plot@0.0.19
  - @ulld/snippets@0.0.19
  - @ulld/tailwind@0.0.18
  - @ulld/task-manager@0.0.19
  - @ulld/whiteboard@0.0.19

## 0.0.18

### Patch Changes

- Removed next-mdx-remote entirely. Now using mdx package directly.
- Updated dependencies
  - @ulld/bib-manager@0.0.18
  - @ulld/calendar@0.0.18
  - @ulld/default-image-map@0.0.18
  - @ulld/diagram@0.0.18
  - @ulld/editor@0.0.18
  - @ulld/embeddable-components@0.0.18
  - @ulld/equations@0.0.18
  - @ulld/full-form@0.0.18
  - @ulld/journal@0.0.18
  - @ulld/navigation@0.0.18
  - @ulld/notebook@0.0.18
  - @ulld/pdf@0.0.18
  - @ulld/plot@0.0.18
  - @ulld/snippets@0.0.18
  - @ulld/tailwind@0.0.17
  - @ulld/task-manager@0.0.18
  - @ulld/whiteboard@0.0.18

## 0.0.17

### Patch Changes

- Fix a bunch of misaligned references.
- Updated dependencies
  - @ulld/bib-manager@0.0.17
  - @ulld/calendar@0.0.17
  - @ulld/default-image-map@0.0.17
  - @ulld/diagram@0.0.17
  - @ulld/editor@0.0.17
  - @ulld/embeddable-components@0.0.17
  - @ulld/equations@0.0.17
  - @ulld/full-form@0.0.17
  - @ulld/journal@0.0.17
  - @ulld/navigation@0.0.17
  - @ulld/notebook@0.0.17
  - @ulld/pdf@0.0.17
  - @ulld/plot@0.0.17
  - @ulld/snippets@0.0.17
  - @ulld/tailwind@0.0.16
  - @ulld/task-manager@0.0.17
  - @ulld/whiteboard@0.0.17

## 0.0.16

### Patch Changes

- Update sync method.
- Updated dependencies
  - @ulld/bib-manager@0.0.16
  - @ulld/calendar@0.0.16
  - @ulld/default-image-map@0.0.16
  - @ulld/diagram@0.0.16
  - @ulld/editor@0.0.16
  - @ulld/embeddable-components@0.0.16
  - @ulld/equations@0.0.16
  - @ulld/full-form@0.0.16
  - @ulld/journal@0.0.16
  - @ulld/navigation@0.0.16
  - @ulld/notebook@0.0.16
  - @ulld/pdf@0.0.16
  - @ulld/plot@0.0.16
  - @ulld/snippets@0.0.16
  - @ulld/tailwind@0.0.15
  - @ulld/task-manager@0.0.16
  - @ulld/whiteboard@0.0.16

## 0.0.15

### Patch Changes

- Update misaligned imports.
- Updated dependencies
  - @ulld/bib-manager@0.0.15
  - @ulld/calendar@0.0.15
  - @ulld/default-image-map@0.0.15
  - @ulld/diagram@0.0.15
  - @ulld/editor@0.0.15
  - @ulld/embeddable-components@0.0.15
  - @ulld/equations@0.0.15
  - @ulld/full-form@0.0.15
  - @ulld/journal@0.0.15
  - @ulld/navigation@0.0.15
  - @ulld/notebook@0.0.15
  - @ulld/pdf@0.0.15
  - @ulld/plot@0.0.15
  - @ulld/snippets@0.0.15
  - @ulld/tailwind@0.0.14
  - @ulld/task-manager@0.0.15
  - @ulld/whiteboard@0.0.15

## 0.0.14

### Patch Changes

- Fix issue created by the build script.
- Updated dependencies
  - @ulld/bib-manager@0.0.14
  - @ulld/calendar@0.0.14
  - @ulld/default-image-map@0.0.14
  - @ulld/diagram@0.0.14
  - @ulld/editor@0.0.14
  - @ulld/embeddable-components@0.0.14
  - @ulld/equations@0.0.14
  - @ulld/full-form@0.0.14
  - @ulld/journal@0.0.14
  - @ulld/navigation@0.0.14
  - @ulld/notebook@0.0.14
  - @ulld/pdf@0.0.14
  - @ulld/plot@0.0.14
  - @ulld/snippets@0.0.14
  - @ulld/tailwind@0.0.13
  - @ulld/task-manager@0.0.14
  - @ulld/whiteboard@0.0.14

## 0.0.13

### Patch Changes

- Update missing source paths.
- Updated dependencies
  - @ulld/bib-manager@0.0.13
  - @ulld/calendar@0.0.13
  - @ulld/default-image-map@0.0.13
  - @ulld/diagram@0.0.13
  - @ulld/editor@0.0.13
  - @ulld/embeddable-components@0.0.13
  - @ulld/equations@0.0.13
  - @ulld/full-form@0.0.13
  - @ulld/journal@0.0.13
  - @ulld/navigation@0.0.13
  - @ulld/notebook@0.0.13
  - @ulld/pdf@0.0.13
  - @ulld/plot@0.0.13
  - @ulld/snippets@0.0.13
  - @ulld/tailwind@0.0.12
  - @ulld/task-manager@0.0.13
  - @ulld/whiteboard@0.0.13

## 0.0.12

### Patch Changes

- Update file source paths. Build script modified the files path in the form package, causing the build to fail.
- Updated dependencies
  - @ulld/full-form@0.0.12
  - @ulld/bib-manager@0.0.12
  - @ulld/calendar@0.0.12
  - @ulld/default-image-map@0.0.12
  - @ulld/diagram@0.0.12
  - @ulld/editor@0.0.12
  - @ulld/embeddable-components@0.0.12
  - @ulld/equations@0.0.12
  - @ulld/journal@0.0.12
  - @ulld/navigation@0.0.12
  - @ulld/notebook@0.0.12
  - @ulld/pdf@0.0.12
  - @ulld/plot@0.0.12
  - @ulld/snippets@0.0.12
  - @ulld/tailwind@0.0.11
  - @ulld/task-manager@0.0.12
  - @ulld/whiteboard@0.0.12

## 0.0.11

### Patch Changes

- Update remote to fix some misaligned imports mostly.
- Updated dependencies
  - @ulld/bib-manager@0.0.11
  - @ulld/calendar@0.0.11
  - @ulld/default-image-map@0.0.11
  - @ulld/diagram@0.0.11
  - @ulld/editor@0.0.11
  - @ulld/embeddable-components@0.0.11
  - @ulld/equations@0.0.11
  - @ulld/full-form@0.0.11
  - @ulld/journal@0.0.11
  - @ulld/navigation@0.0.11
  - @ulld/notebook@0.0.11
  - @ulld/pdf@0.0.11
  - @ulld/plot@0.0.11
  - @ulld/snippets@0.0.11
  - @ulld/tailwind@0.0.10
  - @ulld/task-manager@0.0.11
  - @ulld/whiteboard@0.0.11

## 0.0.10

### Patch Changes

- Update dependency versions, moved a bunch of stuff to peer dependencies to avoid version conflicts, fixed a bunch of errors mostly around client side / server side issues, and adjusted a few misaligned imports.
- Updated dependencies
  - @ulld/bib-manager@0.0.10
  - @ulld/calendar@0.0.10
  - @ulld/default-image-map@0.0.10
  - @ulld/diagram@0.0.10
  - @ulld/editor@0.0.10
  - @ulld/embeddable-components@0.0.10
  - @ulld/equations@0.0.10
  - @ulld/full-form@0.0.10
  - @ulld/journal@0.0.10
  - @ulld/navigation@0.0.10
  - @ulld/notebook@0.0.10
  - @ulld/pdf@0.0.10
  - @ulld/plot@0.0.10
  - @ulld/snippets@0.0.10
  - @ulld/tailwind@0.0.9
  - @ulld/task-manager@0.0.10
  - @ulld/whiteboard@0.0.10

## 0.0.9

### Patch Changes

- Updated dependencies
  - @ulld/bib-manager@0.0.9
  - @ulld/diagram@0.0.9
  - @ulld/embeddable-components@0.0.9
  - @ulld/equations@0.0.9
  - @ulld/full-form@0.0.9
  - @ulld/journal@0.0.9
  - @ulld/navigation@0.0.9
  - @ulld/notebook@0.0.9
  - @ulld/pdf@0.0.9
  - @ulld/plot@0.0.9
  - @ulld/snippets@0.0.9
  - @ulld/task-manager@0.0.9
  - @ulld/whiteboard@0.0.9
  - @ulld/editor@0.0.9
  - @ulld/default-image-map@0.0.9
  - @ulld/calendar@0.0.9

## 0.0.8

### Patch Changes

- 609abeb: Add missing plugin configs.
- Updated dependencies [609abeb]
  - @ulld/task-manager@0.0.8
  - @ulld/bib-manager@0.0.8
  - @ulld/navigation@0.0.8
  - @ulld/full-form@0.0.8
  - @ulld/snippets@0.0.8
  - @ulld/pdf@0.0.8
  - @ulld/calendar@0.0.8
  - @ulld/default-image-map@0.0.8
  - @ulld/diagram@0.0.8
  - @ulld/editor@0.0.8
  - @ulld/embeddable-components@0.0.8
  - @ulld/equations@0.0.8
  - @ulld/journal@0.0.8
  - @ulld/notebook@0.0.8
  - @ulld/plot@0.0.8
  - @ulld/tailwind@0.0.8
  - @ulld/whiteboard@0.0.8

## 0.0.7

### Patch Changes

- Update to match base app's template progress.
- Updated dependencies
  - @ulld/embeddable-components@0.0.7
  - @ulld/default-image-map@0.0.7
  - @ulld/tailwind@0.0.7
  - @ulld/task-manager@0.0.7
  - @ulld/bib-manager@0.0.7
  - @ulld/navigation@0.0.7
  - @ulld/whiteboard@0.0.7
  - @ulld/equations@0.0.7
  - @ulld/full-form@0.0.7
  - @ulld/calendar@0.0.7
  - @ulld/notebook@0.0.7
  - @ulld/snippets@0.0.7
  - @ulld/diagram@0.0.7
  - @ulld/journal@0.0.7
  - @ulld/editor@0.0.7
  - @ulld/plot@0.0.7
  - @ulld/pdf@0.0.7

## 0.0.6

### Patch Changes

- Removed all unpublished packages dynamically.
- Updated dependencies
  - @ulld/embeddable-components@0.0.6
  - @ulld/default-image-map@0.0.6
  - @ulld/tailwind@0.0.6
  - @ulld/task-manager@0.0.6
  - @ulld/bib-manager@0.0.6
  - @ulld/navigation@0.0.6
  - @ulld/whiteboard@0.0.6
  - @ulld/equations@0.0.6
  - @ulld/full-form@0.0.6
  - @ulld/calendar@0.0.6
  - @ulld/notebook@0.0.6
  - @ulld/snippets@0.0.6
  - @ulld/diagram@0.0.6
  - @ulld/journal@0.0.6
  - @ulld/editor@0.0.6
  - @ulld/plot@0.0.6
  - @ulld/pdf@0.0.6

## 0.0.5

### Patch Changes

- One more time with this cluster\*\*\*\* of dependencies.
- Updated dependencies
  - @ulld/embeddable-components@0.0.5
  - @ulld/default-image-map@0.0.5
  - @ulld/health-tracking@0.0.5
  - @ulld/tailwind@0.0.5
  - @ulld/task-manager@0.0.5
  - @ulld/bib-manager@0.0.5
  - @ulld/navigation@0.0.5
  - @ulld/whiteboard@0.0.5
  - @ulld/equations@0.0.5
  - @ulld/full-form@0.0.5
  - @ulld/calendar@0.0.5
  - @ulld/notebook@0.0.5
  - @ulld/snippets@0.0.5
  - @ulld/diagram@0.0.5
  - @ulld/journal@0.0.5
  - @ulld/editor@0.0.5
  - @ulld/plot@0.0.5
  - @ulld/pdf@0.0.5

## 0.0.4

### Patch Changes

- Remove cookbook dependency.
- Updated dependencies
  - @ulld/embeddable-components@0.0.4
  - @ulld/default-image-map@0.0.4
  - @ulld/health-tracking@0.0.4
  - @ulld/tailwind@0.0.4
  - @ulld/note-network@0.0.4
  - @ulld/task-manager@0.0.4
  - @ulld/bib-manager@0.0.4
  - @ulld/navigation@0.0.4
  - @ulld/whiteboard@0.0.4
  - @ulld/equations@0.0.4
  - @ulld/full-form@0.0.4
  - @ulld/calendar@0.0.4
  - @ulld/notebook@0.0.4
  - @ulld/snippets@0.0.4
  - @ulld/diagram@0.0.4
  - @ulld/journal@0.0.4
  - @ulld/editor@0.0.4
  - @ulld/kanban@0.0.4
  - @ulld/plot@0.0.4
  - @ulld/pdf@0.0.4

## 0.0.3

### Patch Changes

- Update to include utility repo dependencies.
- Updated dependencies
  - @ulld/embeddable-components@0.0.3
  - @ulld/default-image-map@0.0.3
  - @ulld/health-tracking@0.0.3
  - @ulld/tailwind@0.0.3
  - @ulld/note-network@0.0.3
  - @ulld/task-manager@0.0.3
  - @ulld/bib-manager@0.0.3
  - @ulld/navigation@0.0.3
  - @ulld/whiteboard@0.0.3
  - @ulld/equations@0.0.3
  - @ulld/full-form@0.0.3
  - @ulld/calendar@0.0.3
  - @ulld/cookbook@0.0.3
  - @ulld/notebook@0.0.3
  - @ulld/snippets@0.0.3
  - @ulld/diagram@0.0.3
  - @ulld/journal@0.0.3
  - @ulld/editor@0.0.3
  - @ulld/kanban@0.0.3
  - @ulld/plot@0.0.3
  - @ulld/pdf@0.0.3

## 0.0.2

### Patch Changes

- ceb2d95: Update dependencies to support base-configs.
- Updated dependencies [ceb2d95]
  - @ulld/embeddable-components@0.0.2
  - @ulld/default-image-map@0.0.2
  - @ulld/health-tracking@0.0.2
  - @ulld/tailwind@0.0.2
  - @ulld/note-network@0.0.2
  - @ulld/task-manager@0.0.2
  - @ulld/bib-manager@0.0.2
  - @ulld/navigation@0.0.2
  - @ulld/whiteboard@0.0.2
  - @ulld/equations@0.0.2
  - @ulld/full-form@0.0.2
  - @ulld/calendar@0.0.2
  - @ulld/cookbook@0.0.2
  - @ulld/notebook@0.0.2
  - @ulld/snippets@0.0.2
  - @ulld/diagram@0.0.2
  - @ulld/journal@0.0.2
  - @ulld/editor@0.0.2
  - @ulld/kanban@0.0.2
  - @ulld/plot@0.0.2
  - @ulld/pdf@0.0.2

## 0.0.1

### Patch Changes

- Publish to work on build script.
- Updated dependencies
  - @ulld/embeddable-components@0.0.1
  - @ulld/default-image-map@0.0.1
  - @ulld/health-tracking@0.0.1
  - @ulld/tailwind@0.0.1
  - @ulld/note-network@0.0.1
  - @ulld/task-manager@0.0.1
  - @ulld/bib-manager@0.0.1
  - @ulld/navigation@0.0.1
  - @ulld/whiteboard@0.0.1
  - @ulld/equations@0.0.1
  - @ulld/full-form@0.0.1
  - @ulld/calendar@0.0.1
  - @ulld/cookbook@0.0.1
  - @ulld/notebook@0.0.1
  - @ulld/snippets@0.0.1
  - @ulld/diagram@0.0.1
  - @ulld/journal@0.0.1
  - @ulld/editor@0.0.1
  - @ulld/kanban@0.0.1
  - @ulld/plot@0.0.1
  - @ulld/pdf@0.0.1
