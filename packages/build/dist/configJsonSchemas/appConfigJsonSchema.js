import "../chunk-7UBRHILH.js";

// src/configJsonSchemas/appConfigJsonSchema.json
var $ref = "#/definitions/ulldAppConfig";
var definitions = {
  ulldAppConfig: {
    type: "object",
    properties: {
      fsRoot: {
        type: "string",
        description: "The path to the root of the folder which holds your notes."
      },
      alwaysPreferFs: {
        type: "boolean",
        default: false,
        description: "Always read directly from the file system, except in cases where use of a database is required. This will negatively impact performance and portability, but might be necessary for specific use cases."
      },
      ignoreFilepaths: {
        type: "array",
        items: {
          anyOf: [
            {},
            {
              type: "string"
            },
            {
              type: "object",
              properties: {
                original: {
                  type: "string"
                },
                regex: {}
              },
              required: [
                "original",
                "regex"
              ],
              additionalProperties: false
            }
          ]
        },
        description: "File paths within the root directory which should be completely ignored by ULLD.",
        default: []
      },
      tempDir: {
        type: "string",
        default: "__temp__",
        description: "fsRoot relative path to the temporary directory. In almost all use cases this can be left to it's default value."
      },
      generatedDir: {
        type: "string",
        default: "/generated",
        description: "fsRoot relative path to the directory for automatically generated content. In almost all use cases this can be left to it's default value."
      },
      ignorePreferFsExtensions: {
        type: "array",
        items: {
          anyOf: [
            {
              type: "string"
            },
            {}
          ],
          description: "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings."
        },
        description: "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings.",
        default: []
      },
      fileTypePriority: {
        type: "array",
        items: {
          anyOf: [
            {
              type: "string",
              enum: [
                ".mdx",
                ".md",
                ".ipynb"
              ]
            },
            {
              type: "string",
              enum: [
                ".csv",
                ".tsv",
                ".excel",
                ".numpy",
                ".html",
                ".pickle",
                ".db",
                ".sql",
                ".pdf",
                ".json",
                ".tex",
                ".hdf5"
              ]
            }
          ]
        },
        description: "An ordered list of different parsable file types. This is only required when a file name exists with multiple parsable file extensions in the same directory. In most cases the default is adequate.",
        default: [
          ".mdx",
          ".md",
          ".ipynb",
          ".pdf",
          ".json",
          ".csv",
          ".tsv",
          ".excel",
          ".tex",
          ".db",
          ".html"
        ]
      },
      noteTypes: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "A unique key to be used internally to deal with this doctype."
            },
            docType: {
              type: "string",
              description: "A unique key which describes the nature of this document type: 'MathNote', 'Journal', 'References', etc..."
            },
            filePathPattern: {
              type: "string",
              description: "A glob style string to test a file path for this note type. Should return true if a given file is of this note type."
            },
            matchWeight: {
              type: "number",
              minimum: 0,
              maximum: 100,
              default: 50,
              description: "An extra weight between 0 and 100 to apply to matches. This can be very important when the location of one document type exists as a child of another, in which case an increased weight should be applied to the child document type. Default: 50"
            },
            fs: {
              type: "string",
              description: "The path to the root of the directory which holds this document type. This path must be both relative to the appConfig.fsRoot folder and a child of it. For example, a root directory at '/Users/steve/Desktop/notes' might have folders within it of /Users/steve/Desktop/notes/math and /Users/steve/Desktop/notes/physics. These appConfig.noteTypes[0].fs should be '/math' and the latter should be '/physics'."
            },
            url: {
              type: "string",
              description: "The url at which this note should be displayed."
            },
            urlQuery: {
              type: "object",
              additionalProperties: {
                anyOf: [
                  {
                    type: "string"
                  },
                  {
                    type: "array",
                    items: {
                      type: "string"
                    }
                  },
                  {
                    type: "number"
                  },
                  {
                    type: "array",
                    items: {
                      type: "number"
                    }
                  }
                ]
              },
              description: "Url search paramters to be appended to generated buttons and links for this doc type in some cases. Useful for things like populating an initial list or opening with certain default override-able settings.",
              default: {}
            },
            keywords: {
              type: "array",
              items: {
                type: "string"
              },
              default: [],
              description: "Keywords to help with search results and command sorting related to this document type."
            },
            label: {
              type: "string",
              description: "The label to be used for this document type where automatically generated links, commands and buttons are referencing it."
            },
            topicLabel: {
              type: "string",
              description: "Replace references to the 'topic' tag with this label. This is useful for things like managing freelance work, where 'topics' might better be described as 'Jobs' or 'Clients'."
            },
            subjectLabel: {
              type: "string",
              description: "Replace references to the 'subject' tag with this label. This is useful for things like managing freelance work, where 'subjects' might better be described as 'Jobs' or 'Clients'."
            },
            autoTag: {
              type: "array",
              items: {
                type: "string"
              },
              default: [],
              description: "Automatically append these tags to all notes of this document type. This can also be done interactively through the app's UI after it is built."
            },
            autoTopic: {
              type: "array",
              items: {
                type: "string"
              },
              default: [],
              description: "Automatically append these topics to all notes of this document type. This can also be done interactively through the app's UI after it is built."
            },
            autoSubject: {
              type: "array",
              items: {
                type: "string"
              },
              default: [],
              description: "Automatically append these subjects to all notes of this document type. This can also be done interactively through the app's UI after it is built."
            },
            UI: {
              type: "object",
              properties: {
                styles: {
                  type: "object",
                  properties: {
                    dark: {
                      type: "object",
                      properties: {
                        bg: {
                          type: "string",
                          description: "Css classes to be appended to UI specific to this doc type. Tailwind classes will work."
                        },
                        fg: {
                          type: "string",
                          description: "Css classes to be appended to UI specific to this doc type. Tailwind classes will work."
                        }
                      },
                      additionalProperties: false,
                      default: {}
                    },
                    light: {
                      $ref: "#/definitions/ulldAppConfig/properties/noteTypes/items/properties/UI/properties/styles/properties/dark",
                      default: {}
                    }
                  },
                  additionalProperties: false,
                  default: {}
                }
              },
              additionalProperties: false,
              default: {}
            },
            icon: {
              type: "string",
              enum: [
                "a-arrow-down",
                "a-arrow-up",
                "a-large-small",
                "accessibility",
                "activity-square",
                "activity",
                "air-vent",
                "airplay",
                "alarm-clock-check",
                "alarm-clock-minus",
                "alarm-clock-off",
                "alarm-clock-plus",
                "alarm-clock",
                "alarm-smoke",
                "album",
                "alert-circle",
                "alert-octagon",
                "alert-triangle",
                "align-center-horizontal",
                "align-center-vertical",
                "align-center",
                "align-end-horizontal",
                "align-end-vertical",
                "align-horizontal-distribute-center",
                "align-horizontal-distribute-end",
                "align-horizontal-distribute-start",
                "align-horizontal-justify-center",
                "align-horizontal-justify-end",
                "align-horizontal-justify-start",
                "align-horizontal-space-around",
                "align-horizontal-space-between",
                "align-justify",
                "align-left",
                "align-right",
                "align-start-horizontal",
                "align-start-vertical",
                "align-vertical-distribute-center",
                "align-vertical-distribute-end",
                "align-vertical-distribute-start",
                "align-vertical-justify-center",
                "align-vertical-justify-end",
                "align-vertical-justify-start",
                "align-vertical-space-around",
                "align-vertical-space-between",
                "ambulance",
                "ampersand",
                "ampersands",
                "anchor",
                "angry",
                "annoyed",
                "antenna",
                "anvil",
                "aperture",
                "app-window",
                "apple",
                "archive-restore",
                "archive-x",
                "archive",
                "area-chart",
                "armchair",
                "arrow-big-down-dash",
                "arrow-big-down",
                "arrow-big-left-dash",
                "arrow-big-left",
                "arrow-big-right-dash",
                "arrow-big-right",
                "arrow-big-up-dash",
                "arrow-big-up",
                "arrow-down-0-1",
                "arrow-down-1-0",
                "arrow-down-a-z",
                "arrow-down-circle",
                "arrow-down-from-line",
                "arrow-down-left-from-circle",
                "arrow-down-left-from-square",
                "arrow-down-left-square",
                "arrow-down-left",
                "arrow-down-narrow-wide",
                "arrow-down-right-from-circle",
                "arrow-down-right-from-square",
                "arrow-down-right-square",
                "arrow-down-right",
                "arrow-down-square",
                "arrow-down-to-dot",
                "arrow-down-to-line",
                "arrow-down-up",
                "arrow-down-wide-narrow",
                "arrow-down-z-a",
                "arrow-down",
                "arrow-left-circle",
                "arrow-left-from-line",
                "arrow-left-right",
                "arrow-left-square",
                "arrow-left-to-line",
                "arrow-left",
                "arrow-right-circle",
                "arrow-right-from-line",
                "arrow-right-left",
                "arrow-right-square",
                "arrow-right-to-line",
                "arrow-right",
                "arrow-up-0-1",
                "arrow-up-1-0",
                "arrow-up-a-z",
                "arrow-up-circle",
                "arrow-up-down",
                "arrow-up-from-dot",
                "arrow-up-from-line",
                "arrow-up-left-from-circle",
                "arrow-up-left-from-square",
                "arrow-up-left-square",
                "arrow-up-left",
                "arrow-up-narrow-wide",
                "arrow-up-right-from-circle",
                "arrow-up-right-from-square",
                "arrow-up-right-square",
                "arrow-up-right",
                "arrow-up-square",
                "arrow-up-to-line",
                "arrow-up-wide-narrow",
                "arrow-up-z-a",
                "arrow-up",
                "arrows-up-from-line",
                "asterisk-square",
                "asterisk",
                "at-sign",
                "atom",
                "audio-lines",
                "audio-waveform",
                "award",
                "axe",
                "axis-3d",
                "baby",
                "backpack",
                "badge-alert",
                "badge-cent",
                "badge-check",
                "badge-dollar-sign",
                "badge-euro",
                "badge-help",
                "badge-indian-rupee",
                "badge-info",
                "badge-japanese-yen",
                "badge-minus",
                "badge-percent",
                "badge-plus",
                "badge-pound-sterling",
                "badge-russian-ruble",
                "badge-swiss-franc",
                "badge-x",
                "badge",
                "baggage-claim",
                "ban",
                "banana",
                "banknote",
                "bar-chart-2",
                "bar-chart-3",
                "bar-chart-4",
                "bar-chart-big",
                "bar-chart-horizontal-big",
                "bar-chart-horizontal",
                "bar-chart",
                "barcode",
                "baseline",
                "bath",
                "battery-charging",
                "battery-full",
                "battery-low",
                "battery-medium",
                "battery-warning",
                "battery",
                "beaker",
                "bean-off",
                "bean",
                "bed-double",
                "bed-single",
                "bed",
                "beef",
                "beer",
                "bell-dot",
                "bell-electric",
                "bell-minus",
                "bell-off",
                "bell-plus",
                "bell-ring",
                "bell",
                "between-horizontal-end",
                "between-horizontal-start",
                "between-vertical-end",
                "between-vertical-start",
                "bike",
                "binary",
                "biohazard",
                "bird",
                "bitcoin",
                "blend",
                "blinds",
                "blocks",
                "bluetooth-connected",
                "bluetooth-off",
                "bluetooth-searching",
                "bluetooth",
                "bold",
                "bolt",
                "bomb",
                "bone",
                "book-a",
                "book-audio",
                "book-check",
                "book-copy",
                "book-dashed",
                "book-down",
                "book-headphones",
                "book-heart",
                "book-image",
                "book-key",
                "book-lock",
                "book-marked",
                "book-minus",
                "book-open-check",
                "book-open-text",
                "book-open",
                "book-plus",
                "book-text",
                "book-type",
                "book-up-2",
                "book-up",
                "book-user",
                "book-x",
                "book",
                "bookmark-check",
                "bookmark-minus",
                "bookmark-plus",
                "bookmark-x",
                "bookmark",
                "boom-box",
                "bot-message-square",
                "bot",
                "box-select",
                "box",
                "boxes",
                "braces",
                "brackets",
                "brain-circuit",
                "brain-cog",
                "brain",
                "brick-wall",
                "briefcase",
                "bring-to-front",
                "brush",
                "bug-off",
                "bug-play",
                "bug",
                "building-2",
                "building",
                "bus-front",
                "bus",
                "cable-car",
                "cable",
                "cake-slice",
                "cake",
                "calculator",
                "calendar-check-2",
                "calendar-check",
                "calendar-clock",
                "calendar-days",
                "calendar-fold",
                "calendar-heart",
                "calendar-minus-2",
                "calendar-minus",
                "calendar-off",
                "calendar-plus-2",
                "calendar-plus",
                "calendar-range",
                "calendar-search",
                "calendar-x-2",
                "calendar-x",
                "calendar",
                "camera-off",
                "camera",
                "candlestick-chart",
                "candy-cane",
                "candy-off",
                "candy",
                "captions-off",
                "captions",
                "car-front",
                "car-taxi-front",
                "car",
                "caravan",
                "carrot",
                "case-lower",
                "case-sensitive",
                "case-upper",
                "cassette-tape",
                "cast",
                "castle",
                "cat",
                "cctv",
                "check-check",
                "check-circle-2",
                "check-circle",
                "check-square-2",
                "check-square",
                "check",
                "chef-hat",
                "cherry",
                "chevron-down-circle",
                "chevron-down-square",
                "chevron-down",
                "chevron-first",
                "chevron-last",
                "chevron-left-circle",
                "chevron-left-square",
                "chevron-left",
                "chevron-right-circle",
                "chevron-right-square",
                "chevron-right",
                "chevron-up-circle",
                "chevron-up-square",
                "chevron-up",
                "chevrons-down-up",
                "chevrons-down",
                "chevrons-left-right",
                "chevrons-left",
                "chevrons-right-left",
                "chevrons-right",
                "chevrons-up-down",
                "chevrons-up",
                "chrome",
                "church",
                "cigarette-off",
                "cigarette",
                "circle-dashed",
                "circle-dollar-sign",
                "circle-dot-dashed",
                "circle-dot",
                "circle-ellipsis",
                "circle-equal",
                "circle-fading-plus",
                "circle-off",
                "circle-slash-2",
                "circle-slash",
                "circle-user-round",
                "circle-user",
                "circle",
                "circuit-board",
                "citrus",
                "clapperboard",
                "clipboard-check",
                "clipboard-copy",
                "clipboard-list",
                "clipboard-minus",
                "clipboard-paste",
                "clipboard-pen-line",
                "clipboard-pen",
                "clipboard-plus",
                "clipboard-type",
                "clipboard-x",
                "clipboard",
                "clock-1",
                "clock-10",
                "clock-11",
                "clock-12",
                "clock-2",
                "clock-3",
                "clock-4",
                "clock-5",
                "clock-6",
                "clock-7",
                "clock-8",
                "clock-9",
                "clock",
                "cloud-cog",
                "cloud-drizzle",
                "cloud-fog",
                "cloud-hail",
                "cloud-lightning",
                "cloud-moon-rain",
                "cloud-moon",
                "cloud-off",
                "cloud-rain-wind",
                "cloud-rain",
                "cloud-snow",
                "cloud-sun-rain",
                "cloud-sun",
                "cloud",
                "cloudy",
                "clover",
                "club",
                "code-2",
                "code-square",
                "code",
                "codepen",
                "codesandbox",
                "coffee",
                "cog",
                "coins",
                "columns-2",
                "columns-3",
                "columns-4",
                "combine",
                "command",
                "compass",
                "component",
                "computer",
                "concierge-bell",
                "cone",
                "construction",
                "contact-2",
                "contact",
                "container",
                "contrast",
                "cookie",
                "cooking-pot",
                "copy-check",
                "copy-minus",
                "copy-plus",
                "copy-slash",
                "copy-x",
                "copy",
                "copyleft",
                "copyright",
                "corner-down-left",
                "corner-down-right",
                "corner-left-down",
                "corner-left-up",
                "corner-right-down",
                "corner-right-up",
                "corner-up-left",
                "corner-up-right",
                "cpu",
                "creative-commons",
                "credit-card",
                "croissant",
                "crop",
                "cross",
                "crosshair",
                "crown",
                "cuboid",
                "cup-soda",
                "currency",
                "cylinder",
                "database-backup",
                "database-zap",
                "database",
                "delete",
                "dessert",
                "diameter",
                "diamond",
                "dice-1",
                "dice-2",
                "dice-3",
                "dice-4",
                "dice-5",
                "dice-6",
                "dices",
                "diff",
                "disc-2",
                "disc-3",
                "disc-album",
                "disc",
                "divide-circle",
                "divide-square",
                "divide",
                "dna-off",
                "dna",
                "dog",
                "dollar-sign",
                "donut",
                "door-closed",
                "door-open",
                "dot-square",
                "dot",
                "download-cloud",
                "download",
                "drafting-compass",
                "drama",
                "dribbble",
                "drill",
                "droplet",
                "droplets",
                "drum",
                "drumstick",
                "dumbbell",
                "ear-off",
                "ear",
                "earth-lock",
                "earth",
                "eclipse",
                "egg-fried",
                "egg-off",
                "egg",
                "equal-not",
                "equal-square",
                "equal",
                "eraser",
                "euro",
                "expand",
                "external-link",
                "eye-off",
                "eye",
                "facebook",
                "factory",
                "fan",
                "fast-forward",
                "feather",
                "fence",
                "ferris-wheel",
                "figma",
                "file-archive",
                "file-audio-2",
                "file-audio",
                "file-axis-3d",
                "file-badge-2",
                "file-badge",
                "file-bar-chart-2",
                "file-bar-chart",
                "file-box",
                "file-check-2",
                "file-check",
                "file-clock",
                "file-code-2",
                "file-code",
                "file-cog",
                "file-diff",
                "file-digit",
                "file-down",
                "file-heart",
                "file-image",
                "file-input",
                "file-json-2",
                "file-json",
                "file-key-2",
                "file-key",
                "file-line-chart",
                "file-lock-2",
                "file-lock",
                "file-minus-2",
                "file-minus",
                "file-music",
                "file-output",
                "file-pen-line",
                "file-pen",
                "file-pie-chart",
                "file-plus-2",
                "file-plus",
                "file-question",
                "file-scan",
                "file-search-2",
                "file-search",
                "file-sliders",
                "file-spreadsheet",
                "file-stack",
                "file-symlink",
                "file-terminal",
                "file-text",
                "file-type-2",
                "file-type",
                "file-up",
                "file-video-2",
                "file-video",
                "file-volume-2",
                "file-volume",
                "file-warning",
                "file-x-2",
                "file-x",
                "file",
                "files",
                "film",
                "filter-x",
                "filter",
                "fingerprint",
                "fire-extinguisher",
                "fish-off",
                "fish-symbol",
                "fish",
                "flag-off",
                "flag-triangle-left",
                "flag-triangle-right",
                "flag",
                "flame-kindling",
                "flame",
                "flashlight-off",
                "flashlight",
                "flask-conical-off",
                "flask-conical",
                "flask-round",
                "flip-horizontal-2",
                "flip-horizontal",
                "flip-vertical-2",
                "flip-vertical",
                "flower-2",
                "flower",
                "focus",
                "fold-horizontal",
                "fold-vertical",
                "folder-archive",
                "folder-check",
                "folder-clock",
                "folder-closed",
                "folder-cog",
                "folder-dot",
                "folder-down",
                "folder-git-2",
                "folder-git",
                "folder-heart",
                "folder-input",
                "folder-kanban",
                "folder-key",
                "folder-lock",
                "folder-minus",
                "folder-open-dot",
                "folder-open",
                "folder-output",
                "folder-pen",
                "folder-plus",
                "folder-root",
                "folder-search-2",
                "folder-search",
                "folder-symlink",
                "folder-sync",
                "folder-tree",
                "folder-up",
                "folder-x",
                "folder",
                "folders",
                "footprints",
                "forklift",
                "form-input",
                "forward",
                "frame",
                "framer",
                "frown",
                "fuel",
                "fullscreen",
                "function-square",
                "gallery-horizontal-end",
                "gallery-horizontal",
                "gallery-thumbnails",
                "gallery-vertical-end",
                "gallery-vertical",
                "gamepad-2",
                "gamepad",
                "gantt-chart-square",
                "gantt-chart",
                "gauge-circle",
                "gauge",
                "gavel",
                "gem",
                "ghost",
                "gift",
                "git-branch-plus",
                "git-branch",
                "git-commit-horizontal",
                "git-commit-vertical",
                "git-compare-arrows",
                "git-compare",
                "git-fork",
                "git-graph",
                "git-merge",
                "git-pull-request-arrow",
                "git-pull-request-closed",
                "git-pull-request-create-arrow",
                "git-pull-request-create",
                "git-pull-request-draft",
                "git-pull-request",
                "github",
                "gitlab",
                "glass-water",
                "glasses",
                "globe-lock",
                "globe",
                "goal",
                "grab",
                "graduation-cap",
                "grape",
                "grid-2x2",
                "grid-3x3",
                "grip-horizontal",
                "grip-vertical",
                "grip",
                "group",
                "guitar",
                "hammer",
                "hand-coins",
                "hand-heart",
                "hand-helping",
                "hand-metal",
                "hand-platter",
                "hand",
                "handshake",
                "hard-drive-download",
                "hard-drive-upload",
                "hard-drive",
                "hard-hat",
                "hash",
                "haze",
                "hdmi-port",
                "heading-1",
                "heading-2",
                "heading-3",
                "heading-4",
                "heading-5",
                "heading-6",
                "heading",
                "headphones",
                "headset",
                "heart-crack",
                "heart-handshake",
                "heart-off",
                "heart-pulse",
                "heart",
                "heater",
                "help-circle",
                "hexagon",
                "highlighter",
                "history",
                "home",
                "hop-off",
                "hop",
                "hotel",
                "hourglass",
                "ice-cream-2",
                "ice-cream",
                "image-down",
                "image-minus",
                "image-off",
                "image-plus",
                "image-up",
                "image",
                "images",
                "import",
                "inbox",
                "indent",
                "indian-rupee",
                "infinity",
                "info",
                "inspection-panel",
                "instagram",
                "italic",
                "iteration-ccw",
                "iteration-cw",
                "japanese-yen",
                "joystick",
                "kanban-square-dashed",
                "kanban-square",
                "kanban",
                "key-round",
                "key-square",
                "key",
                "keyboard-music",
                "keyboard",
                "lamp-ceiling",
                "lamp-desk",
                "lamp-floor",
                "lamp-wall-down",
                "lamp-wall-up",
                "lamp",
                "land-plot",
                "landmark",
                "languages",
                "laptop-2",
                "laptop",
                "lasso-select",
                "lasso",
                "laugh",
                "layers-2",
                "layers-3",
                "layers",
                "layout-dashboard",
                "layout-grid",
                "layout-list",
                "layout-panel-left",
                "layout-panel-top",
                "layout-template",
                "leaf",
                "leafy-green",
                "library-big",
                "library-square",
                "library",
                "life-buoy",
                "ligature",
                "lightbulb-off",
                "lightbulb",
                "line-chart",
                "link-2-off",
                "link-2",
                "link",
                "linkedin",
                "list-checks",
                "list-collapse",
                "list-end",
                "list-filter",
                "list-minus",
                "list-music",
                "list-ordered",
                "list-plus",
                "list-restart",
                "list-start",
                "list-todo",
                "list-tree",
                "list-video",
                "list-x",
                "list",
                "loader-2",
                "loader",
                "locate-fixed",
                "locate-off",
                "locate",
                "lock-keyhole",
                "lock",
                "log-in",
                "log-out",
                "lollipop",
                "luggage",
                "m-square",
                "magnet",
                "mail-check",
                "mail-minus",
                "mail-open",
                "mail-plus",
                "mail-question",
                "mail-search",
                "mail-warning",
                "mail-x",
                "mail",
                "mailbox",
                "mails",
                "map-pin-off",
                "map-pin",
                "map-pinned",
                "map",
                "martini",
                "maximize-2",
                "maximize",
                "medal",
                "megaphone-off",
                "megaphone",
                "meh",
                "memory-stick",
                "menu-square",
                "menu",
                "merge",
                "message-circle-code",
                "message-circle-dashed",
                "message-circle-heart",
                "message-circle-more",
                "message-circle-off",
                "message-circle-plus",
                "message-circle-question",
                "message-circle-reply",
                "message-circle-warning",
                "message-circle-x",
                "message-circle",
                "message-square-code",
                "message-square-dashed",
                "message-square-diff",
                "message-square-dot",
                "message-square-heart",
                "message-square-more",
                "message-square-off",
                "message-square-plus",
                "message-square-quote",
                "message-square-reply",
                "message-square-share",
                "message-square-text",
                "message-square-warning",
                "message-square-x",
                "message-square",
                "messages-square",
                "mic-2",
                "mic-off",
                "mic",
                "microscope",
                "microwave",
                "milestone",
                "milk-off",
                "milk",
                "minimize-2",
                "minimize",
                "minus-circle",
                "minus-square",
                "minus",
                "monitor-check",
                "monitor-dot",
                "monitor-down",
                "monitor-off",
                "monitor-pause",
                "monitor-play",
                "monitor-smartphone",
                "monitor-speaker",
                "monitor-stop",
                "monitor-up",
                "monitor-x",
                "monitor",
                "moon-star",
                "moon",
                "more-horizontal",
                "more-vertical",
                "mountain-snow",
                "mountain",
                "mouse-pointer-2",
                "mouse-pointer-click",
                "mouse-pointer-square-dashed",
                "mouse-pointer-square",
                "mouse-pointer",
                "mouse",
                "move-3d",
                "move-diagonal-2",
                "move-diagonal",
                "move-down-left",
                "move-down-right",
                "move-down",
                "move-horizontal",
                "move-left",
                "move-right",
                "move-up-left",
                "move-up-right",
                "move-up",
                "move-vertical",
                "move",
                "music-2",
                "music-3",
                "music-4",
                "music",
                "navigation-2-off",
                "navigation-2",
                "navigation-off",
                "navigation",
                "network",
                "newspaper",
                "nfc",
                "notebook-pen",
                "notebook-tabs",
                "notebook-text",
                "notebook",
                "notepad-text-dashed",
                "notepad-text",
                "nut-off",
                "nut",
                "octagon",
                "option",
                "orbit",
                "outdent",
                "package-2",
                "package-check",
                "package-minus",
                "package-open",
                "package-plus",
                "package-search",
                "package-x",
                "package",
                "paint-bucket",
                "paint-roller",
                "paintbrush-2",
                "paintbrush",
                "palette",
                "palmtree",
                "panel-bottom-close",
                "panel-bottom-dashed",
                "panel-bottom-open",
                "panel-bottom",
                "panel-left-close",
                "panel-left-dashed",
                "panel-left-open",
                "panel-left",
                "panel-right-close",
                "panel-right-dashed",
                "panel-right-open",
                "panel-right",
                "panel-top-close",
                "panel-top-dashed",
                "panel-top-open",
                "panel-top",
                "panels-left-bottom",
                "panels-right-bottom",
                "panels-top-left",
                "paperclip",
                "parentheses",
                "parking-circle-off",
                "parking-circle",
                "parking-meter",
                "parking-square-off",
                "parking-square",
                "party-popper",
                "pause-circle",
                "pause-octagon",
                "pause",
                "paw-print",
                "pc-case",
                "pen-line",
                "pen-tool",
                "pen",
                "pencil-line",
                "pencil-ruler",
                "pencil",
                "pentagon",
                "percent-circle",
                "percent-diamond",
                "percent-square",
                "percent",
                "person-standing",
                "phone-call",
                "phone-forwarded",
                "phone-incoming",
                "phone-missed",
                "phone-off",
                "phone-outgoing",
                "phone",
                "pi-square",
                "pi",
                "piano",
                "pickaxe",
                "picture-in-picture-2",
                "picture-in-picture",
                "pie-chart",
                "piggy-bank",
                "pilcrow-square",
                "pilcrow",
                "pill",
                "pin-off",
                "pin",
                "pipette",
                "pizza",
                "plane-landing",
                "plane-takeoff",
                "plane",
                "play-circle",
                "play-square",
                "play",
                "plug-2",
                "plug-zap-2",
                "plug-zap",
                "plug",
                "plus-circle",
                "plus-square",
                "plus",
                "pocket-knife",
                "pocket",
                "podcast",
                "pointer-off",
                "pointer",
                "popcorn",
                "popsicle",
                "pound-sterling",
                "power-circle",
                "power-off",
                "power-square",
                "power",
                "presentation",
                "printer",
                "projector",
                "puzzle",
                "pyramid",
                "qr-code",
                "quote",
                "rabbit",
                "radar",
                "radiation",
                "radical",
                "radio-receiver",
                "radio-tower",
                "radio",
                "radius",
                "rail-symbol",
                "rainbow",
                "rat",
                "ratio",
                "receipt-cent",
                "receipt-euro",
                "receipt-indian-rupee",
                "receipt-japanese-yen",
                "receipt-pound-sterling",
                "receipt-russian-ruble",
                "receipt-swiss-franc",
                "receipt-text",
                "receipt",
                "rectangle-horizontal",
                "rectangle-vertical",
                "recycle",
                "redo-2",
                "redo-dot",
                "redo",
                "refresh-ccw-dot",
                "refresh-ccw",
                "refresh-cw-off",
                "refresh-cw",
                "refrigerator",
                "regex",
                "remove-formatting",
                "repeat-1",
                "repeat-2",
                "repeat",
                "replace-all",
                "replace",
                "reply-all",
                "reply",
                "rewind",
                "ribbon",
                "rocket",
                "rocking-chair",
                "roller-coaster",
                "rotate-3d",
                "rotate-ccw",
                "rotate-cw",
                "route-off",
                "route",
                "router",
                "rows-2",
                "rows-3",
                "rows-4",
                "rss",
                "ruler",
                "russian-ruble",
                "sailboat",
                "salad",
                "sandwich",
                "satellite-dish",
                "satellite",
                "save-all",
                "save",
                "scale-3d",
                "scale",
                "scaling",
                "scan-barcode",
                "scan-eye",
                "scan-face",
                "scan-line",
                "scan-search",
                "scan-text",
                "scan",
                "scatter-chart",
                "school-2",
                "school",
                "scissors-line-dashed",
                "scissors-square-dashed-bottom",
                "scissors-square",
                "scissors",
                "screen-share-off",
                "screen-share",
                "scroll-text",
                "scroll",
                "search-check",
                "search-code",
                "search-slash",
                "search-x",
                "search",
                "send-horizontal",
                "send-to-back",
                "send",
                "separator-horizontal",
                "separator-vertical",
                "server-cog",
                "server-crash",
                "server-off",
                "server",
                "settings-2",
                "settings",
                "shapes",
                "share-2",
                "share",
                "sheet",
                "shell",
                "shield-alert",
                "shield-ban",
                "shield-check",
                "shield-ellipsis",
                "shield-half",
                "shield-minus",
                "shield-off",
                "shield-plus",
                "shield-question",
                "shield-x",
                "shield",
                "ship-wheel",
                "ship",
                "shirt",
                "shopping-bag",
                "shopping-basket",
                "shopping-cart",
                "shovel",
                "shower-head",
                "shrink",
                "shrub",
                "shuffle",
                "sigma-square",
                "sigma",
                "signal-high",
                "signal-low",
                "signal-medium",
                "signal-zero",
                "signal",
                "signpost-big",
                "signpost",
                "siren",
                "skip-back",
                "skip-forward",
                "skull",
                "slack",
                "slash-square",
                "slash",
                "slice",
                "sliders-horizontal",
                "sliders",
                "smartphone-charging",
                "smartphone-nfc",
                "smartphone",
                "smile-plus",
                "smile",
                "snail",
                "snowflake",
                "sofa",
                "soup",
                "space",
                "spade",
                "sparkle",
                "sparkles",
                "speaker",
                "speech",
                "spell-check-2",
                "spell-check",
                "spline",
                "split-square-horizontal",
                "split-square-vertical",
                "split",
                "spray-can",
                "sprout",
                "square-dashed-bottom-code",
                "square-dashed-bottom",
                "square-pen",
                "square-radical",
                "square-stack",
                "square-user-round",
                "square-user",
                "square",
                "squircle",
                "squirrel",
                "stamp",
                "star-half",
                "star-off",
                "star",
                "step-back",
                "step-forward",
                "stethoscope",
                "sticker",
                "sticky-note",
                "stop-circle",
                "store",
                "stretch-horizontal",
                "stretch-vertical",
                "strikethrough",
                "subscript",
                "sun-dim",
                "sun-medium",
                "sun-moon",
                "sun-snow",
                "sun",
                "sunrise",
                "sunset",
                "superscript",
                "swatch-book",
                "swiss-franc",
                "switch-camera",
                "sword",
                "swords",
                "syringe",
                "table-2",
                "table-cells-merge",
                "table-cells-split",
                "table-columns-split",
                "table-properties",
                "table-rows-split",
                "table",
                "tablet-smartphone",
                "tablet",
                "tablets",
                "tag",
                "tags",
                "tally-1",
                "tally-2",
                "tally-3",
                "tally-4",
                "tally-5",
                "tangent",
                "target",
                "telescope",
                "tent-tree",
                "tent",
                "terminal-square",
                "terminal",
                "test-tube-2",
                "test-tube",
                "test-tubes",
                "text-cursor-input",
                "text-cursor",
                "text-quote",
                "text-search",
                "text-select",
                "text",
                "theater",
                "thermometer-snowflake",
                "thermometer-sun",
                "thermometer",
                "thumbs-down",
                "thumbs-up",
                "ticket-check",
                "ticket-minus",
                "ticket-percent",
                "ticket-plus",
                "ticket-slash",
                "ticket-x",
                "ticket",
                "timer-off",
                "timer-reset",
                "timer",
                "toggle-left",
                "toggle-right",
                "tornado",
                "torus",
                "touchpad-off",
                "touchpad",
                "tower-control",
                "toy-brick",
                "tractor",
                "traffic-cone",
                "train-front-tunnel",
                "train-front",
                "train-track",
                "tram-front",
                "trash-2",
                "trash",
                "tree-deciduous",
                "tree-pine",
                "trees",
                "trello",
                "trending-down",
                "trending-up",
                "triangle-right",
                "triangle",
                "trophy",
                "truck",
                "turtle",
                "tv-2",
                "tv",
                "twitch",
                "twitter",
                "type",
                "umbrella-off",
                "umbrella",
                "underline",
                "undo-2",
                "undo-dot",
                "undo",
                "unfold-horizontal",
                "unfold-vertical",
                "ungroup",
                "unlink-2",
                "unlink",
                "unlock-keyhole",
                "unlock",
                "unplug",
                "upload-cloud",
                "upload",
                "usb",
                "user-check",
                "user-cog",
                "user-minus",
                "user-plus",
                "user-round-check",
                "user-round-cog",
                "user-round-minus",
                "user-round-plus",
                "user-round-search",
                "user-round-x",
                "user-round",
                "user-search",
                "user-x",
                "user",
                "users-round",
                "users",
                "utensils-crossed",
                "utensils",
                "utility-pole",
                "variable",
                "vault",
                "vegan",
                "venetian-mask",
                "vibrate-off",
                "vibrate",
                "video-off",
                "video",
                "videotape",
                "view",
                "voicemail",
                "volume-1",
                "volume-2",
                "volume-x",
                "volume",
                "vote",
                "wallet-2",
                "wallet-cards",
                "wallet",
                "wallpaper",
                "wand-2",
                "wand",
                "warehouse",
                "washing-machine",
                "watch",
                "waves",
                "waypoints",
                "webcam",
                "webhook-off",
                "webhook",
                "weight",
                "wheat-off",
                "wheat",
                "whole-word",
                "wifi-off",
                "wifi",
                "wind",
                "wine-off",
                "wine",
                "workflow",
                "wrap-text",
                "wrench",
                "x-circle",
                "x-octagon",
                "x-square",
                "x",
                "youtube",
                "zap-off",
                "zap",
                "zoom-in",
                "zoom-out",
                "bibliography",
                "bookmarks",
                "data",
                "fitness",
                "idea",
                "important",
                "journal",
                "latex",
                "math",
                "paperPdf",
                "physics",
                "physicsData",
                "quicknote",
                "readingList",
                "recipe",
                "researchPapers",
                "schedule",
                "shoppingList",
                "snippet",
                "tech",
                "todolist",
                "avatar",
                "darktoggle",
                "note",
                "tip",
                "faq",
                "abstract",
                "todo",
                "success",
                "warn",
                "fail",
                "example",
                "cite",
                "plain",
                "css",
                "jupyter",
                "kotlin",
                "markdown",
                "node",
                "npm",
                "python",
                "react",
                "swift",
                "vercel",
                "ulld"
              ],
              default: "ulld"
            },
            inSidebar: {
              type: "boolean",
              default: false
            },
            inNavbar: {
              type: "boolean",
              default: false
            }
          },
          required: [
            "fs",
            "label"
          ],
          additionalProperties: false
        },
        default: [
          {
            id: "dailyNote",
            fs: "/dailyNotes",
            label: "Daily Notes"
          }
        ],
        description: "This is the main location to describe the structure of your notes. Break up your note directory into as many categories as you like, but this app is designed to allow for increasingly refined searching and filtering. Categories of 'math', 'physics' and 'chemistry' would likely fit most users better than 'calc1', 'calc2', 'linearAlgebra', etc. For use cases such as those, please look at the 'autoTag', 'autoSubject', and 'autoTopic' feature."
      },
      bibPath: {
        type: "string",
        default: "/citations.bib",
        description: "The root relative path to the .bib file to be integrated within your app."
      },
      cslPath: {
        type: "string",
        description: "The root relative path to the .csl file to be used for styling citations. An incredibly robust repo of different csl styles can be found at https://github.com/citation-style-language/styles"
      },
      dateHandling: {
        type: "object",
        properties: {
          enableAdvancedFormat: {
            type: "boolean",
            default: true,
            description: "Whether or not to enable format strings that follow the syntax described by dayjs's advancedFormat plugin."
          },
          format: {
            anyOf: [
              {
                type: "string",
                description: "The string to pass to "
              },
              {
                type: "object",
                properties: {
                  short: {
                    type: "string",
                    default: "MM/D/YYYY",
                    description: "The format string passed to dayjs to format dates for short or small display fields. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."
                  },
                  long: {
                    type: "string",
                    default: "MMM Do, YYYY",
                    description: "The format string passed to dayjs to format dates for display fields where size is less of a concern. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."
                  },
                  withTime: {
                    type: "string",
                    default: "MM/DD/YY [at] HH:mm a",
                    description: "The format string passed to dayjs to format dates for fields where the time is relevant. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."
                  },
                  timeOnly: {
                    type: "string",
                    default: "HH:mm a",
                    description: "The format string passed to dayjs to format dates for fields where the time is relevant. Formatting using the advancedFormat plugin is enabled by default. Please see the documentation of dayjs for more information about the date formatting syntax, both with and without the advanced format plugin."
                  }
                },
                additionalProperties: false
              }
            ],
            default: {
              short: "MM/DD/YYYY",
              long: "MMM Do, YYYY",
              withTime: "MM/DD/YY [at] HH:mm a",
              timeOnly: "HH:mm a"
            }
          },
          defaultTimeDisplayType: {
            anyOf: [
              {
                type: "string",
                const: "analog",
                description: "Similar to a digital clock."
              },
              {
                type: "string",
                const: "summarized",
                description: "A short but more natural description of time. This requires the dateParseFormat.enableAdvancedFormat option."
              },
              {
                type: "string",
                const: "descriptive",
                description: "Time with relative times. ie: '2 days ago', 'tomorrow', etc. This requires the dateParseFormat.enableAdvancedFormat option. Default: summarized."
              }
            ],
            default: "summarized"
          },
          defaultTimeZone: {
            type: "string",
            description: "The time to be used to override the value found locally. In most cases this should be left empty to allow the timezone to be derived naturally, but in cases of some mangaged devices this may not be accurate. To see the timezone that your browser would provide, open the developer console and type 'Intl.DateTimeFormat().resolvedOptions().timeZone'. If that property does not match what is expected, set this value accordingly."
          }
        },
        additionalProperties: false,
        default: {
          enableAdvancedFormat: true,
          format: {
            short: "MM/DD/YYYY",
            long: "MMM Do, YYYY",
            withTime: "MM/DD/YY [at] HH:mm a",
            timeOnly: "HH:mm a"
          },
          defaultTimeDisplayType: "analog"
        }
      },
      autoTag: {
        type: "array",
        items: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The glob pattern to test paths against."
            },
            tag: {
              type: "string",
              maxLength: 15
            }
          },
          required: [
            "path",
            "tag"
          ],
          additionalProperties: false
        },
        default: []
      },
      autoTopic: {
        type: "array",
        items: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The glob pattern to test paths against."
            },
            topic: {
              type: "string",
              maxLength: 50
            }
          },
          required: [
            "path",
            "topic"
          ],
          additionalProperties: false
        },
        default: []
      },
      autoSubject: {
        type: "array",
        items: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The glob pattern to test paths against."
            },
            subject: {
              type: "string",
              maxLength: 50
            }
          },
          required: [
            "path",
            "subject"
          ],
          additionalProperties: false
        },
        default: []
      },
      linkAliases: {
        type: "object",
        additionalProperties: {
          type: "string",
          format: "uri"
        },
        description: "A map of key value pairs of commonly referenced urls.",
        default: {}
      },
      features: {
        type: "object",
        properties: {
          enabled: {
            type: "object",
            properties: {
              commandPalette: {
                type: "boolean",
                default: true,
                description: "Whether or not app should include the command palette feature. This is only made available for the rare instance of breaking bugs within the command palette."
              },
              tikz: {
                type: "boolean",
                default: true,
                description: "Whether or not to build with support for the tikz component. To allow drawing diagrams with the tikz latex package's syntax."
              }
            },
            additionalProperties: false,
            default: {
              commandPalette: true,
              tikz: true
            }
          },
          pages: {
            type: "object",
            properties: {
              equations: {
                type: "boolean",
                default: true,
                description: "Whether or not to generate an 'equations' page to input, store, reference and search equations."
              },
              snippets: {
                type: "boolean",
                default: true,
                description: "Whether or not to generate a 'snippets' page to input, store, reference and search equations."
              },
              calendar: {
                type: "boolean",
                default: true,
                description: "Whether or not to build a calendar page to integrate Google calendar within ULLD."
              },
              bibliography: {
                type: "boolean",
                default: true,
                description: "Whether or not to build a bibliography page to allow the searching, sorting and referencing files and citations related to the apps .bib content."
              },
              taskManager: {
                type: "boolean",
                default: true,
                description: "Whether or not to build a 'todo' page to integrate a task manager within the app."
              }
            },
            additionalProperties: false
          }
        },
        required: [
          "pages"
        ],
        additionalProperties: false
      },
      code: {
        type: "object",
        properties: {
          theme: {
            type: "object",
            properties: {
              dark: {
                type: "string",
                enum: [
                  "andromeeda",
                  "aurora-x",
                  "ayu-dark",
                  "catppuccin-frappe",
                  "catppuccin-latte",
                  "catppuccin-macchiato",
                  "catppuccin-mocha",
                  "dark-plus",
                  "dracula",
                  "dracula-soft",
                  "github-dark",
                  "github-dark-dimmed",
                  "github-light",
                  "light-plus",
                  "material-theme",
                  "material-theme-darker",
                  "material-theme-lighter",
                  "material-theme-ocean",
                  "material-theme-palenight",
                  "min-dark",
                  "min-light",
                  "monokai",
                  "night-owl",
                  "nord",
                  "one-dark-pro",
                  "poimandres",
                  "red",
                  "rose-pine",
                  "rose-pine-dawn",
                  "rose-pine-moon",
                  "slack-dark",
                  "slack-ochin",
                  "solarized-dark",
                  "solarized-light",
                  "synthwave-84",
                  "tokyo-night",
                  "vesper",
                  "vitesse-black",
                  "vitesse-dark",
                  "vitesse-light"
                ],
                default: "dracula",
                description: "Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param."
              },
              light: {
                $ref: "#/definitions/ulldAppConfig/properties/code/properties/theme/properties/dark",
                default: "material-theme-lighter",
                description: "Syntax highlighting theme to be used when in light mode. Can be overriden with the ?shikiHlLight=nord search param."
              }
            },
            additionalProperties: false,
            default: {
              dark: "dracula",
              light: "material-theme-lighter"
            }
          },
          editor: {
            type: "object",
            properties: {
              defaultLangauge: {
                type: "string",
                default: "python"
              },
              useVimMode: {
                type: "boolean",
                default: false
              }
            },
            additionalProperties: false,
            default: {}
          },
          syntaxHighlighting: {
            type: "object",
            properties: {
              transformers: {
                type: "object",
                properties: {
                  regexHighlight: {
                    type: "boolean",
                    description: "shiki#transformerMetaWordHighlight",
                    default: true
                  },
                  lineHighlight: {
                    type: "boolean",
                    description: "shiki#transformerMetaHighlight",
                    default: true
                  },
                  lineFocus: {
                    type: "boolean",
                    description: "shiki#transformerNotationFocus",
                    default: false
                  },
                  lineErrorLevel: {
                    type: "boolean",
                    description: "shiki#transformerNotationErrorLevel",
                    default: false
                  },
                  lineDiff: {
                    type: "boolean",
                    description: "shiki#transformerNotationDiff",
                    default: false
                  }
                },
                additionalProperties: false,
                default: {}
              },
              defaultLanguage: {
                anyOf: [
                  {
                    type: "string",
                    enum: [
                      "abap",
                      "actionscript-3",
                      "ada",
                      "angular-html",
                      "angular-ts",
                      "apache",
                      "apex",
                      "apl",
                      "applescript",
                      "ara",
                      "asm",
                      "astro",
                      "awk",
                      "ballerina",
                      "bat",
                      "beancount",
                      "berry",
                      "bibtex",
                      "bicep",
                      "blade",
                      "c",
                      "cadence",
                      "clarity",
                      "clojure",
                      "cmake",
                      "cobol",
                      "codeql",
                      "coffee",
                      "cpp",
                      "crystal",
                      "csharp",
                      "css",
                      "csv",
                      "cue",
                      "cypher",
                      "d",
                      "dart",
                      "dax",
                      "diff",
                      "docker",
                      "dream-maker",
                      "elixir",
                      "elm",
                      "erb",
                      "erlang",
                      "fish",
                      "fortran-fixed-form",
                      "fortran-free-form",
                      "fsharp",
                      "gdresource",
                      "gdscript",
                      "gdshader",
                      "gherkin",
                      "git-commit",
                      "git-rebase",
                      "glimmer-js",
                      "glimmer-ts",
                      "glsl",
                      "gnuplot",
                      "go",
                      "graphql",
                      "groovy",
                      "hack",
                      "haml",
                      "handlebars",
                      "haskell",
                      "hcl",
                      "hjson",
                      "hlsl",
                      "html",
                      "html-derivative",
                      "http",
                      "imba",
                      "ini",
                      "java",
                      "javascript",
                      "jinja",
                      "jison",
                      "json",
                      "json5",
                      "jsonc",
                      "jsonl",
                      "jsonnet",
                      "jssm",
                      "jsx",
                      "julia",
                      "kotlin",
                      "kusto",
                      "latex",
                      "less",
                      "liquid",
                      "lisp",
                      "logo",
                      "lua",
                      "make",
                      "markdown",
                      "marko",
                      "matlab",
                      "mdc",
                      "mdx",
                      "mermaid",
                      "mojo",
                      "move",
                      "narrat",
                      "nextflow",
                      "nginx",
                      "nim",
                      "nix",
                      "nushell",
                      "objective-c",
                      "objective-cpp",
                      "ocaml",
                      "pascal",
                      "perl",
                      "php",
                      "plsql",
                      "postcss",
                      "powerquery",
                      "powershell",
                      "prisma",
                      "prolog",
                      "proto",
                      "pug",
                      "puppet",
                      "purescript",
                      "python",
                      "r",
                      "raku",
                      "razor",
                      "reg",
                      "rel",
                      "riscv",
                      "rst",
                      "ruby",
                      "rust",
                      "sas",
                      "sass",
                      "scala",
                      "scheme",
                      "scss",
                      "shaderlab",
                      "shellscript",
                      "shellsession",
                      "smalltalk",
                      "solidity",
                      "sparql",
                      "splunk",
                      "sql",
                      "ssh-config",
                      "stata",
                      "stylus",
                      "svelte",
                      "swift",
                      "system-verilog",
                      "tasl",
                      "tcl",
                      "terraform",
                      "tex",
                      "toml",
                      "tsx",
                      "turtle",
                      "twig",
                      "typescript",
                      "typst",
                      "v",
                      "vb",
                      "verilog",
                      "vhdl",
                      "viml",
                      "vue",
                      "vue-html",
                      "vyper",
                      "wasm",
                      "wenyan",
                      "wgsl",
                      "wolfram",
                      "xml",
                      "xsl",
                      "yaml",
                      "zenscript",
                      "zig",
                      "batch",
                      "be",
                      "cdc",
                      "clj",
                      "ql",
                      "coffeescript",
                      "c++",
                      "c#",
                      "cs",
                      "cql",
                      "dockerfile",
                      "erl",
                      "f",
                      "for",
                      "f77",
                      "f90",
                      "f95",
                      "f03",
                      "f08",
                      "f18",
                      "f#",
                      "fs",
                      "gjs",
                      "gts",
                      "gql",
                      "hbs",
                      "hs",
                      "properties",
                      "js",
                      "fsl",
                      "kt",
                      "kts",
                      "kql",
                      "makefile",
                      "md",
                      "nar",
                      "nf",
                      "nu",
                      "objc",
                      "ps",
                      "ps1",
                      "jade",
                      "py",
                      "perl6",
                      "rb",
                      "rs",
                      "shader",
                      "bash",
                      "sh",
                      "shell",
                      "zsh",
                      "console",
                      "spl",
                      "styl",
                      "tf",
                      "tfvars",
                      "ts",
                      "typ",
                      "cmd",
                      "vim",
                      "vimscript",
                      "vy",
                      "\u6587\u8A00",
                      "wl",
                      "yml"
                    ]
                  },
                  {
                    type: "object",
                    properties: {
                      inline: {
                        type: "string",
                        enum: [
                          "abap",
                          "actionscript-3",
                          "ada",
                          "angular-html",
                          "angular-ts",
                          "apache",
                          "apex",
                          "apl",
                          "applescript",
                          "ara",
                          "asm",
                          "astro",
                          "awk",
                          "ballerina",
                          "bat",
                          "beancount",
                          "berry",
                          "bibtex",
                          "bicep",
                          "blade",
                          "c",
                          "cadence",
                          "clarity",
                          "clojure",
                          "cmake",
                          "cobol",
                          "codeql",
                          "coffee",
                          "cpp",
                          "crystal",
                          "csharp",
                          "css",
                          "csv",
                          "cue",
                          "cypher",
                          "d",
                          "dart",
                          "dax",
                          "diff",
                          "docker",
                          "dream-maker",
                          "elixir",
                          "elm",
                          "erb",
                          "erlang",
                          "fish",
                          "fortran-fixed-form",
                          "fortran-free-form",
                          "fsharp",
                          "gdresource",
                          "gdscript",
                          "gdshader",
                          "gherkin",
                          "git-commit",
                          "git-rebase",
                          "glimmer-js",
                          "glimmer-ts",
                          "glsl",
                          "gnuplot",
                          "go",
                          "graphql",
                          "groovy",
                          "hack",
                          "haml",
                          "handlebars",
                          "haskell",
                          "hcl",
                          "hjson",
                          "hlsl",
                          "html",
                          "html-derivative",
                          "http",
                          "imba",
                          "ini",
                          "java",
                          "javascript",
                          "jinja",
                          "jison",
                          "json",
                          "json5",
                          "jsonc",
                          "jsonl",
                          "jsonnet",
                          "jssm",
                          "jsx",
                          "julia",
                          "kotlin",
                          "kusto",
                          "latex",
                          "less",
                          "liquid",
                          "lisp",
                          "logo",
                          "lua",
                          "make",
                          "markdown",
                          "marko",
                          "matlab",
                          "mdc",
                          "mdx",
                          "mermaid",
                          "mojo",
                          "move",
                          "narrat",
                          "nextflow",
                          "nginx",
                          "nim",
                          "nix",
                          "nushell",
                          "objective-c",
                          "objective-cpp",
                          "ocaml",
                          "pascal",
                          "perl",
                          "php",
                          "plsql",
                          "postcss",
                          "powerquery",
                          "powershell",
                          "prisma",
                          "prolog",
                          "proto",
                          "pug",
                          "puppet",
                          "purescript",
                          "python",
                          "r",
                          "raku",
                          "razor",
                          "reg",
                          "rel",
                          "riscv",
                          "rst",
                          "ruby",
                          "rust",
                          "sas",
                          "sass",
                          "scala",
                          "scheme",
                          "scss",
                          "shaderlab",
                          "shellscript",
                          "shellsession",
                          "smalltalk",
                          "solidity",
                          "sparql",
                          "splunk",
                          "sql",
                          "ssh-config",
                          "stata",
                          "stylus",
                          "svelte",
                          "swift",
                          "system-verilog",
                          "tasl",
                          "tcl",
                          "terraform",
                          "tex",
                          "toml",
                          "tsx",
                          "turtle",
                          "twig",
                          "typescript",
                          "typst",
                          "v",
                          "vb",
                          "verilog",
                          "vhdl",
                          "viml",
                          "vue",
                          "vue-html",
                          "vyper",
                          "wasm",
                          "wenyan",
                          "wgsl",
                          "wolfram",
                          "xml",
                          "xsl",
                          "yaml",
                          "zenscript",
                          "zig",
                          "batch",
                          "be",
                          "cdc",
                          "clj",
                          "ql",
                          "coffeescript",
                          "c++",
                          "c#",
                          "cs",
                          "cql",
                          "dockerfile",
                          "erl",
                          "f",
                          "for",
                          "f77",
                          "f90",
                          "f95",
                          "f03",
                          "f08",
                          "f18",
                          "f#",
                          "fs",
                          "gjs",
                          "gts",
                          "gql",
                          "hbs",
                          "hs",
                          "properties",
                          "js",
                          "fsl",
                          "kt",
                          "kts",
                          "kql",
                          "makefile",
                          "md",
                          "nar",
                          "nf",
                          "nu",
                          "objc",
                          "ps",
                          "ps1",
                          "jade",
                          "py",
                          "perl6",
                          "rb",
                          "rs",
                          "shader",
                          "bash",
                          "sh",
                          "shell",
                          "zsh",
                          "console",
                          "spl",
                          "styl",
                          "tf",
                          "tfvars",
                          "ts",
                          "typ",
                          "cmd",
                          "vim",
                          "vimscript",
                          "vy",
                          "\u6587\u8A00",
                          "wl",
                          "yml"
                        ]
                      },
                      block: {
                        type: "string",
                        enum: [
                          "abap",
                          "actionscript-3",
                          "ada",
                          "angular-html",
                          "angular-ts",
                          "apache",
                          "apex",
                          "apl",
                          "applescript",
                          "ara",
                          "asm",
                          "astro",
                          "awk",
                          "ballerina",
                          "bat",
                          "beancount",
                          "berry",
                          "bibtex",
                          "bicep",
                          "blade",
                          "c",
                          "cadence",
                          "clarity",
                          "clojure",
                          "cmake",
                          "cobol",
                          "codeql",
                          "coffee",
                          "cpp",
                          "crystal",
                          "csharp",
                          "css",
                          "csv",
                          "cue",
                          "cypher",
                          "d",
                          "dart",
                          "dax",
                          "diff",
                          "docker",
                          "dream-maker",
                          "elixir",
                          "elm",
                          "erb",
                          "erlang",
                          "fish",
                          "fortran-fixed-form",
                          "fortran-free-form",
                          "fsharp",
                          "gdresource",
                          "gdscript",
                          "gdshader",
                          "gherkin",
                          "git-commit",
                          "git-rebase",
                          "glimmer-js",
                          "glimmer-ts",
                          "glsl",
                          "gnuplot",
                          "go",
                          "graphql",
                          "groovy",
                          "hack",
                          "haml",
                          "handlebars",
                          "haskell",
                          "hcl",
                          "hjson",
                          "hlsl",
                          "html",
                          "html-derivative",
                          "http",
                          "imba",
                          "ini",
                          "java",
                          "javascript",
                          "jinja",
                          "jison",
                          "json",
                          "json5",
                          "jsonc",
                          "jsonl",
                          "jsonnet",
                          "jssm",
                          "jsx",
                          "julia",
                          "kotlin",
                          "kusto",
                          "latex",
                          "less",
                          "liquid",
                          "lisp",
                          "logo",
                          "lua",
                          "make",
                          "markdown",
                          "marko",
                          "matlab",
                          "mdc",
                          "mdx",
                          "mermaid",
                          "mojo",
                          "move",
                          "narrat",
                          "nextflow",
                          "nginx",
                          "nim",
                          "nix",
                          "nushell",
                          "objective-c",
                          "objective-cpp",
                          "ocaml",
                          "pascal",
                          "perl",
                          "php",
                          "plsql",
                          "postcss",
                          "powerquery",
                          "powershell",
                          "prisma",
                          "prolog",
                          "proto",
                          "pug",
                          "puppet",
                          "purescript",
                          "python",
                          "r",
                          "raku",
                          "razor",
                          "reg",
                          "rel",
                          "riscv",
                          "rst",
                          "ruby",
                          "rust",
                          "sas",
                          "sass",
                          "scala",
                          "scheme",
                          "scss",
                          "shaderlab",
                          "shellscript",
                          "shellsession",
                          "smalltalk",
                          "solidity",
                          "sparql",
                          "splunk",
                          "sql",
                          "ssh-config",
                          "stata",
                          "stylus",
                          "svelte",
                          "swift",
                          "system-verilog",
                          "tasl",
                          "tcl",
                          "terraform",
                          "tex",
                          "toml",
                          "tsx",
                          "turtle",
                          "twig",
                          "typescript",
                          "typst",
                          "v",
                          "vb",
                          "verilog",
                          "vhdl",
                          "viml",
                          "vue",
                          "vue-html",
                          "vyper",
                          "wasm",
                          "wenyan",
                          "wgsl",
                          "wolfram",
                          "xml",
                          "xsl",
                          "yaml",
                          "zenscript",
                          "zig",
                          "batch",
                          "be",
                          "cdc",
                          "clj",
                          "ql",
                          "coffeescript",
                          "c++",
                          "c#",
                          "cs",
                          "cql",
                          "dockerfile",
                          "erl",
                          "f",
                          "for",
                          "f77",
                          "f90",
                          "f95",
                          "f03",
                          "f08",
                          "f18",
                          "f#",
                          "fs",
                          "gjs",
                          "gts",
                          "gql",
                          "hbs",
                          "hs",
                          "properties",
                          "js",
                          "fsl",
                          "kt",
                          "kts",
                          "kql",
                          "makefile",
                          "md",
                          "nar",
                          "nf",
                          "nu",
                          "objc",
                          "ps",
                          "ps1",
                          "jade",
                          "py",
                          "perl6",
                          "rb",
                          "rs",
                          "shader",
                          "bash",
                          "sh",
                          "shell",
                          "zsh",
                          "console",
                          "spl",
                          "styl",
                          "tf",
                          "tfvars",
                          "ts",
                          "typ",
                          "cmd",
                          "vim",
                          "vimscript",
                          "vy",
                          "\u6587\u8A00",
                          "wl",
                          "yml"
                        ]
                      }
                    },
                    required: [
                      "inline",
                      "block"
                    ],
                    additionalProperties: false
                  }
                ],
                default: {
                  inline: "zsh",
                  block: "python"
                }
              }
            },
            additionalProperties: false,
            default: {}
          }
        },
        additionalProperties: false,
        default: {}
      },
      math: {
        type: "object",
        properties: {
          latexPackages: {
            anyOf: [
              {
                type: "array",
                items: {
                  type: "string"
                },
                description: "Latex packages to be loaded internally. Packages must be supported and available through MathJax."
              },
              {
                type: "string",
                const: "all"
              }
            ],
            default: "all"
          },
          latexFontUrl: {
            type: "string",
            description: "URL of the latex font to be used. This should be left to it's default value unless an additional collection of .woff files are included in the build.additionalPublicResources field."
          },
          constants: {
            type: "object",
            additionalProperties: {
              type: "number"
            },
            default: {}
          }
        },
        additionalProperties: false,
        default: {}
      },
      plotting: {
        type: "object",
        properties: {
          plotColorList: {
            anyOf: [
              {
                type: "array",
                items: {
                  type: "string"
                },
                description: "An array of colors to cycle through for multiple plot paths."
              },
              {
                type: "object",
                properties: {
                  dark: {
                    $ref: "#/definitions/ulldAppConfig/properties/plotting/properties/plotColorList/anyOf/0"
                  },
                  light: {
                    $ref: "#/definitions/ulldAppConfig/properties/plotting/properties/plotColorList/anyOf/0"
                  }
                },
                required: [
                  "dark",
                  "light"
                ],
                additionalProperties: false
              }
            ],
            default: [
              "#e91e62",
              "#9c27b0",
              "#673ab6",
              "#3f50b5",
              "#f44336",
              "#4caf4f",
              "#00a8f4",
              "#ff5721",
              "#ffeb3a",
              "#00bcd4",
              "#cddc39"
            ]
          },
          plotColorCycleMethod: {
            type: "string",
            enum: [
              "inOrder",
              "random"
            ],
            default: "inOrder"
          }
        },
        additionalProperties: false,
        default: {}
      },
      navigation: {
        type: "object",
        properties: {
          navbarBreakpoint: {
            type: "object",
            properties: {
              full: {
                type: "number",
                default: 1024,
                description: "Pixel width at which the navbar will display all of it's contents."
              },
              minimal: {
                type: "number",
                default: 640,
                description: "Pixel width at which the navbar will display a minimal bit of content to render properly on more narrow screens. All pixel widths below this value will render a navbar with only required content. With many layouts, this means that pixel widths below this value will render only a search bar."
              }
            },
            additionalProperties: false,
            default: {
              full: 1024,
              minimal: 640
            }
          },
          maxResultLength: {
            type: "object",
            properties: {
              categories: {
                type: "number",
                default: 12
              },
              equations: {
                type: "number",
                default: 10
              },
              snippets: {
                type: "number",
                default: 10
              },
              searchAll: {
                type: "number",
                default: 12
              }
            },
            additionalProperties: false,
            description: "The default length of search results to be retrieved for each search result type. Default values will likely work well for the default layout, but as more layouts become available this setting may be adjusted to fit different search result layouts.",
            default: {
              categories: 12,
              equations: 10,
              snippets: 10,
              searchAll: 12
            }
          },
          bookmarkLink: {
            type: "string",
            enum: [
              "sidebar",
              "navbar",
              "both",
              "none"
            ],
            default: "navbar"
          },
          syncLink: {
            $ref: "#/definitions/ulldAppConfig/properties/navigation/properties/bookmarkLink",
            default: "sidebar"
          },
          fileSystemToggle: {
            $ref: "#/definitions/ulldAppConfig/properties/navigation/properties/bookmarkLink"
          },
          darkmodeToggle: {
            $ref: "#/definitions/ulldAppConfig/properties/navigation/properties/bookmarkLink",
            default: "sidebar"
          },
          settings: {
            $ref: "#/definitions/ulldAppConfig/properties/navigation/properties/bookmarkLink"
          },
          equationsLink: {
            $ref: "#/definitions/ulldAppConfig/properties/navigation/properties/bookmarkLink"
          },
          snippetsLink: {
            $ref: "#/definitions/ulldAppConfig/properties/navigation/properties/bookmarkLink",
            default: "sidebar"
          },
          backupData: {
            $ref: "#/definitions/ulldAppConfig/properties/navigation/properties/bookmarkLink"
          },
          navbarLinks: {
            type: "array",
            items: {
              anyOf: [
                {
                  type: "string",
                  description: "A document type id"
                },
                {
                  type: "object",
                  properties: {
                    label: {
                      type: "string"
                    },
                    icon: {
                      $ref: "#/definitions/ulldAppConfig/properties/noteTypes/items/properties/icon"
                    },
                    href: {
                      type: "string"
                    }
                  },
                  required: [
                    "label"
                  ],
                  additionalProperties: false
                }
              ]
            },
            default: [],
            description: "Either the document type id or the internalLink id to be to included in the navbar."
          },
          sidebarLinks: {
            type: "array",
            items: {
              anyOf: [
                {
                  type: "object",
                  properties: {
                    icon: {
                      $ref: "#/definitions/ulldAppConfig/properties/noteTypes/items/properties/icon"
                    },
                    href: {
                      type: "string"
                    },
                    label: {
                      type: "string"
                    }
                  },
                  required: [
                    "icon"
                  ],
                  additionalProperties: false
                },
                {
                  type: "string",
                  description: "The id of the document type."
                }
              ]
            },
            default: [],
            description: "Either the document type id or the internalLink id to be to included in the navbar."
          }
        },
        additionalProperties: false,
        default: {}
      },
      UI: {
        type: "object",
        properties: {
          table: {
            type: "object",
            properties: {
              maxHeight: {
                type: [
                  "string",
                  "number"
                ],
                default: 300,
                description: "The default height at which to limit tables. This can be overridden for each not individually in that note's front matter. If the value is a string, it must be able to be interpretted by css-in-tsx syntax. Numbers will automatically be interpreted as pixels."
              }
            },
            additionalProperties: false,
            default: {}
          },
          text: {
            type: "object",
            properties: {
              blockQuoteItalic: {
                type: "boolean",
                default: false,
                description: "Whether or not to italicize block quote text."
              },
              fontPaths: {
                anyOf: [
                  {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        path: {
                          type: "string",
                          description: "Should be an absolute path. As this is only required at build time, it is not necessary for this path to be a child of the fsRoot directory."
                        },
                        weight: {
                          type: "string",
                          enum: [
                            "100",
                            "200",
                            "300",
                            "400",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900"
                          ]
                        },
                        style: {
                          type: "string",
                          enum: [
                            "italic",
                            "bold",
                            "normal"
                          ]
                        }
                      },
                      required: [
                        "path",
                        "weight",
                        "style"
                      ],
                      additionalProperties: false
                    }
                  },
                  {
                    type: "string",
                    const: "default"
                  }
                ],
                default: "default",
                description: "An array of font config objects to be bundled during the build."
              }
            },
            additionalProperties: false,
            default: {}
          },
          media: {
            type: "object",
            properties: {
              imageMap: {
                type: "object",
                additionalProperties: {
                  type: "string",
                  description: "The fsRoot relative path at which this image can be found."
                },
                default: {}
              },
              includeDefaultImageMap: {
                type: "boolean",
                default: true,
                description: "Whether or not to include a default image map of light weight svg images that respond to the theme's colors to be easily embedded by their alias. Can be disabled to minimize the build size if they are unlikely to be used."
              },
              imageRemoteTest: {
                type: "array",
                items: {},
                default: []
              }
            },
            additionalProperties: false,
            default: {}
          },
          colors: {
            type: "object",
            additionalProperties: {
              anyOf: [
                {
                  not: {}
                },
                {
                  anyOf: [
                    {
                      anyOf: [
                        {
                          type: "object",
                          properties: {
                            dark: {
                              type: "string"
                            },
                            light: {
                              type: "string"
                            }
                          },
                          additionalProperties: false
                        },
                        {
                          type: "string"
                        }
                      ]
                    },
                    {
                      type: "null"
                    }
                  ]
                }
              ]
            },
            default: {
              success: "#16a34a",
              info: "#0284c7",
              error: "#dc2626",
              sky: "#07c8f9",
              yellow: "#ffff24",
              blue: "#00a1e4",
              orange: "#ff7d00",
              green: "#89fc00",
              red: "#ff0000",
              purple: "#9908ff",
              pink: "#dc0073",
              amber: {
                dark: "#f59e0b",
                light: "#d97706"
              },
              lime: {
                dark: "#84cc16",
                light: "#65a30d"
              },
              emerald: {
                dark: "#10b981",
                light: "#059669"
              },
              teal: {
                dark: "#14b8a6",
                light: "#0d9488"
              },
              cyan: {
                dark: "#06b6d4",
                light: "#0891b2"
              },
              indigo: {
                dark: "#6366f1",
                light: "#4f46e5"
              },
              fuchsia: {
                dark: "#d946ef",
                light: "#c026d3"
              },
              rose: {
                dark: "#f43f5e",
                light: "#e11d48"
              },
              slate: {
                dark: "#64748b",
                light: "#475569"
              },
              gray: {
                dark: "#6b7280",
                light: "#4b5563"
              },
              stone: {
                dark: "#78716c",
                light: "#57534e"
              },
              zinc: {
                dark: "#71717a",
                light: "#52525b"
              },
              warning: "#eab308",
              alert: "#3b82f6",
              primary: "hsl(var(--primary))",
              secondary: "hsl(var(--secondary))"
            }
          },
          theme: {
            type: "string",
            enum: [
              "blue",
              "gray",
              "green",
              "neutral",
              "orange",
              "red",
              "rose",
              "slate",
              "stone",
              "violet",
              "yellow",
              "zinc",
              "ulld"
            ],
            default: "ulld"
          },
          autoApplyMdxTitles: {
            type: "boolean",
            default: true
          }
        },
        additionalProperties: false,
        default: {}
      },
      database: {
        type: "object",
        properties: {
          storeFormatted: {
            type: "boolean",
            default: true,
            description: "Whether or not to store the formatted content along with the raw content This will improve performance and load times when rendering content  not in 'preferFs' mode, but will increase the storage size of each note. Recommended: true if running and storing notes locally where network speeds and monthly fees aren't an issue."
          },
          removeIfNotPresentInFs: {
            type: "boolean",
            default: true,
            description: "Whether or not to remove notes from the database if they are no longer found in the local file system. This is best set to true if storing all notes in one location, but can be set to false to avoid losing notes that may have been lost elsewhere."
          }
        },
        additionalProperties: false,
        default: {}
      },
      jupyter: {
        type: "object",
        properties: {
          execute: {
            type: "boolean",
            default: false,
            description: "Whether or not to execute notebook cells immediately after loading."
          },
          environment: {
            type: "string",
            default: "/opt/anaconda3/bin/python",
            description: "The *absolute* path to the python environment with which to open Jupyter cells and notebooks."
          },
          syntaxHighlightTheme: {
            type: "string",
            default: "dracula"
          },
          jupyterToken: {
            type: "string",
            description: "A secure token with which to connect to the jupyter server instance. This token must also be present in the jupyter_server_config.py file related to that environment. Any 64 character random string of alpha-numeric characters will work."
          },
          jupyterPort: {
            type: "integer",
            default: 21521,
            description: "Port on which JupyterServer instance is running. This value must match the value in your local jupyter server config."
          },
          initiallyFoldCells: {
            type: "boolean",
            default: true,
            description: "Whether or not to initally fold jupyter input cells that are embedded within mdx notes."
          },
          kernel: {
            type: "string",
            default: "python3",
            description: "Kernel name to use. Can be overriden with the search param ?kernel=someKernelName"
          },
          jupyterReactProps: {
            type: "object",
            properties: {
              collaborative: {
                type: "boolean",
                default: false,
                description: "Whether the notebook is collaborative or not. This can also be set as needed by using the search param ?colab=true"
              },
              lite: {
                type: "boolean",
                default: false,
                description: "Whether or not to use jupyterLite."
              },
              serverUrls: {
                type: "object",
                properties: {
                  baseUrl: {
                    type: "string",
                    format: "uri",
                    description: "The url with which to reach the jupyter server. Under the majority of use cases these values should be left to autopopulate based on the jupyter.serverPort value. Applying your own serverUrl should be reserved for those with experience connecting to a remote jupyter instance."
                  },
                  wsUrl: {
                    type: "string",
                    format: "uri",
                    description: "The websocket url with which to reach the jupyter server. Under the majority of use cases these values should be left to autopopulate based on the jupyter.serverPort value. Applying your own serverUrl should be reserved for those with experience connecting to a remote jupyter instance."
                  }
                },
                additionalProperties: false
              }
            },
            additionalProperties: false,
            default: {
              collaborative: false,
              lite: false
            }
          },
          nbConvert: {
            type: "object",
            properties: {
              nbconvertPath: {
                type: "string",
                description: "The path to nbConvert. This option will likely be deprecated."
              },
              conversionTimeout: {
                type: "number",
                default: 300,
                description: "The timeout in seconds with which to allow Jupyter notebooks to be converted to other formats. This option will likely be deprecated as the ability to output notebooks in alternative formats such as a pdf is being pushed back."
              },
              customConversionFunction: {
                type: "object",
                properties: {},
                additionalProperties: false
              },
              execute: {
                type: "boolean",
                default: false,
                description: "Whether or not to execute notebooks before converting via nbConvert. Can be overriden with the ?nbConvertExec=true of ?nbConvertExec=false search param."
              },
              nbConvertTemplate: {
                anyOf: [
                  {
                    type: "string",
                    const: "lab"
                  },
                  {
                    type: "string",
                    const: "classic"
                  },
                  {
                    type: "string",
                    const: "reveal"
                  },
                  {
                    type: "string"
                  }
                ],
                default: "classic",
                description: "The template option that is passed to nbConvert. Can be overridden by the search param ?nbConvertTemp=lab or ?nbConvertTemp=classic"
              },
              notebookOutputDir: {
                type: "string",
                default: "/generated",
                description: "The fsRoot relative file path where converted notebooks should be saved."
              }
            },
            additionalProperties: false,
            default: {}
          },
          jupyterNotebookProps: {
            type: "object",
            properties: {
              cellMetadataPanel: {
                type: "boolean",
                default: true,
                description: "Can be set on a per-use basis with the ?cellMeta=true or ?cellMeta=false search param."
              },
              cellSidebarMargin: {
                type: "number",
                default: 120,
                description: "The margin of each cell that should be left for the sidebar menu. This is often best left to the default or to be populated by plugins that might alter the default layout."
              },
              height: {
                type: "string",
                description: "A css-in-tsx compatible string to be used for the notebook's height. This is made accessible to combat possible bugs, but in most use cases this should remain the default value."
              },
              maxHeight: {
                type: "string",
                description: "A css-in-tsx compatible string to be used for the notebook's maximum height. This is made accessible to combat possible bugs, but in most use cases this should remain the default value."
              },
              bundledIPyWidgets: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    module: {
                      anyOf: [
                        {
                          type: "string"
                        },
                        {
                          type: "object",
                          additionalProperties: {
                            type: "string"
                          }
                        }
                      ]
                    },
                    name: {
                      type: "string"
                    },
                    version: {
                      type: "string"
                    }
                  },
                  required: [
                    "module",
                    "name",
                    "version"
                  ],
                  additionalProperties: false
                },
                default: [],
                description: "iPython widgets which to include in the notebook environment. This is most likely unnecessary, but is made available for those with Jupyter experience and more advanced use cases."
              },
              externalIPyWidgets: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: {
                      $ref: "#/definitions/ulldAppConfig/properties/jupyter/properties/jupyterNotebookProps/properties/bundledIPyWidgets/items/properties/name"
                    },
                    version: {
                      $ref: "#/definitions/ulldAppConfig/properties/jupyter/properties/jupyterNotebookProps/properties/bundledIPyWidgets/items/properties/version"
                    }
                  },
                  required: [
                    "name",
                    "version"
                  ],
                  additionalProperties: false
                },
                default: [],
                description: "iPython widgets which to include in the notebook environment. This is most likely unnecessary, but is made available for those with Jupyter experience and more advanced use cases."
              },
              nbgrader: {
                type: "boolean",
                default: false,
                description: "Whether or not to load the nbgrader tool with the notebook. This can be overridden with the ?nbgrader=true or ?nbgrader=false search param."
              },
              readOnly: {
                type: "boolean",
                default: false,
                description: "Open the notebook without the ability to write to it. This can be overridden with the search param ?nbReadOnly=true or ?nbReadOnly=false."
              }
            },
            additionalProperties: false,
            default: {
              cellMetadataPanel: true,
              cellSidebarMargin: 120,
              nbgrader: false,
              readOnly: false,
              bundledIPyWidgets: [],
              externalIPyWidgets: []
            }
          }
        },
        additionalProperties: false,
        default: {}
      },
      credentials: {
        type: "object",
        properties: {
          googleServiceAccountJsonPath: {
            type: "string",
            description: "Path to the service account credentials file to enable calendar integration."
          }
        },
        additionalProperties: false,
        default: {}
      },
      performance: {
        type: "object",
        properties: {
          latexParsingDebounceTimeout: {
            type: "number",
            minimum: 0,
            default: 500,
            description: "The period to wait in milliseconds between parsing latex content that is expected to change rapidly."
          },
          mdxParsingDebounceTimeout: {
            type: "number",
            minimum: 0,
            default: 500,
            description: "The period to wait in milliseconds between parsing markdown and mdx content that is expected to change rapidly."
          }
        },
        additionalProperties: false,
        default: {}
      },
      terminal: {
        type: "object",
        properties: {
          logLevel: {
            type: "string",
            enum: [
              "debug",
              "verbose",
              "info",
              "none"
            ],
            default: "info"
          }
        },
        additionalProperties: false,
        default: {}
      },
      slots: {
        type: "object",
        properties: {
          navigation: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                type: "object",
                properties: {
                  name: {
                    type: "string"
                  },
                  version: {
                    type: "string",
                    default: "latest"
                  }
                },
                required: [
                  "name"
                ],
                additionalProperties: false
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/navigation"
          },
          bibliography: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/bib-manager"
          },
          commandPalette: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/command-palette"
          },
          editor: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/editor"
          },
          math: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/equations"
          },
          form: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/full-form"
          },
          dashboard: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/landing-layouts"
          },
          pdf: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/pdf"
          },
          snippets: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/snippets"
          },
          taskManager: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/task-manager"
          },
          UI: {
            anyOf: [
              {
                type: "string"
              },
              {
                type: "array",
                items: {
                  type: "string"
                }
              },
              {
                $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
              },
              {
                type: "array",
                items: {
                  $ref: "#/definitions/ulldAppConfig/properties/slots/properties/navigation/anyOf/2"
                }
              }
            ],
            default: "@ulld/ui"
          }
        },
        additionalProperties: false,
        default: {}
      },
      build: {
        type: "object",
        properties: {
          database: {
            type: "object",
            properties: {
              type: {
                type: "string",
                enum: [
                  "postgres",
                  "sqlite"
                ],
                default: "postgres"
              },
              postgres: {
                type: "object",
                properties: {
                  port: {
                    type: "integer",
                    default: 5432
                  },
                  dbName: {
                    type: "string",
                    default: "ulld"
                  },
                  connectionURI: {
                    type: "string",
                    default: ""
                  }
                },
                additionalProperties: false,
                default: {}
              },
              prioritize: {
                type: "string",
                enum: [
                  "speed",
                  "size"
                ],
                default: "speed"
              }
            },
            additionalProperties: false,
            default: {}
          },
          additionalUserContent: {
            type: "object",
            properties: {
              css: {
                type: "string"
              },
              favicon: {
                type: "string"
              },
              logo: {
                type: "string"
              }
            },
            additionalProperties: false,
            default: {}
          }
        },
        additionalProperties: false,
        default: {}
      },
      meta: {
        type: "object",
        properties: {
          title: {
            type: "string",
            default: "Uh Little Less Dum"
          },
          desc: {
            type: "string"
          }
        },
        additionalProperties: false,
        default: {}
      },
      plugins: {
        anyOf: [
          {
            type: "object",
            properties: {
              name: {
                type: "string"
              },
              version: {
                type: "string",
                default: "latest"
              },
              parserIndex: {
                type: "number",
                minimum: 0,
                default: 50
              }
            },
            required: [
              "name"
            ],
            additionalProperties: false
          },
          {
            type: "array",
            items: {
              $ref: "#/definitions/ulldAppConfig/properties/plugins/anyOf/0"
            }
          },
          {
            type: "string"
          },
          {
            type: "array",
            items: {
              type: "string"
            }
          }
        ],
        default: [
          {
            name: "@ulld/api",
            parserIndex: 0,
            version: "0.0.100"
          },
          {
            name: "@ulld/plot",
            parserIndex: 0,
            version: "0.0.100"
          }
        ]
      }
    },
    required: [
      "fsRoot"
    ],
    additionalProperties: false
  }
};
var $schema = "http://json-schema.org/draft-07/schema#";
var appConfigJsonSchema_default = {
  $ref,
  definitions,
  $schema
};
export {
  $ref,
  $schema,
  appConfigJsonSchema_default as default,
  definitions
};
//# sourceMappingURL=appConfigJsonSchema.js.map