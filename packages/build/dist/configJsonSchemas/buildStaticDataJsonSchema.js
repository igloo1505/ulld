import "../chunk-7UBRHILH.js";

// src/configJsonSchemas/buildStaticDataJsonSchema.json
var $ref = "#/definitions/ulldBuildStaticData";
var definitions = {
  ulldBuildStaticData: {
    type: "object",
    properties: {
      fsRoot: {
        type: "string"
      },
      navigationLinks: {
        type: "array",
        items: {
          type: "object",
          properties: {
            label: {
              type: "string"
            },
            href: {
              type: "string"
            },
            icon: {
              type: "string"
            },
            pluginName: {
              type: "string"
            },
            category: {
              type: "string",
              enum: [
                "math",
                "snippets",
                "code",
                "AI",
                "ML",
                "writing",
                "search",
                "notebooks",
                "database",
                "work",
                "school",
                "organization",
                "task-management",
                "academic",
                "research",
                "project-planning",
                "calendar",
                "general"
              ],
              default: "general"
            }
          },
          required: [
            "label",
            "href"
          ],
          additionalProperties: false
        },
        default: []
      },
      settingPages: {
        type: "array",
        items: {
          type: "object",
          properties: {
            title: {
              type: "string"
            },
            subtitle: {
              type: "string"
            },
            href: {
              type: "string"
            },
            pluginName: {
              type: "string"
            }
          },
          required: [
            "href",
            "pluginName"
          ],
          additionalProperties: false
        },
        default: []
      },
      componentDocs: {
        type: "array",
        items: {
          type: "object",
          properties: {
            pluginName: {
              type: "string"
            },
            componentName: {
              type: "string"
            },
            embeddableSyntax: {
              type: "array",
              items: {
                type: "string",
                description: "The syntax for the component as it appears in JSX. Synonymous with the regexToInclude property in the developer config."
              },
              description: "The syntax for the component as it appears in JSX. Synonymous with the regexToInclude property in the developer config.",
              default: []
            },
            urls: {
              type: "object",
              properties: {
                short: {
                  type: "string"
                },
                full: {
                  type: "string"
                }
              },
              additionalProperties: false
            },
            filePaths: {
              type: "object",
              properties: {
                short: {
                  type: "string"
                },
                full: {
                  type: "string"
                }
              },
              additionalProperties: false
            },
            tags: {
              type: "array",
              items: {
                type: "string"
              },
              default: []
            },
            componentId: {
              type: "string"
            }
          },
          required: [
            "pluginName",
            "componentName",
            "urls",
            "filePaths",
            "componentId"
          ],
          additionalProperties: false
        },
        default: []
      },
      transpilePackages: {
        type: "array",
        items: {
          type: "string"
        },
        default: []
      },
      tailwindSources: {
        type: "array",
        items: {
          type: "string"
        },
        default: []
      }
    },
    required: [
      "fsRoot"
    ],
    additionalProperties: false
  }
};
var $schema = "http://json-schema.org/draft-07/schema#";
var buildStaticDataJsonSchema_default = {
  $ref,
  definitions,
  $schema
};
export {
  $ref,
  $schema,
  buildStaticDataJsonSchema_default as default,
  definitions
};
//# sourceMappingURL=buildStaticDataJsonSchema.js.map