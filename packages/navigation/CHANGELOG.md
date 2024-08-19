# @ulld/navigation

## 0.0.78

### Patch Changes

- Revert approach to bib parsing.
- Updated dependencies
  - @ulld/api@0.0.78
  - @ulld/eslint-config@0.0.74
  - @ulld/typescript-config@0.0.72
  - @ulld/configschema@0.0.78
  - @ulld/developer@0.0.78
  - @ulld/developer-schemas@0.0.72
  - @ulld/full-form@0.0.78
  - @ulld/hooks@0.0.78
  - @ulld/icons@0.0.78
  - @ulld/jest-presets@0.0.72
  - @ulld/render@0.0.78
  - @ulld/state@0.0.78
  - @ulld/tailwind@0.0.72
  - @ulld/types@0.0.72
  - @ulld/utilities@0.0.78

## 0.0.77

### Patch Changes

- Update trying to address bib sync issue in production.
- Updated dependencies
  - @ulld/api@0.0.77
  - @ulld/eslint-config@0.0.73
  - @ulld/typescript-config@0.0.71
  - @ulld/configschema@0.0.77
  - @ulld/developer@0.0.77
  - @ulld/developer-schemas@0.0.71
  - @ulld/full-form@0.0.77
  - @ulld/hooks@0.0.77
  - @ulld/icons@0.0.77
  - @ulld/jest-presets@0.0.71
  - @ulld/render@0.0.77
  - @ulld/state@0.0.77
  - @ulld/tailwind@0.0.71
  - @ulld/types@0.0.71
  - @ulld/utilities@0.0.77

## 0.0.76

### Patch Changes

- Updates to dependencies to allow new pnpm install strategy.
- Updated dependencies
  - @ulld/api@0.0.76
  - @ulld/eslint-config@0.0.72
  - @ulld/typescript-config@0.0.70
  - @ulld/configschema@0.0.76
  - @ulld/developer@0.0.76
  - @ulld/developer-schemas@0.0.70
  - @ulld/full-form@0.0.76
  - @ulld/hooks@0.0.76
  - @ulld/icons@0.0.76
  - @ulld/jest-presets@0.0.70
  - @ulld/render@0.0.76
  - @ulld/state@0.0.76
  - @ulld/tailwind@0.0.70
  - @ulld/types@0.0.70
  - @ulld/utilities@0.0.76

## 0.0.75

### Patch Changes

- Update missing or misaligned dependencies to work with new pnpm build process.
- Updated dependencies
  - @ulld/api@0.0.75
  - @ulld/eslint-config@0.0.71
  - @ulld/typescript-config@0.0.69
  - @ulld/configschema@0.0.75
  - @ulld/developer@0.0.75
  - @ulld/developer-schemas@0.0.69
  - @ulld/hooks@0.0.75
  - @ulld/icons@0.0.75
  - @ulld/jest-presets@0.0.69
  - @ulld/render@0.0.75
  - @ulld/state@0.0.75
  - @ulld/tailwind@0.0.69
  - @ulld/types@0.0.69
  - @ulld/utilities@0.0.75

## 0.0.74

### Patch Changes

- Fix broken imports created when build blew up.
- Updated dependencies
  - @ulld/api@0.0.74
  - @ulld/eslint-config@0.0.70
  - @ulld/typescript-config@0.0.68
  - @ulld/configschema@0.0.74
  - @ulld/developer@0.0.74
  - @ulld/developer-schemas@0.0.68
  - @ulld/hooks@0.0.74
  - @ulld/icons@0.0.74
  - @ulld/jest-presets@0.0.68
  - @ulld/render@0.0.74
  - @ulld/state@0.0.74
  - @ulld/tailwind@0.0.68
  - @ulld/types@0.0.68
  - @ulld/utilities@0.0.74

## 0.0.73

### Patch Changes

- Moved most or all of internal deps to peer to try and resolve circular deps issue.
- Updated dependencies
  - @ulld/api@0.0.73
  - @ulld/eslint-config@0.0.69
  - @ulld/typescript-config@0.0.67
  - @ulld/configschema@0.0.73
  - @ulld/developer@0.0.73
  - @ulld/developer-schemas@0.0.67
  - @ulld/hooks@0.0.73
  - @ulld/icons@0.0.73
  - @ulld/jest-presets@0.0.67
  - @ulld/render@0.0.73
  - @ulld/state@0.0.73
  - @ulld/tailwind@0.0.67
  - @ulld/types@0.0.67
  - @ulld/utilities@0.0.73

## 0.0.72

### Patch Changes

- Remove @ulld/notebook from all. Seems to be causing memory issue.
- Updated dependencies
  - @ulld/api@0.0.72
  - @ulld/eslint-config@0.0.68
  - @ulld/typescript-config@0.0.66
  - @ulld/configschema@0.0.72
  - @ulld/developer@0.0.72
  - @ulld/developer-schemas@0.0.66
  - @ulld/hooks@0.0.72
  - @ulld/icons@0.0.72
  - @ulld/jest-presets@0.0.66
  - @ulld/render@0.0.72
  - @ulld/state@0.0.72
  - @ulld/tailwind@0.0.66
  - @ulld/types@0.0.66
  - @ulld/utilities@0.0.72

## 0.0.71

### Patch Changes

- Move most peerDeps to normal.
  Pnpm was reaching the heap limit, and the issue appeared to revolve around peerDeps. There's no guarantee that this will work, but it's worth a shot.
- Updated dependencies
  - @ulld/api@0.0.71
  - @ulld/eslint-config@0.0.67
  - @ulld/typescript-config@0.0.65
  - @ulld/configschema@0.0.71
  - @ulld/developer@0.0.71
  - @ulld/developer-schemas@0.0.65
  - @ulld/hooks@0.0.71
  - @ulld/icons@0.0.71
  - @ulld/jest-presets@0.0.65
  - @ulld/render@0.0.71
  - @ulld/state@0.0.71
  - @ulld/tailwind@0.0.65
  - @ulld/types@0.0.65
  - @ulld/utilities@0.0.71

## 0.0.70

### Patch Changes

