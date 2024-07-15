import {
  DeveloperConfigInput,
  developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"task-manager"> = {
  pluginName: "@ulld/task-manager",
  slot: "task-manager",
  pages: [
    
  ],
  components: [
        {
            slot: "TaskDetails",
            componentName: "TaskDetails",
            export: "./taskDetails"
        },
        {
            componentName: "AddTaskModal",
            slot: "AddTask",
            export: "./addTask"
        },
        {
            componentName: "TaskListResultList",
            slot: "TaskListSearchResultList",
            export: "./taskListSearchResults",
        },
        {
            componentName: "AddTaskList",
            slot: "AddTaskList",
            export: "./addTaskList"
        }
  ],
    navigationLinks: [
    {
        label: "Create To Do list",
        href: "/todo/add/list",
    },
    {
        label: "To Do's",
        href: "/todo"
    },
    ]
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