- Remove dist dirs trying to resolve build heap memory issue.
- Updated dependencies
  - @ulld/api@0.0.70
  - @ulld/eslint-config@0.0.66
  - @ulld/typescript-config@0.0.64
  - @ulld/configschema@0.0.70
  - @ulld/developer@0.0.70
  - @ulld/developer-schemas@0.0.64
  - @ulld/hooks@0.0.70
  - @ulld/icons@0.0.70
  - @ulld/render@0.0.70
  - @ulld/state@0.0.70
  - @ulld/tailwind@0.0.64
  - @ulld/utilities@0.0.70

## 0.0.69

### Patch Changes

- A lot of progress towards build completeness.
- Updated dependencies
  - @ulld/api@0.0.69
  - @ulld/eslint-config@0.0.65
  - @ulld/typescript-config@0.0.63
  - @ulld/configschema@0.0.69
  - @ulld/developer@0.0.69
  - @ulld/developer-schemas@0.0.63
  - @ulld/hooks@0.0.69
  - @ulld/icons@0.0.69
  - @ulld/render@0.0.69
  - @ulld/state@0.0.69
  - @ulld/tailwind@0.0.63
  - @ulld/utilities@0.0.69

## 0.0.68

### Patch Changes

- Going back on the individual prisma generator approach for now. It's failing to run in the generated app, even when the dependencies are specified as regular runtime dependencies and not dev-dependencies.
- Updated dependencies
  - @ulld/api@0.0.68
  - @ulld/eslint-config@0.0.64
  - @ulld/typescript-config@0.0.62
  - @ulld/configschema@0.0.68
  - @ulld/developer@0.0.68
  - @ulld/developer-schemas@0.0.62
  - @ulld/hooks@0.0.68
  - @ulld/icons@0.0.68
  - @ulld/state@0.0.68
  - @ulld/tailwind@0.0.62
  - @ulld/ui@0.0.68
  - @ulld/utilities@0.0.68

## 0.0.67

### Patch Changes

- Had to add database dev dependencies to regular dependencies to avoid build issues in the target app.
- Updated dependencies
  - @ulld/api@0.0.67
  - @ulld/eslint-config@0.0.63
  - @ulld/typescript-config@0.0.61
  - @ulld/configschema@0.0.67
  - @ulld/developer@0.0.67
  - @ulld/developer-schemas@0.0.61
  - @ulld/hooks@0.0.67
  - @ulld/icons@0.0.67
  - @ulld/state@0.0.67
  - @ulld/tailwind@0.0.61
  - @ulld/ui@0.0.67
  - @ulld/utilities@0.0.67

## 0.0.66

### Patch Changes

- Fix some small tweaks, but mostly fix issue with the build script to incorporate new generators.
- Updated dependencies
  - @ulld/api@0.0.66
  - @ulld/eslint-config@0.0.62
  - @ulld/typescript-config@0.0.60
  - @ulld/configschema@0.0.66
  - @ulld/developer@0.0.66
  - @ulld/developer-schemas@0.0.60
  - @ulld/hooks@0.0.66
  - @ulld/icons@0.0.66
  - @ulld/state@0.0.66
  - @ulld/tailwind@0.0.60
  - @ulld/ui@0.0.66
  - @ulld/utilities@0.0.66

## 0.0.65

### Patch Changes

- Some minor fixes reworking of the build script to work with new tailwind sources collection in the generated app.
- Updated dependencies
  - @ulld/api@0.0.65
  - @ulld/eslint-config@0.0.61
  - @ulld/typescript-config@0.0.59
  - @ulld/configschema@0.0.65
  - @ulld/developer@0.0.65
  - @ulld/developer-schemas@0.0.59
  - @ulld/hooks@0.0.65
  - @ulld/icons@0.0.65
  - @ulld/state@0.0.65
  - @ulld/tailwind@0.0.59
  - @ulld/ui@0.0.65
  - @ulld/utilities@0.0.65

## 0.0.64

### Patch Changes

- Update the way shiki is handled to improve reliability.
- Updated dependencies
  - @ulld/api@0.0.64
  - @ulld/eslint-config@0.0.60
  - @ulld/typescript-config@0.0.58
  - @ulld/configschema@0.0.64
  - @ulld/developer@0.0.64
  - @ulld/developer-schemas@0.0.58
  - @ulld/hooks@0.0.64
  - @ulld/icons@0.0.64
  - @ulld/state@0.0.64
  - @ulld/tailwind@0.0.58
  - @ulld/ui@0.0.64
  - @ulld/utilities@0.0.64

## 0.0.63

### Patch Changes

- Push before working offline again.
- Updated dependencies
  - @ulld/api@0.0.63
  - @ulld/eslint-config@0.0.59
  - @ulld/typescript-config@0.0.57
  - @ulld/configschema@0.0.63
  - @ulld/developer@0.0.63
  - @ulld/developer-schemas@0.0.57
  - @ulld/hooks@0.0.63
  - @ulld/icons@0.0.63
  - @ulld/state@0.0.63
  - @ulld/tailwind@0.0.57
  - @ulld/ui@0.0.63
  - @ulld/utilities@0.0.63

## 0.0.62

### Patch Changes

- Broken snippets package due to some build script issue converting an entire file to lower case.
- Updated dependencies
  - @ulld/api@0.0.62
  - @ulld/eslint-config@0.0.58
  - @ulld/typescript-config@0.0.56
  - @ulld/configschema@0.0.62
  - @ulld/developer@0.0.62
  - @ulld/developer-schemas@0.0.56
  - @ulld/hooks@0.0.62
  - @ulld/icons@0.0.62
  - @ulld/state@0.0.62
  - @ulld/tailwind@0.0.56
  - @ulld/ui@0.0.62
  - @ulld/utilities@0.0.62

## 0.0.61

### Patch Changes

- Moved shiki to dynamic import to resolve issue with Shiki and Next 14.2.x
- Updated dependencies
  - @ulld/api@0.0.61
  - @ulld/eslint-config@0.0.57
  - @ulld/typescript-config@0.0.55
  - @ulld/configschema@0.0.61
  - @ulld/developer@0.0.61
  - @ulld/developer-schemas@0.0.55
  - @ulld/hooks@0.0.61
  - @ulld/icons@0.0.61
  - @ulld/state@0.0.61
  - @ulld/tailwind@0.0.55
  - @ulld/ui@0.0.61
  - @ulld/utilities@0.0.61

## 0.0.60

### Patch Changes

- Broken build script causing mismatched versions in some packages.
- Updated dependencies
  - @ulld/api@0.0.60
  - @ulld/eslint-config@0.0.56
  - @ulld/typescript-config@0.0.54
  - @ulld/configschema@0.0.60
  - @ulld/developer@0.0.60
  - @ulld/developer-schemas@0.0.54
  - @ulld/hooks@0.0.60
  - @ulld/icons@0.0.60
  - @ulld/state@0.0.60
  - @ulld/tailwind@0.0.54
  - @ulld/ui@0.0.60
  - @ulld/utilities@0.0.60

## 0.0.59

### Patch Changes

- Missing dependencies came out of nowhere...
- Updated dependencies
  - @ulld/api@0.0.59
  - @ulld/eslint-config@0.0.55
  - @ulld/typescript-config@0.0.53
  - @ulld/configschema@0.0.59
  - @ulld/developer@0.0.59
  - @ulld/developer-schemas@0.0.53
  - @ulld/hooks@0.0.59
  - @ulld/icons@0.0.59
  - @ulld/state@0.0.59
  - @ulld/tailwind@0.0.53
  - @ulld/ui@0.0.59
  - @ulld/utilities@0.0.59

## 0.0.58

### Patch Changes

- Update after resolving issues last night while not on wifi.
- Updated dependencies
  - @ulld/api@0.0.58
  - @ulld/eslint-config@0.0.54
  - @ulld/typescript-config@0.0.52
  - @ulld/configschema@0.0.58
  - @ulld/developer@0.0.58
  - @ulld/developer-schemas@0.0.52
  - @ulld/hooks@0.0.58
  - @ulld/icons@0.0.58
  - @ulld/state@0.0.58
  - @ulld/tailwind@0.0.52
  - @ulld/ui@0.0.58
  - @ulld/utilities@0.0.58

## 0.0.57

### Patch Changes

- Update after resolving issues last night while not on wifi.
- Updated dependencies
  - @ulld/api@0.0.57
  - @ulld/eslint-config@0.0.53
  - @ulld/typescript-config@0.0.51
  - @ulld/configschema@0.0.57
  - @ulld/developer@0.0.57
  - @ulld/developer-schemas@0.0.51
  - @ulld/hooks@0.0.57
  - @ulld/icons@0.0.57
  - @ulld/state@0.0.57
  - @ulld/tailwind@0.0.51
  - @ulld/ui@0.0.57
  - @ulld/utilities@0.0.57

## 0.0.56

### Patch Changes

- Removed imgly for now to address build issue at a later date. Super promising, but there are more important things to focus on for now.
- Updated dependencies
  - @ulld/api@0.0.56
  - @ulld/eslint-config@0.0.52
  - @ulld/typescript-config@0.0.50
  - @ulld/configschema@0.0.56
  - @ulld/developer@0.0.56
  - @ulld/developer-schemas@0.0.50
  - @ulld/hooks@0.0.56
  - @ulld/icons@0.0.56
  - @ulld/state@0.0.56
  - @ulld/tailwind@0.0.50
  - @ulld/ui@0.0.56
  - @ulld/utilities@0.0.56

## 0.0.55

### Patch Changes

- Fix some task-manager UI issues, and added a method to remove image background to the trpc router.
- Updated dependencies
  - @ulld/api@0.0.55
  - @ulld/eslint-config@0.0.51
  - @ulld/typescript-config@0.0.49
  - @ulld/configschema@0.0.55
  - @ulld/developer@0.0.55
  - @ulld/developer-schemas@0.0.49
  - @ulld/hooks@0.0.55
  - @ulld/icons@0.0.55
  - @ulld/state@0.0.55
  - @ulld/tailwind@0.0.49
  - @ulld/ui@0.0.55
  - @ulld/utilities@0.0.55

## 0.0.54

### Patch Changes

- Broken build. Attempting to resolve with a new build from remote. The issue might be a result of a dependency relying on a database client that it can't find.
- Updated dependencies
  - @ulld/api@0.0.54
  - @ulld/eslint-config@0.0.50
  - @ulld/typescript-config@0.0.48
  - @ulld/configschema@0.0.54
  - @ulld/developer@0.0.54
  - @ulld/developer-schemas@0.0.48
  - @ulld/hooks@0.0.54
  - @ulld/icons@0.0.54
  - @ulld/state@0.0.54
  - @ulld/tailwind@0.0.48
  - @ulld/ui@0.0.54
  - @ulld/utilities@0.0.54

## 0.0.53

### Patch Changes

- Update dashboard and equations page to fix minor style issues.
- Updated dependencies
  - @ulld/api@0.0.53
  - @ulld/eslint-config@0.0.49
  - @ulld/typescript-config@0.0.47
  - @ulld/configschema@0.0.53
  - @ulld/developer@0.0.53
  - @ulld/developer-schemas@0.0.47
  - @ulld/hooks@0.0.53
  - @ulld/icons@0.0.53
  - @ulld/state@0.0.53
  - @ulld/tailwind@0.0.47
  - @ulld/ui@0.0.53
  - @ulld/utilities@0.0.53

## 0.0.52

### Patch Changes

- Fix issue with trpc missing routes.
- Updated dependencies
  - @ulld/api@0.0.52
  - @ulld/eslint-config@0.0.48
  - @ulld/typescript-config@0.0.46
  - @ulld/configschema@0.0.52
  - @ulld/developer@0.0.52
  - @ulld/developer-schemas@0.0.46
  - @ulld/hooks@0.0.52
  - @ulld/icons@0.0.52
  - @ulld/state@0.0.52
  - @ulld/tailwind@0.0.46
  - @ulld/ui@0.0.52
  - @ulld/utilities@0.0.52

## 0.0.51

### Patch Changes

- Update equations package to address layout issues.
- Updated dependencies
  - @ulld/api@0.0.51
  - @ulld/eslint-config@0.0.47
  - @ulld/typescript-config@0.0.45
  - @ulld/configschema@0.0.51
  - @ulld/developer@0.0.51
  - @ulld/developer-schemas@0.0.45
  - @ulld/hooks@0.0.51
  - @ulld/icons@0.0.51
  - @ulld/state@0.0.51
  - @ulld/tailwind@0.0.45
  - @ulld/ui@0.0.51
  - @ulld/utilities@0.0.51

## 0.0.50

### Patch Changes

- Update dashboard and included @ulld/plot in the tailwind config sources.
- Updated dependencies
  - @ulld/api@0.0.50
  - @ulld/eslint-config@0.0.46
  - @ulld/typescript-config@0.0.44
  - @ulld/configschema@0.0.50
  - @ulld/developer@0.0.50
  - @ulld/developer-schemas@0.0.44
  - @ulld/hooks@0.0.50
  - @ulld/icons@0.0.50
  - @ulld/state@0.0.50
  - @ulld/tailwind@0.0.44
  - @ulld/ui@0.0.50
  - @ulld/utilities@0.0.50

## 0.0.49

### Patch Changes

- Update dashboard mostly.
- Updated dependencies
  - @ulld/api@0.0.49
  - @ulld/eslint-config@0.0.45
  - @ulld/typescript-config@0.0.43
  - @ulld/configschema@0.0.49
  - @ulld/developer@0.0.49
  - @ulld/developer-schemas@0.0.43
  - @ulld/hooks@0.0.49
  - @ulld/icons@0.0.49
  - @ulld/state@0.0.49
  - @ulld/tailwind@0.0.43
  - @ulld/ui@0.0.49
  - @ulld/utilities@0.0.49

## 0.0.48

### Patch Changes

- Removing broken paths.
- Updated dependencies
  - @ulld/api@0.0.48
  - @ulld/eslint-config@0.0.44
  - @ulld/typescript-config@0.0.42
  - @ulld/configschema@0.0.48
  - @ulld/developer@0.0.48
  - @ulld/developer-schemas@0.0.42
  - @ulld/hooks@0.0.48
  - @ulld/icons@0.0.48
  - @ulld/state@0.0.48
  - @ulld/tailwind@0.0.42
  - @ulld/ui@0.0.48
  - @ulld/utilities@0.0.48

## 0.0.47

### Patch Changes

- Left over development files leaked into the build and are causing build issues. They don't affect anything, but still need to be handled.
- Updated dependencies
  - @ulld/api@0.0.47
  - @ulld/eslint-config@0.0.43
  - @ulld/typescript-config@0.0.41
  - @ulld/configschema@0.0.47
  - @ulld/developer@0.0.47
  - @ulld/developer-schemas@0.0.41
  - @ulld/hooks@0.0.47
  - @ulld/icons@0.0.47
  - @ulld/state@0.0.47
  - @ulld/tailwind@0.0.41
  - @ulld/ui@0.0.47
  - @ulld/utilities@0.0.47

## 0.0.46

### Patch Changes

- Broke-d the versioning by accidentally marking the eslint package
  private.
- Updated dependencies
  - @ulld/api@0.0.46
  - @ulld/eslint-config@0.0.42
  - @ulld/typescript-config@0.0.40
  - @ulld/configschema@0.0.46
  - @ulld/developer@0.0.46
  - @ulld/developer-schemas@0.0.40
  - @ulld/hooks@0.0.46
  - @ulld/icons@0.0.46
  - @ulld/state@0.0.46
  - @ulld/tailwind@0.0.40
  - @ulld/ui@0.0.46
  - @ulld/utilities@0.0.46

## 0.0.45

### Patch Changes

- Package version mismatches.
- Updated dependencies
  - @ulld/api@0.0.45
  - @ulld/eslint-config@0.0.41
  - @ulld/typescript-config@0.0.39
  - @ulld/configschema@0.0.45
  - @ulld/developer@0.0.45
  - @ulld/developer-schemas@0.0.39
  - @ulld/hooks@0.0.45
  - @ulld/icons@0.0.45
  - @ulld/state@0.0.45
  - @ulld/tailwind@0.0.39
  - @ulld/ui@0.0.45
  - @ulld/utilities@0.0.45

## 0.0.44

### Patch Changes

- Updated dependencies
  - @ulld/eslint-config@0.0.40
  - @ulld/developer@0.0.44
  - @ulld/ui@0.0.44
  - @ulld/api@0.0.44
  - @ulld/state@0.0.44
  - @ulld/utilities@0.0.44
  - @ulld/hooks@0.0.44
  - @ulld/configschema@0.0.44
  - @ulld/icons@0.0.44

## 0.0.43

### Patch Changes

- Updated dependencies
  - @ulld/eslint-config@0.0.39
  - @ulld/developer@0.0.43
  - @ulld/ui@0.0.43
  - @ulld/api@0.0.43
  - @ulld/state@0.0.43
  - @ulld/utilities@0.0.43
  - @ulld/hooks@0.0.43
  - @ulld/configschema@0.0.43
  - @ulld/icons@0.0.43

## 0.0.42

### Patch Changes

- Wrap up the dashboard component and attempt to finalize build script.
- Updated dependencies
  - @ulld/api@0.0.42
  - @ulld/eslint-config@0.0.38
  - @ulld/typescript-config@0.0.38
  - @ulld/configschema@0.0.42
  - @ulld/developer@0.0.42
  - @ulld/developer-schemas@0.0.38
  - @ulld/hooks@0.0.42
  - @ulld/icons@0.0.42
  - @ulld/state@0.0.42
  - @ulld/tailwind@0.0.38
  - @ulld/ui@0.0.42
  - @ulld/utilities@0.0.42

## 0.0.41

### Patch Changes

- Fix import issues in the dashboard component.
- Updated dependencies
  - @ulld/api@0.0.41
  - @ulld/eslint-config@0.0.37
  - @ulld/typescript-config@0.0.37
  - @ulld/configschema@0.0.41
  - @ulld/developer@0.0.41
  - @ulld/developer-schemas@0.0.37
  - @ulld/hooks@0.0.41
  - @ulld/icons@0.0.41
  - @ulld/state@0.0.41
  - @ulld/tailwind@0.0.37
  - @ulld/ui@0.0.41
  - @ulld/utilities@0.0.41

## 0.0.40

### Patch Changes

- Update to add utility methods that gather an overview of the user's app to the trpc router.
- Updated dependencies
  - @ulld/api@0.0.40
  - @ulld/eslint-config@0.0.36
  - @ulld/typescript-config@0.0.36
  - @ulld/configschema@0.0.40
  - @ulld/developer@0.0.40
  - @ulld/developer-schemas@0.0.36
  - @ulld/hooks@0.0.40
  - @ulld/icons@0.0.40
  - @ulld/state@0.0.40
  - @ulld/tailwind@0.0.36
  - @ulld/ui@0.0.40
  - @ulld/utilities@0.0.40

## 0.0.39

### Patch Changes

- Update landing page layout slot.
- Updated dependencies
  - @ulld/api@0.0.39
  - @ulld/eslint-config@0.0.35
  - @ulld/typescript-config@0.0.35
  - @ulld/configschema@0.0.39
  - @ulld/developer@0.0.39
  - @ulld/developer-schemas@0.0.35
  - @ulld/hooks@0.0.39
  - @ulld/icons@0.0.39
  - @ulld/state@0.0.39
  - @ulld/tailwind@0.0.35
  - @ulld/ui@0.0.39
  - @ulld/utilities@0.0.39

## 0.0.38

### Patch Changes

- Removed some old functions that have been replaced but not implemented everywhere.
- Updated dependencies
  - @ulld/api@0.0.38
  - @ulld/eslint-config@0.0.34
  - @ulld/typescript-config@0.0.34
  - @ulld/configschema@0.0.38
  - @ulld/developer@0.0.38
  - @ulld/developer-schemas@0.0.34
  - @ulld/hooks@0.0.38
  - @ulld/icons@0.0.38
  - @ulld/state@0.0.38
  - @ulld/tailwind@0.0.34
  - @ulld/ui@0.0.38
  - @ulld/utilities@0.0.38

## 0.0.37

### Patch Changes

- Fix missing files after trying to clean things up while offline.
- Updated dependencies
  - @ulld/api@0.0.37
  - @ulld/eslint-config@0.0.33
  - @ulld/typescript-config@0.0.33
  - @ulld/configschema@0.0.37
  - @ulld/developer@0.0.37
  - @ulld/developer-schemas@0.0.33
  - @ulld/hooks@0.0.37
  - @ulld/icons@0.0.37
  - @ulld/state@0.0.37
  - @ulld/tailwind@0.0.33
  - @ulld/ui@0.0.37
  - @ulld/utilities@0.0.37

## 0.0.36

### Patch Changes

- Broken database script again...
- Updated dependencies
  - @ulld/api@0.0.36
  - @ulld/eslint-config@0.0.32
  - @ulld/typescript-config@0.0.32
  - @ulld/configschema@0.0.36
  - @ulld/developer@0.0.36
  - @ulld/developer-schemas@0.0.32
  - @ulld/hooks@0.0.36
  - @ulld/icons@0.0.36
  - @ulld/state@0.0.36
  - @ulld/tailwind@0.0.32
  - @ulld/ui@0.0.36
  - @ulld/utilities@0.0.36

## 0.0.35

### Patch Changes

- Fix broken database generation script.
- Updated dependencies
  - @ulld/api@0.0.35
  - @ulld/eslint-config@0.0.31
  - @ulld/typescript-config@0.0.31
  - @ulld/configschema@0.0.35
  - @ulld/developer@0.0.35
  - @ulld/developer-schemas@0.0.31
  - @ulld/hooks@0.0.35
  - @ulld/icons@0.0.35
  - @ulld/state@0.0.35
  - @ulld/tailwind@0.0.31
  - @ulld/ui@0.0.35
  - @ulld/utilities@0.0.35

## 0.0.34

### Patch Changes

- Fix some more TS errors that result as part of the build script.
- Updated dependencies
  - @ulld/api@0.0.34
  - @ulld/eslint-config@0.0.30
  - @ulld/typescript-config@0.0.30
  - @ulld/configschema@0.0.34
  - @ulld/developer@0.0.34
  - @ulld/developer-schemas@0.0.30
  - @ulld/hooks@0.0.34
  - @ulld/icons@0.0.34
  - @ulld/state@0.0.34
  - @ulld/tailwind@0.0.30
  - @ulld/ui@0.0.34
  - @ulld/utilities@0.0.34

## 0.0.33

### Patch Changes

- Updated dependencies
  - @ulld/typescript-config@0.0.29
  - @ulld/api@0.0.33
  - @ulld/configschema@0.0.33
  - @ulld/developer@0.0.33
  - @ulld/hooks@0.0.33
  - @ulld/icons@0.0.33
  - @ulld/state@0.0.33
  - @ulld/tailwind@0.0.29
  - @ulld/ui@0.0.33
  - @ulld/utilities@0.0.33

## 0.0.32

### Patch Changes

- Need to come up with a much better deployement script. This is a
  nightmare always forgetting to run specific scripts first.
- Updated dependencies
  - @ulld/api@0.0.32
  - @ulld/eslint-config@0.0.29
  - @ulld/typescript-config@0.0.28
  - @ulld/configschema@0.0.32
  - @ulld/developer@0.0.32
  - @ulld/developer-schemas@0.0.29
  - @ulld/hooks@0.0.32
  - @ulld/icons@0.0.32
  - @ulld/state@0.0.32
  - @ulld/tailwind@0.0.29
  - @ulld/ui@0.0.32
  - @ulld/utilities@0.0.32

## 0.0.31

### Patch Changes

- Broken plugin slot after deleted a slot and didn't remove it from the
  slotMap.
- Updated dependencies
  - @ulld/api@0.0.31
  - @ulld/eslint-config@0.0.28
  - @ulld/typescript-config@0.0.27
  - @ulld/configschema@0.0.31
  - @ulld/developer@0.0.31
  - @ulld/developer-schemas@0.0.28
  - @ulld/hooks@0.0.31
  - @ulld/icons@0.0.31
  - @ulld/state@0.0.31
  - @ulld/tailwind@0.0.28
  - @ulld/ui@0.0.31
  - @ulld/utilities@0.0.31

## 0.0.30

### Patch Changes

- Much plugin config generation script.
- Updated dependencies
  - @ulld/api@0.0.30
  - @ulld/eslint-config@0.0.27
  - @ulld/typescript-config@0.0.26
  - @ulld/configschema@0.0.30
  - @ulld/developer@0.0.30
  - @ulld/developer-schemas@0.0.27
  - @ulld/hooks@0.0.30
  - @ulld/icons@0.0.30
  - @ulld/state@0.0.30
  - @ulld/tailwind@0.0.27
  - @ulld/ui@0.0.30
  - @ulld/utilities@0.0.30

## 0.0.29

### Patch Changes

- Update database build script.
- Updated dependencies
  - @ulld/api@0.0.29
  - @ulld/eslint-config@0.0.26
  - @ulld/typescript-config@0.0.25
  - @ulld/configschema@0.0.29
  - @ulld/developer@0.0.29
  - @ulld/developer-schemas@0.0.26
  - @ulld/hooks@0.0.29
  - @ulld/icons@0.0.29
  - @ulld/state@0.0.29
  - @ulld/tailwind@0.0.26
  - @ulld/ui@0.0.29
  - @ulld/utilities@0.0.29

## 0.0.28

### Patch Changes

- Fixed a few TS errors that result as part of the build process.
- Updated dependencies
  - @ulld/api@0.0.28
  - @ulld/eslint-config@0.0.25
  - @ulld/typescript-config@0.0.24
  - @ulld/configschema@0.0.28
  - @ulld/developer@0.0.28
  - @ulld/developer-schemas@0.0.25
  - @ulld/hooks@0.0.28
  - @ulld/icons@0.0.28
  - @ulld/state@0.0.28
  - @ulld/tailwind@0.0.25
  - @ulld/ui@0.0.28
  - @ulld/utilities@0.0.28

## 0.0.27

### Patch Changes

- Moved all references to prisma to referring to the internal DB package
  directly.
- Updated dependencies
  - @ulld/api@0.0.27
  - @ulld/eslint-config@0.0.24
  - @ulld/typescript-config@0.0.23
  - @ulld/configschema@0.0.27
  - @ulld/developer@0.0.27
  - @ulld/developer-schemas@0.0.24
  - @ulld/hooks@0.0.27
  - @ulld/icons@0.0.27
  - @ulld/state@0.0.27
  - @ulld/tailwind@0.0.24
  - @ulld/ui@0.0.27
  - @ulld/utilities@0.0.27

## 0.0.26

### Patch Changes

- Doing everything twice after reverting parts of the package.json files
  in almost all internal packages.
- Updated dependencies
  - @ulld/api@0.0.26
  - @ulld/eslint-config@0.0.23
  - @ulld/typescript-config@0.0.22
  - @ulld/configschema@0.0.26
  - @ulld/developer@0.0.26
  - @ulld/developer-schemas@0.0.23
  - @ulld/hooks@0.0.26
  - @ulld/icons@0.0.26
  - @ulld/state@0.0.26
  - @ulld/tailwind@0.0.23
  - @ulld/ui@0.0.26
  - @ulld/utilities@0.0.26

## 0.0.25

### Patch Changes

- @ulld/api@0.0.25
- @ulld/developer@0.0.25
- @ulld/hooks@0.0.25
- @ulld/state@0.0.25
- @ulld/utilities@0.0.25
- @ulld/ui@0.0.25
- @ulld/icons@0.0.25
- @ulld/configschema@0.0.25

## 0.0.24

### Patch Changes

- @ulld/api@0.0.24
- @ulld/developer@0.0.24
- @ulld/hooks@0.0.24
- @ulld/state@0.0.24
- @ulld/utilities@0.0.24
- @ulld/ui@0.0.24
- @ulld/icons@0.0.24
- @ulld/configschema@0.0.24

## 0.0.23

### Patch Changes

- Fixing mismatched version after reverting package.json files that blew up while working on the build process.
- Updated dependencies
  - @ulld/api@0.0.23
  - @ulld/eslint-config@0.0.22
  - @ulld/typescript-config@0.0.21
  - @ulld/configschema@0.0.23
  - @ulld/developer@0.0.23
  - @ulld/developer-schemas@0.0.22
  - @ulld/hooks@0.0.23
  - @ulld/icons@0.0.23
  - @ulld/state@0.0.23
  - @ulld/tailwind@0.0.22
  - @ulld/ui@0.0.23
  - @ulld/utilities@0.0.23

## 0.0.9

### Patch Changes

- Lord I hope these package.json files are back in working order.
- Updated dependencies
  - @ulld/api@0.0.9
  - @ulld/eslint-config@0.0.9
  - @ulld/typescript-config@0.0.8
  - @ulld/configschema@0.0.9
  - @ulld/developer@0.0.9
  - @ulld/developer-schemas@0.0.9
  - @ulld/hooks@0.0.9
  - @ulld/icons@0.0.9
  - @ulld/state@0.0.9
  - @ulld/tailwind@0.0.9
  - @ulld/ui@0.0.9
  - @ulld/utilities@0.0.9

## 0.0.22

### Patch Changes

- Update react version and lift to monorepo root.
- Updated dependencies
  - @ulld/api@0.0.22
  - @ulld/eslint-config@0.0.21
  - @ulld/typescript-config@0.0.20
  - @ulld/configschema@0.0.22
  - @ulld/developer@0.0.22
  - @ulld/developer-schemas@0.0.21
  - @ulld/hooks@0.0.22
  - @ulld/icons@0.0.22
  - @ulld/state@0.0.22
  - @ulld/tailwind@0.0.21
  - @ulld/ui@0.0.22
  - @ulld/utilities@0.0.22

## 0.0.21

### Patch Changes

- 06a2aa9: Patch bump, resolved a ton of TS errors in most of the core packages.
- Patch bump after cleaning all TS errors in most core internal packages.
- Updated dependencies [06a2aa9]
- Updated dependencies
  - @ulld/api@0.0.21
  - @ulld/eslint-config@0.0.20
  - @ulld/typescript-config@0.0.19
  - @ulld/configschema@0.0.21
  - @ulld/developer@0.0.21
  - @ulld/developer-schemas@0.0.20
  - @ulld/hooks@0.0.21
  - @ulld/icons@0.0.21
  - @ulld/state@0.0.21
  - @ulld/tailwind@0.0.20
  - @ulld/ui@0.0.21
  - @ulld/utilities@0.0.21

## 0.0.20

### Patch Changes

- Broken prisma script.
- Updated dependencies
  - @ulld/api@0.0.20
  - @ulld/eslint-config@0.0.19
  - @ulld/typescript-config@0.0.18
  - @ulld/configschema@0.0.20
  - @ulld/developer@0.0.20
  - @ulld/developer-schemas@0.0.19
  - @ulld/hooks@0.0.20
  - @ulld/icons@0.0.20
  - @ulld/state@0.0.20
  - @ulld/tailwind@0.0.19
  - @ulld/ui@0.0.20
  - @ulld/utilities@0.0.20

## 0.0.19

### Patch Changes

- Update prisma export.
- Updated dependencies
  - @ulld/api@0.0.19
  - @ulld/eslint-config@0.0.18
  - @ulld/typescript-config@0.0.17
  - @ulld/configschema@0.0.19
  - @ulld/developer@0.0.19
  - @ulld/developer-schemas@0.0.18
  - @ulld/hooks@0.0.19
  - @ulld/icons@0.0.19
  - @ulld/state@0.0.19
  - @ulld/tailwind@0.0.18
  - @ulld/ui@0.0.19
  - @ulld/utilities@0.0.19

## 0.0.18

### Patch Changes

- Removed next-mdx-remote entirely. Now using mdx package directly.
- Updated dependencies
  - @ulld/api@0.0.18
  - @ulld/eslint-config@0.0.17
  - @ulld/typescript-config@0.0.16
  - @ulld/configschema@0.0.18
  - @ulld/developer@0.0.18
  - @ulld/developer-schemas@0.0.17
  - @ulld/hooks@0.0.18
  - @ulld/icons@0.0.18
  - @ulld/state@0.0.18
  - @ulld/tailwind@0.0.17
  - @ulld/ui@0.0.18
  - @ulld/utilities@0.0.18

## 0.0.17

### Patch Changes

- Fix a bunch of misaligned references.
- Updated dependencies
  - @ulld/api@0.0.17
  - @ulld/eslint-config@0.0.16
  - @ulld/typescript-config@0.0.15
  - @ulld/configschema@0.0.17
  - @ulld/developer@0.0.17
  - @ulld/developer-schemas@0.0.16
  - @ulld/hooks@0.0.17
  - @ulld/icons@0.0.17
  - @ulld/state@0.0.17
  - @ulld/tailwind@0.0.16
  - @ulld/ui@0.0.17
  - @ulld/utilities@0.0.17

## 0.0.16

### Patch Changes

- Update sync method.
- Updated dependencies
  - @ulld/api@0.0.16
  - @ulld/eslint-config@0.0.15
  - @ulld/typescript-config@0.0.14
  - @ulld/configschema@0.0.16
  - @ulld/developer@0.0.16
  - @ulld/developer-schemas@0.0.15
  - @ulld/hooks@0.0.16
  - @ulld/icons@0.0.16
  - @ulld/state@0.0.16
  - @ulld/tailwind@0.0.15
  - @ulld/ui@0.0.16
  - @ulld/utilities@0.0.16

## 0.0.15

### Patch Changes

- Update misaligned imports.
- Updated dependencies
  - @ulld/api@0.0.15
  - @ulld/eslint-config@0.0.14
  - @ulld/typescript-config@0.0.13
  - @ulld/configschema@0.0.15
  - @ulld/developer@0.0.15
  - @ulld/developer-schemas@0.0.14
  - @ulld/hooks@0.0.15
  - @ulld/icons@0.0.15
  - @ulld/state@0.0.15
  - @ulld/tailwind@0.0.14
  - @ulld/ui@0.0.15
  - @ulld/utilities@0.0.15

## 0.0.14

### Patch Changes

- Fix issue created by the build script.
- Updated dependencies
  - @ulld/api@0.0.14
  - @ulld/eslint-config@0.0.13
  - @ulld/typescript-config@0.0.12
  - @ulld/configschema@0.0.14
  - @ulld/developer@0.0.14
  - @ulld/developer-schemas@0.0.13
  - @ulld/hooks@0.0.14
  - @ulld/icons@0.0.14
  - @ulld/state@0.0.14
  - @ulld/tailwind@0.0.13
  - @ulld/ui@0.0.14
  - @ulld/utilities@0.0.14

## 0.0.13

### Patch Changes

- Update missing source paths.
- Updated dependencies
  - @ulld/api@0.0.13
  - @ulld/eslint-config@0.0.12
  - @ulld/typescript-config@0.0.11
  - @ulld/configschema@0.0.13
  - @ulld/developer@0.0.13
  - @ulld/developer-schemas@0.0.12
  - @ulld/hooks@0.0.13
  - @ulld/icons@0.0.13
  - @ulld/state@0.0.13
  - @ulld/tailwind@0.0.12
  - @ulld/ui@0.0.13
  - @ulld/utilities@0.0.13

## 0.0.12

### Patch Changes

- Update file source paths. Build script modified the files path in the form package, causing the build to fail.
- Updated dependencies
  - @ulld/api@0.0.12
  - @ulld/eslint-config@0.0.11
  - @ulld/typescript-config@0.0.10
  - @ulld/configschema@0.0.12
  - @ulld/developer@0.0.12
  - @ulld/developer-schemas@0.0.11
  - @ulld/hooks@0.0.12
  - @ulld/icons@0.0.12
  - @ulld/state@0.0.12
  - @ulld/tailwind@0.0.11
  - @ulld/ui@0.0.12
  - @ulld/utilities@0.0.12

## 0.0.11

### Patch Changes

- Update remote to fix some misaligned imports mostly.
- Updated dependencies
  - @ulld/api@0.0.11
  - @ulld/eslint-config@0.0.10
  - @ulld/typescript-config@0.0.9
  - @ulld/configschema@0.0.11
  - @ulld/developer@0.0.11
  - @ulld/developer-schemas@0.0.10
  - @ulld/hooks@0.0.11
  - @ulld/icons@0.0.11
  - @ulld/state@0.0.11
  - @ulld/tailwind@0.0.10
  - @ulld/ui@0.0.11
  - @ulld/utilities@0.0.11

## 0.0.10

### Patch Changes

- Update dependency versions, moved a bunch of stuff to peer dependencies to avoid version conflicts, fixed a bunch of errors mostly around client side / server side issues, and adjusted a few misaligned imports.
- Updated dependencies
  - @ulld/api@0.0.10
  - @ulld/eslint-config@0.0.9
  - @ulld/typescript-config@0.0.8
  - @ulld/configschema@0.0.10
  - @ulld/developer@0.0.10
  - @ulld/developer-schemas@0.0.9
  - @ulld/hooks@0.0.10
  - @ulld/icons@0.0.10
  - @ulld/state@0.0.10
  - @ulld/tailwind@0.0.9
  - @ulld/ui@0.0.10
  - @ulld/utilities@0.0.10

## 0.0.9

### Patch Changes

- Updated dependencies
  - @ulld/api@0.0.9
  - @ulld/hooks@0.0.9
  - @ulld/ui@0.0.9
  - @ulld/icons@0.0.9
  - @ulld/state@0.0.9
  - @ulld/configschema@0.0.9
  - @ulld/utilities@0.0.9
  - @ulld/developer@0.0.9

## 0.0.8

### Patch Changes

- 609abeb: Add missing plugin configs.
- Updated dependencies [609abeb]
  - @ulld/developer@0.0.8
  - @ulld/api@0.0.8
  - @ulld/ui@0.0.8
  - @ulld/eslint-config@0.0.8
  - @ulld/typescript-config@0.0.7
  - @ulld/configschema@0.0.8
  - @ulld/developer-schemas@0.0.8
  - @ulld/hooks@0.0.8
  - @ulld/icons@0.0.8
  - @ulld/state@0.0.8
  - @ulld/tailwind@0.0.8
  - @ulld/utilities@0.0.8

## 0.0.7

### Patch Changes

- Update to match base app's template progress.
- Updated dependencies
  - @ulld/typescript-config@0.0.6
  - @ulld/developer-schemas@0.0.7
  - @ulld/tailwind@0.0.7
  - @ulld/eslint-config@0.0.7
  - @ulld/configschema@0.0.7
  - @ulld/developer@0.0.7
  - @ulld/utilities@0.0.7
  - @ulld/hooks@0.0.7
  - @ulld/icons@0.0.7
  - @ulld/state@0.0.7
  - @ulld/api@0.0.7
  - @ulld/ui@0.0.7

## 0.0.6

### Patch Changes

- Removed all unpublished packages dynamically.
- Updated dependencies
  - @ulld/typescript-config@0.0.5
  - @ulld/developer-schemas@0.0.6
  - @ulld/tailwind@0.0.6
  - @ulld/eslint-config@0.0.6
  - @ulld/configschema@0.0.6
  - @ulld/developer@0.0.6
  - @ulld/utilities@0.0.6
  - @ulld/hooks@0.0.6
  - @ulld/icons@0.0.6
  - @ulld/state@0.0.6
  - @ulld/api@0.0.6
  - @ulld/ui@0.0.6

## 0.0.5

### Patch Changes

- One more time with this cluster\*\*\*\* of dependencies.
- Updated dependencies
  - @ulld/typescript-config@0.0.4
  - @ulld/developer-schemas@0.0.5
  - @ulld/tailwind@0.0.5
  - @ulld/eslint-config@0.0.5
  - @ulld/configschema@0.0.5
  - @ulld/developer@0.0.5
  - @ulld/utilities@0.0.5
  - @ulld/hooks@0.0.5
  - @ulld/icons@0.0.5
  - @ulld/state@0.0.5
  - @ulld/api@0.0.5
  - @ulld/ui@0.0.5

## 0.0.4

### Patch Changes

- Remove cookbook dependency.
- Updated dependencies
  - @ulld/typescript-config@0.0.3
  - @ulld/developer-schemas@0.0.4
  - @ulld/tailwind@0.0.4
  - @ulld/eslint-config@0.0.4
  - @ulld/configschema@0.0.4
  - @ulld/developer@0.0.4
  - @ulld/utilities@0.0.4
  - @ulld/hooks@0.0.4
  - @ulld/icons@0.0.4
  - @ulld/state@0.0.4
  - @ulld/api@0.0.4
  - @ulld/ui@0.0.4

## 0.0.3

### Patch Changes

- Update to include utility repo dependencies.
- Updated dependencies
  - @ulld/typescript-config@0.0.2
  - @ulld/developer-schemas@0.0.3
  - @ulld/tailwind@0.0.3
  - @ulld/eslint-config@0.0.3
  - @ulld/configschema@0.0.3
  - @ulld/developer@0.0.3
  - @ulld/utilities@0.0.3
  - @ulld/hooks@0.0.3
  - @ulld/icons@0.0.3
  - @ulld/state@0.0.3
  - @ulld/api@0.0.3
  - @ulld/ui@0.0.3

## 0.0.2

### Patch Changes

- ceb2d95: Update dependencies to support base-configs.
- Updated dependencies [ceb2d95]
  - @ulld/developer-schemas@0.0.2
  - @ulld/tailwind@0.0.2
  - @ulld/configschema@0.0.2
  - @ulld/developer@0.0.2
  - @ulld/utilities@0.0.2
  - @ulld/hooks@0.0.2
  - @ulld/icons@0.0.2
  - @ulld/state@0.0.2
  - @ulld/api@0.0.2
  - @ulld/ui@0.0.2

## 0.0.1

### Patch Changes

- Publish to work on build script.
- Updated dependencies
  - @repo/typescript-config@0.0.1
  - @ulld/developer-schemas@0.0.1
  - @ulld/tailwind@0.0.1
  - @repo/eslint-config@0.0.1
  - @ulld/configschema@0.0.1
  - @ulld/developer@0.0.1
  - @ulld/utilities@0.0.1
  - @ulld/hooks@0.0.1
  - @ulld/icons@0.0.1
  - @ulld/state@0.0.1
  - @ulld/api@0.0.1
  - @ulld/ui@0.0.1
