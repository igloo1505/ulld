export declare const serverClient: {
    autoSettings: {
        setAutoSettingsFromConfig: (input: void | undefined) => Promise<void>;
        getAutoSettings: (input: {
            type?: "tag" | "topic" | "subject" | undefined;
            withRegex?: boolean | undefined;
        }) => Promise<import("./types").AutoSettingWithRegex[] | {
            id?: number;
            glob: string;
            value: string;
            type: import(".prisma/client").autoSetting;
        }[] | undefined>;
        deleteAutoSettingById: (input: number) => Promise<{
            id: number;
            type: import(".prisma/client").$Enums.autoSetting;
            glob: string;
            value: string;
        }>;
        addAutoSetting: (input: {
            type: "tag" | "topic" | "subject";
            value: string;
            glob: string;
            id?: number | undefined;
        }) => Promise<{
            id: number;
            type: import(".prisma/client").$Enums.autoSetting;
            glob: string;
            value: string;
        }>;
    };
    sync: {
        syncDir: (input: void | {
            offline?: boolean | undefined;
            removeIfNotInFs?: boolean | null | undefined;
            cleanBeforeSync?: boolean | undefined;
        } | undefined) => Promise<void>;
        backupNonFileSystemDB: (input: void | undefined) => Promise<void>;
    };
    toDo: {
        getToDoLists: (input: number | void | undefined) => Promise<{
            id: number;
            label: string;
            active: boolean;
        } | {
            id: number;
            label: string;
            active: boolean;
        }[]>;
        getToDoListById: (input: number) => Promise<({
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            topics: {
                value: string;
                kanbanId: number | null;
            }[];
            subjects: {
                value: string;
                kanbanId: number | null;
            }[];
        } & {
            id: number;
            label: string;
            createdAt: Date;
            lastUpdate: Date;
        }) | null>;
        getToDos: (input: {
            listIds?: string | number | string[] | number[] | undefined;
            showCompleted?: string | boolean | undefined;
        }) => Promise<{
            todos: {
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                id: number;
                label: string;
                topic: {
                    value: string;
                }[];
                subject: {
                    value: string;
                }[];
                tasks: {
                    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
                    id: number;
                    bookmarked: boolean;
                    task: string;
                    priority: number;
                    createdAt?: any;
                    dueAt?: any;
                    details?: string | null | undefined;
                    parentId?: number | null | undefined;
                    category?: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper" | null | undefined;
                    toDoListId?: number | null | undefined;
                }[];
                _count: {
                    tags: number;
                    topic: number;
                    subject: number;
                    tasks: number;
                };
                createdAt?: any;
                lastUpdate?: any;
            }[];
            lists: {
                id: number;
                label: string;
                active: boolean;
            }[];
        }>;
        setToDoStatus: (input: {
            status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
            taskIds: number[];
        }) => Promise<import(".prisma/client").Prisma.BatchPayload>;
        findListsByTaggables: (input: {
            topics?: string[] | undefined;
            subjects?: string[] | undefined;
            tags?: string[] | undefined;
        }) => Promise<{
            id: number;
            label: string;
            createdAt: Date;
            tasks: {
                category: import(".prisma/client").$Enums.TaskCategory | null;
                createdAt: Date;
                dueAt: Date | null;
                details: string | null;
            }[];
            _count: {
                tasks: number;
            };
        }[]>;
        getOverdueTasksByListId: (input: number) => Promise<{
            tasks: {
                id: number;
                createdAt: Date;
                task: string;
                dueAt: Date | null;
                details: string | null;
                parentId: number | null;
                category: import(".prisma/client").$Enums.TaskCategory | null;
                bookmarked: boolean;
                status: import(".prisma/client").$Enums.ToDoListStatus;
                priority: number;
                toDoListId: number | null;
            }[];
            _count: {
                tasks: number;
            };
        } | null>;
        setToDoDueDate: (input: {
            dueAt: ((string | Date) & (string | Date | undefined)) | null;
            taskIds: number[];
        }) => Promise<import(".prisma/client").Prisma.BatchPayload>;
        setToDoList: (input: {
            taskId: number;
            listId: number;
        }) => Promise<import(".prisma/client").Prisma.BatchPayload>;
        deleteTaskByIds: (input: string | number | void | string[] | number[] | undefined) => Promise<import(".prisma/client").Prisma.BatchPayload>;
        toggleToDoBookmark: (input: {
            taskId: number;
            shouldBookmark?: boolean | undefined;
        }) => Promise<import(".prisma/client").Prisma.BatchPayload>;
        setToDoPriority: (input: {
            priority: number;
            taskIds: number[];
        }) => Promise<import(".prisma/client").Prisma.BatchPayload>;
        getToDoDetails: (input: {
            toDoId: number;
        }) => Promise<({
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            topics: {
                value: string;
                kanbanId: number | null;
            }[];
        } & {
            id: number;
            createdAt: Date;
            task: string;
            dueAt: Date | null;
            details: string | null;
            parentId: number | null;
            category: import(".prisma/client").$Enums.TaskCategory | null;
            bookmarked: boolean;
            status: import(".prisma/client").$Enums.ToDoListStatus;
            priority: number;
            toDoListId: number | null;
        }) | null>;
        createNewTodoList: (input: {
            tags: string[];
            label: string;
            topics: string[];
            subjects: string[];
        }) => Promise<{
            id: number;
            label: string;
            createdAt: Date;
            lastUpdate: Date;
        }>;
        createNewToDo: (input: {
            task: string;
            listId: number;
            priority?: number | undefined;
            status?: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future" | undefined;
            dueAt?: string | Date | null | undefined;
            details?: string | undefined;
        }) => Promise<{
            id: number;
            label: string;
            createdAt: Date;
            lastUpdate: Date;
        }>;
        deleteToDos: (input: number[]) => Promise<import(".prisma/client").Prisma.BatchPayload>;
        editTaskNote: (input: {
            note: string | null;
            taskId: number;
        }) => Promise<{
            id: number;
            createdAt: Date;
            task: string;
            dueAt: Date | null;
            details: string | null;
            parentId: number | null;
            category: import(".prisma/client").$Enums.TaskCategory | null;
            bookmarked: boolean;
            status: import(".prisma/client").$Enums.ToDoListStatus;
            priority: number;
            toDoListId: number | null;
        }>;
        getMostRecentToDoListId: (input: void | undefined) => Promise<{
            id: number;
        }[]>;
        archiveTasks: (input: number[]) => Promise<import(".prisma/client").Prisma.BatchPayload>;
    };
    equations: {
        getEquationById: (input: {
            id?: number | undefined;
            equationId?: string | undefined;
        }) => Promise<{
            tags: {
                value: string;
            }[];
            id: number;
            keywords: string[];
            title: string;
            desc: string | null;
            relatedValues: {
                input: import(".prisma/client").Prisma.JsonValue;
                output: number;
            }[];
            content: string;
            equationId: string | null;
            asPython: string | null;
            variables: string[];
        } | null>;
        getParsedEquationById: (input: {
            id: number;
            title: {
                options: {
                    em?: number | undefined;
                    ex?: number | undefined;
                    width?: number | undefined;
                    inline?: boolean | undefined;
                    styles?: boolean | undefined;
                    container?: boolean | undefined;
                    fontCache?: boolean | undefined;
                    assistiveMml?: boolean | undefined;
                    autoWrap?: boolean | undefined;
                    matchFontHeight?: boolean | undefined;
                };
                appendStylesToId?: string | undefined;
                appendStylesToClass?: string | undefined;
            };
            desc: {
                options: {
                    em?: number | undefined;
                    ex?: number | undefined;
                    width?: number | undefined;
                    inline?: boolean | undefined;
                    styles?: boolean | undefined;
                    container?: boolean | undefined;
                    fontCache?: boolean | undefined;
                    assistiveMml?: boolean | undefined;
                    autoWrap?: boolean | undefined;
                    matchFontHeight?: boolean | undefined;
                };
                appendStylesToId?: string | undefined;
                appendStylesToClass?: string | undefined;
            };
            content: {
                options: {
                    em?: number | undefined;
                    ex?: number | undefined;
                    width?: number | undefined;
                    inline?: boolean | undefined;
                    styles?: boolean | undefined;
                    container?: boolean | undefined;
                    fontCache?: boolean | undefined;
                    assistiveMml?: boolean | undefined;
                    autoWrap?: boolean | undefined;
                    matchFontHeight?: boolean | undefined;
                };
                appendStylesToId?: string | undefined;
                appendStylesToClass?: string | undefined;
            };
            equationId?: string | undefined;
        }) => Promise<{
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            id: number;
            topics: {
                value: string;
            }[];
            subjects: {
                value: string;
            }[];
            variables: string[];
            equationId?: string | null | undefined;
            title?: string | null | undefined;
            desc?: string | null | undefined;
            content?: string | null | undefined;
            asPython?: string | null | undefined;
            createdAt?: string | Date | null | undefined;
        }>;
        getEquationEmbedProps: (input: {
            equationId: string;
        }) => Promise<{
            rawLatex: string;
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            id: number;
            topics: {
                value: string;
            }[];
            subjects: {
                value: string;
            }[];
            variables: string[];
            equationId?: string | null | undefined;
            title?: string | null | undefined;
            desc?: string | null | undefined;
            content?: string | null | undefined;
            asPython?: string | null | undefined;
            createdAt?: string | Date | null | undefined;
        }>;
        deleteEquationById: (input: number) => Promise<{
            id: number;
            equationId: string | null;
            title: string;
            desc: string | null;
            content: string;
            asPython: string | null;
            variableLegend: import(".prisma/client").Prisma.JsonValue | null;
            variables: string[];
            keywords: string[];
            createdAt: Date;
        }>;
        getEquationsList: (input: {
            orderBy: "title" | "createdAt";
            value?: string | undefined;
            tags?: string | string[] | undefined;
            page?: number | undefined;
            query?: string | undefined;
            take?: number | undefined;
            variables?: string | string[] | undefined;
            sortDir?: "desc" | "asc" | undefined;
        }) => Promise<{
            equations: {
                id: number;
                equationId: string | null;
                title: string;
                desc: string | null;
                content: string;
                asPython: string | null;
                variableLegend: import(".prisma/client").Prisma.JsonValue | null;
                variables: string[];
                keywords: string[];
                createdAt: Date;
            }[];
            tags: string[];
            variables: string[];
        }>;
        addEquation: (input: {
            keywords: string[];
            title: string;
            content: string;
            variables: string[];
            tagInput: string;
            variableInput: string;
            keywordInput: string;
            id?: number | undefined;
            desc?: string | undefined;
            equationId?: string | undefined;
            asPython?: string | undefined;
            tags?: string[] | undefined;
            relatedValues?: {
                input: Record<string, number>;
                output: number;
            }[] | undefined;
        }) => Promise<{
            id: number;
            equationId: string | null;
            title: string;
            desc: string | null;
            content: string;
            asPython: string | null;
            variableLegend: import(".prisma/client").Prisma.JsonValue | null;
            variables: string[];
            keywords: string[];
            createdAt: Date;
        }>;
        mathStringArrayToLatex: (input: {
            options: {
                inline?: boolean | undefined;
            };
            content: string[];
        }) => Promise<{
            content: string;
        }[]>;
        getIdFromEquationId: (input: string) => Promise<{
            id: number;
        } | null>;
    };
    commandPalette: {
        noteSearch: (input: void | undefined) => Promise<{
            id: number;
            href: string;
            title: string;
            isProtected: boolean | null;
            latexTitle: string | null;
        }[]>;
        tagSearch: (input: void | undefined) => Promise<{
            value: string;
            kanbanId: number | null;
        }[]>;
        subjectSearch: (input: void | undefined) => Promise<{
            value: string;
            kanbanId: number | null;
        }[]>;
        equationSearch: (input: void | undefined) => Promise<{
            id: number;
            title: string;
            content: string;
        }[]>;
        getDefinitions: (input: void | {
            rsc?: boolean | undefined;
        } | undefined) => Promise<{
            id: string;
            label?: string | null | undefined;
            content?: string | null | undefined;
            alphabeticalLabel?: string | null | undefined;
            mdxNote?: import("../classes/prismaMdxRelations/MdxNote").MdxNote | undefined;
            mdxNoteId?: number | null | undefined;
        }[]>;
        getCommandPaletteData: (input: void | undefined) => Promise<{
            notes: {
                href: string;
                title: string;
                isProtected: boolean | null;
                latexTitle: string | null;
            }[];
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
        }>;
    };
    search: {
        getNoteHrefFromDefinitionId: (input: string) => Promise<string | undefined>;
        getSequentialIdListByKey: (input: string) => Promise<{
            href: string;
            title: string;
            sequentialIndex: number | null;
        }[]>;
        getDefinitionList: (input: void | undefined) => Promise<{
            id: string;
            mdxNoteId: number | null;
            label?: {
                parsed: string;
                original: string;
            } | undefined;
            content?: {
                parsed: string;
                original: string;
            } | undefined;
        }[]>;
        rootRelativePathIsBookmarked: (input: string) => Promise<boolean>;
        getUniqueTags: (input: void | undefined) => Promise<string[]>;
        getUniqueTagTopicAndSubjects: (input: void | "tag" | "topic" | "subject" | null | undefined) => Promise<string[] | {
            tags: string[];
            topics: string[];
            subjects: string[];
        }>;
        getBookmarked: (input: void | undefined) => Promise<{
            mdxNotes: {
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                id: number;
                href: string;
                title: string;
                citations: {
                    id: string;
                    htmlCitation: string | null;
                }[];
                noteType: string;
                latexTitle: string | null;
                rootRelativePath: string;
                summary: string | null;
                sequentialIndex: number | null;
                firstSync: Date;
                lastSync: Date;
                topics: {
                    value: string;
                    kanbanId: number | null;
                }[];
                definitions: {
                    id: string;
                    label: string | null;
                    content: string | null;
                    alphabeticalLabel: string | null;
                    mdxNoteId: number | null;
                }[];
                subjects: {
                    value: string;
                    kanbanId: number | null;
                }[];
            }[];
        }>;
        findUnknownDBNoteTypeFromRootRelativePath: (input: string) => Promise<{
            markdown: {
                id: number;
                rootRelativePath: string;
            } | null;
            notebook: {
                id: number;
                rootRelativePath: string;
            } | null;
        }>;
    };
    boards: {
        getAllBoards: (input: void | undefined) => Promise<{
            title: string;
            lists: {
                _count: {
                    cards: number;
                    Kanban: number;
                };
            }[];
            _count: {
                lists: number;
                tags: number;
                subjects: number;
                topics: number;
            };
        }[]>;
        createNewBoard: (input: {
            tags: string[];
            title: string;
            topics: string[];
            subjects: string[];
        }) => Promise<{
            id: number;
            title: string;
            createdAt: Date;
            lastUpdate: Date;
        }>;
        getBoardById: (input: number) => Promise<({
            lists: ({
                cards: {
                    id: number;
                    listId: number | null;
                    indexWithinList: number;
                    label: string | null;
                    details: string | null;
                }[];
            } & {
                id: number;
                indexWithinBoard: number;
                title: string | null;
                boardId: number | null;
            })[];
        } & {
            id: number;
            title: string;
            createdAt: Date;
            lastUpdate: Date;
        }) | null>;
        appendNewListToBoard: (input: {
            list: {
                title: string;
            };
            boardId: number;
        }) => Promise<({
            lists: ({
                cards: {
                    id: number;
                    listId: number | null;
                    indexWithinList: number;
                    label: string | null;
                    details: string | null;
                }[];
            } & {
                id: number;
                indexWithinBoard: number;
                title: string | null;
                boardId: number | null;
            })[];
        } & {
            id: number;
            title: string;
            createdAt: Date;
            lastUpdate: Date;
        }) | undefined>;
    };
    parse: {
        serializeMdxString: (input: {
            content: string;
            display?: "display" | "inline" | undefined;
        }) => Promise<string>;
        latexStringToPdf: (input: {
            body?: string | undefined;
            fromPath?: string | undefined;
            outputPath?: string | undefined;
            saveFilePath?: string | undefined;
        }) => Promise<import("fs").WriteStream | undefined>;
    };
    settings: {
        getSettings: (input: void | undefined) => Promise<{
            id: number;
            tooltips: boolean;
            title: string;
            summary_showCitations: boolean;
            summary_showTags: boolean;
            landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
            lockedLandingImage: string | null;
            cleanOnSync: boolean;
            firstSync: Date;
            lastSync: Date;
        } | null>;
        toggleBooleanSetting: (input: "tooltips" | "cleanOnSync" | "summary_showTags" | "summary_showCitations") => Promise<{
            id: number;
            tooltips: boolean;
            title: string;
            summary_showCitations: boolean;
            summary_showTags: boolean;
            landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
            lockedLandingImage: string | null;
            cleanOnSync: boolean;
            firstSync: Date;
            lastSync: Date;
        } | undefined>;
        lockCurrentLandingImage: (input: string) => Promise<{
            lockedLandingImage: string | null;
        } | undefined>;
        updateSettings: (input: import(".prisma/client").Prisma.SettingsCreateInput) => Promise<{
            id: number;
            tooltips: boolean;
            title: string;
            summary_showCitations: boolean;
            summary_showTags: boolean;
            landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
            lockedLandingImage: string | null;
            cleanOnSync: boolean;
            firstSync: Date;
            lastSync: Date;
        } | undefined>;
    };
    mdx: {
        deleteNoteById: (input: number | number[]) => Promise<import(".prisma/client").Prisma.BatchPayload>;
        toggleBookmarkedById: (input: number) => Promise<boolean>;
        getRemoteMdx: (input: string) => Promise<({
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            equations: {
                id: number;
                equationId: string | null;
                title: string;
                desc: string | null;
                content: string;
                asPython: string | null;
                variableLegend: import(".prisma/client").Prisma.JsonValue | null;
                variables: string[];
                keywords: string[];
                createdAt: Date;
            }[];
            citations: {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            }[];
            toDo: {
                id: number;
                createdAt: Date;
                task: string;
                dueAt: Date | null;
                details: string | null;
                parentId: number | null;
                category: import(".prisma/client").$Enums.TaskCategory | null;
                bookmarked: boolean;
                status: import(".prisma/client").$Enums.ToDoListStatus;
                priority: number;
                toDoListId: number | null;
            }[];
            ReadingList: {
                name: string;
                description: string | null;
                createdAt: Date;
                lastUpdate: Date;
            }[];
            topics: {
                value: string;
                kanbanId: number | null;
            }[];
            sequentialList: {
                sequentialKey: string;
            } | null;
            definitions: {
                id: string;
                label: string | null;
                content: string | null;
                alphabeticalLabel: string | null;
                mdxNoteId: number | null;
            }[];
            subjects: {
                value: string;
                kanbanId: number | null;
            }[];
            _count: {
                topics: number;
                subjects: number;
                tags: number;
                citations: number;
                sequentialList: number;
                ReadingList: number;
                equations: number;
                definitions: number;
                toDo: number;
            };
        } & {
            id: number;
            isProtected: boolean | null;
            dietSummaryKey: string | null;
            title: string;
            latexTitle: string | null;
            rootRelativePath: string;
            noteType: string;
            content: string;
            formatted: string | null;
            summary: string | null;
            citationsListOrder: string[];
            importantValues: number[];
            imageSrc: string | null;
            href: string;
            sequentialKey: string | null;
            sequentialIndex: number | null;
            floatImages: boolean;
            remoteUrl: string | null;
            trackRemote: boolean;
            outgoingQuickLinks: string[];
            quickLink: string | null;
            bookmarked: boolean;
            firstSync: Date;
            lastSync: Date;
        }) | null>;
        getRemoteMdxFromPathname: (input: string) => Promise<({
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            equations: {
                id: number;
                equationId: string | null;
                title: string;
                desc: string | null;
                content: string;
                asPython: string | null;
                variableLegend: import(".prisma/client").Prisma.JsonValue | null;
                variables: string[];
                keywords: string[];
                createdAt: Date;
            }[];
            citations: {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            }[];
            toDo: {
                id: number;
                createdAt: Date;
                task: string;
                dueAt: Date | null;
                details: string | null;
                parentId: number | null;
                category: import(".prisma/client").$Enums.TaskCategory | null;
                bookmarked: boolean;
                status: import(".prisma/client").$Enums.ToDoListStatus;
                priority: number;
                toDoListId: number | null;
            }[];
            ReadingList: {
                name: string;
                description: string | null;
                createdAt: Date;
                lastUpdate: Date;
            }[];
            topics: {
                value: string;
                kanbanId: number | null;
            }[];
            sequentialList: {
                sequentialKey: string;
            } | null;
            definitions: {
                id: string;
                label: string | null;
                content: string | null;
                alphabeticalLabel: string | null;
                mdxNoteId: number | null;
            }[];
            subjects: {
                value: string;
                kanbanId: number | null;
            }[];
            _count: {
                topics: number;
                subjects: number;
                tags: number;
                citations: number;
                sequentialList: number;
                ReadingList: number;
                equations: number;
                definitions: number;
                toDo: number;
            };
        } & {
            id: number;
            isProtected: boolean | null;
            dietSummaryKey: string | null;
            title: string;
            latexTitle: string | null;
            rootRelativePath: string;
            noteType: string;
            content: string;
            formatted: string | null;
            summary: string | null;
            citationsListOrder: string[];
            importantValues: number[];
            imageSrc: string | null;
            href: string;
            sequentialKey: string | null;
            sequentialIndex: number | null;
            floatImages: boolean;
            remoteUrl: string | null;
            trackRemote: boolean;
            outgoingQuickLinks: string[];
            quickLink: string | null;
            bookmarked: boolean;
            firstSync: Date;
            lastSync: Date;
        }) | null>;
        getFsMdx: (input: {
            rootRelativePath: string;
            extension: ".mdx" | ".md";
            useProcessRoot?: boolean | undefined;
        }) => Promise<string>;
        parseMdxString: (input: {
            content: string;
            display?: "display" | "inline" | undefined;
        }) => Promise<string>;
    };
    snippets: {
        saveSnippet: (input: {
            content: string;
            description: string;
            language: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript";
            keywords?: string[] | {
                set: string[];
            } | undefined;
            id?: number | undefined;
        }) => Promise<boolean>;
        deleteSnippet: (input: number) => Promise<{
            id: number;
            content: string;
            description: string;
            keywords: string[];
            language: import(".prisma/client").$Enums.Technologies;
        }>;
        getSnippets: (input: {
            language?: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript" | undefined;
            query?: string | undefined;
        }) => Promise<{
            id: number;
            content: string;
            description: string;
            keywords: string[];
            language: import(".prisma/client").$Enums.Technologies;
        }[]>;
        getSpecificSnippet: (input: number) => Promise<{
            id: number;
            content: string;
            description: string;
            keywords: string[];
            language: import(".prisma/client").$Enums.Technologies;
        } | null>;
    };
    fsUtils: {
        getParsableFiletypesAtPath: (input: string) => Promise<{
            ".mdx": boolean;
            ".md": boolean;
            ".ipynb": boolean;
            ".csv": boolean;
            ".tsv": boolean;
            ".excel": boolean;
            ".numpy": boolean;
            ".html": boolean;
            ".pickle": boolean;
            ".db": boolean;
            ".sql": boolean;
            ".pdf": boolean;
            ".json": boolean;
            ".tex": boolean;
            ".hdf5": boolean;
        }>;
        getAllRootRelativePathsOfFiletype: (input: ".mdx" | ".md" | ".ipynb") => Promise<string[]>;
        clearTempDir: (input: void | undefined) => Promise<void>;
        getUtf8File: (input: {
            rootRelativePath: string;
            useProcessRoot?: boolean | undefined;
        }) => Promise<string>;
    };
    readingList: {
        addToReadingList: (input: {
            type: "BibEntry" | "MdxNote";
            itemId: string | number;
            readingListName?: string | undefined;
        }) => Promise<{
            name: string;
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
        }>;
        getReadingListContent: (input: string) => Promise<({
            bibEntries: ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                MdxNotes: {
                    id: number;
                    isProtected: boolean | null;
                    dietSummaryKey: string | null;
                    title: string;
                    latexTitle: string | null;
                    rootRelativePath: string;
                    noteType: string;
                    content: string;
                    formatted: string | null;
                    summary: string | null;
                    citationsListOrder: string[];
                    importantValues: number[];
                    imageSrc: string | null;
                    href: string;
                    sequentialKey: string | null;
                    sequentialIndex: number | null;
                    floatImages: boolean;
                    remoteUrl: string | null;
                    trackRemote: boolean;
                    outgoingQuickLinks: string[];
                    quickLink: string | null;
                    bookmarked: boolean;
                    firstSync: Date;
                    lastSync: Date;
                }[];
                citationGroups: {
                    name: string;
                    description: string | null;
                }[];
            } & {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            })[];
        } & {
            name: string;
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
        }) | null>;
    };
    universalNotes: {
        getSummaryOfAllNotes: (input: void | undefined) => Promise<{
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            title: string;
            summary: string | null;
            subjects: {
                value: string;
                kanbanId: number | null;
            }[];
            _count: {
                topics: number;
                subjects: number;
                tags: number;
                citations: number;
                sequentialList: number;
                ReadingList: number;
                equations: number;
                definitions: number;
                toDo: number;
            };
        }[]>;
        getNoteIdByHref: (input: string) => Promise<number | null>;
        getFsNoteOfUnknownFormat: (input: string) => Promise<{
            content: string;
            format: string;
        } | undefined>;
        getQuickLinkHref: (input: string) => Promise<{
            href: string;
        } | null>;
    };
    media: {
        getImagesInDir: (input: {
            path: string;
            recursive?: boolean | undefined;
        }) => Promise<string[]>;
        getRandomBackgroundSettings: (input: void | undefined) => Promise<{
            path?: string | undefined;
            createdAt?: Date | undefined;
            landingImageAlign?: import(".prisma/client").$Enums.ImageAlignment | undefined;
            lockedLandingImage?: string | null | undefined;
        }>;
        deleteRandomImage: (input: {
            path: string;
        }) => Promise<{
            path: string;
            createdAt: Date;
        }>;
        updateRandomImageBackground: (input: {
            path: string;
        }) => Promise<{
            path: string;
            createdAt: Date;
        }>;
    };
    qa: {
        saveQA: (input: {
            question: string;
            answer: string;
            tags?: string[] | undefined;
            id?: string | undefined;
            topics?: string[] | undefined;
            subjects?: string[] | undefined;
            description?: string | undefined;
        }) => Promise<{
            id: string;
            question: string;
            answer: string;
            description: string | null;
            secondaryLabel: string | null;
            correctCount: number;
            inCorrectCount: number;
        }>;
        getSpecificQA: (input: string) => Promise<({
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            topics: {
                value: string;
                kanbanId: number | null;
            }[];
            subjects: {
                value: string;
                kanbanId: number | null;
            }[];
        } & {
            id: string;
            question: string;
            answer: string;
            description: string | null;
            secondaryLabel: string | null;
            correctCount: number;
            inCorrectCount: number;
        }) | null>;
        addQAResult: (input: {
            success: boolean;
            id: string;
        }) => Promise<{
            id: string;
            question: string;
            answer: string;
            description: string | null;
            secondaryLabel: string | null;
            correctCount: number;
            inCorrectCount: number;
        } | undefined>;
        getQaAutocompleteOptions: (input: void | undefined) => Promise<string[]>;
        getQaExam: (input: {
            tags?: string[] | undefined;
            topics?: string[] | undefined;
            subjects?: string[] | undefined;
        }) => Promise<({
            id: string;
            question: string;
            answer: string;
            description: string | null;
            secondaryLabel: string | null;
            correctCount: number;
            inCorrectCount: number;
        } & {
            randomId: number;
        })[]>;
    };
    whiteboard: {
        save: (input: {
            data: string;
            id: string;
        }) => Promise<{
            id: string;
            data: Buffer;
        }>;
        getById: (input: {
            id: string;
        }) => Promise<{
            id: string;
            data: Buffer;
        } | null>;
        deleteById: (input: {
            id: string;
        }) => Promise<{
            id: string;
            data: Buffer;
        }>;
    };
    bibliography: {
        getPrismaBib: (input: void | undefined) => Promise<({
            entries: ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                MdxNotes: {
                    href: string;
                    title: string;
                }[];
                citationGroups: {
                    name: string;
                    description: string | null;
                }[];
            } & {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            })[];
        } & {
            id: number;
            filename: string;
            firstSync: Date;
            lastSync: Date;
        }) | null>;
        bibSync: (input: any) => Promise<void>;
        syncBibServerSide: (input: number | void | undefined) => Promise<{
            entries: {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            }[];
        } & {
            id: number;
            filename: string;
            firstSync: Date;
            lastSync: Date;
        }>;
        readBibFromFileSystem: (input: void | undefined) => Promise<string | undefined>;
        getBib: (input: number) => Promise<({
            entries: ({
                readingList: {
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    lastUpdate: Date;
                }[];
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                MdxNotes: ({
                    tags: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    topics: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    subjects: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                } & {
                    id: number;
                    isProtected: boolean | null;
                    dietSummaryKey: string | null;
                    title: string;
                    latexTitle: string | null;
                    rootRelativePath: string;
                    noteType: string;
                    content: string;
                    formatted: string | null;
                    summary: string | null;
                    citationsListOrder: string[];
                    importantValues: number[];
                    imageSrc: string | null;
                    href: string;
                    sequentialKey: string | null;
                    sequentialIndex: number | null;
                    floatImages: boolean;
                    remoteUrl: string | null;
                    trackRemote: boolean;
                    outgoingQuickLinks: string[];
                    quickLink: string | null;
                    bookmarked: boolean;
                    firstSync: Date;
                    lastSync: Date;
                })[];
                citationGroups: {
                    name: string;
                    description: string | null;
                }[];
            } & {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            })[];
        } & {
            id: number;
            filename: string;
            firstSync: Date;
            lastSync: Date;
        }) | null>;
        getBibCitation: (input: string[]) => Promise<{
            id: string;
            htmlCitation: string | null;
        }[]>;
        getBibEntry: (input: string) => Promise<({
            readingList: ({
                bibEntries: {
                    id: string;
                    title: string | null;
                    added: Date;
                }[];
            } & {
                name: string;
                description: string | null;
                createdAt: Date;
                lastUpdate: Date;
            })[];
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            MdxNotes: ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                citations: {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                }[];
                topics: {
                    value: string;
                    kanbanId: number | null;
                }[];
                subjects: {
                    value: string;
                    kanbanId: number | null;
                }[];
            } & {
                id: number;
                isProtected: boolean | null;
                dietSummaryKey: string | null;
                title: string;
                latexTitle: string | null;
                rootRelativePath: string;
                noteType: string;
                content: string;
                formatted: string | null;
                summary: string | null;
                citationsListOrder: string[];
                importantValues: number[];
                imageSrc: string | null;
                href: string;
                sequentialKey: string | null;
                sequentialIndex: number | null;
                floatImages: boolean;
                remoteUrl: string | null;
                trackRemote: boolean;
                outgoingQuickLinks: string[];
                quickLink: string | null;
                bookmarked: boolean;
                firstSync: Date;
                lastSync: Date;
            })[];
            citationGroups: ({
                entries: {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                }[];
            } & {
                name: string;
                description: string | null;
            })[];
        } & {
            id: string;
            BibId: number | null;
            OwnWork: boolean;
            ColleaguesWork: boolean;
            read: boolean;
            htmlCitation: string | null;
            PdfPath: string | null;
            address: string | null;
            annote: string | null;
            author: string | null;
            booktitle: string | null;
            chapter: string | null;
            crossref: string | null;
            doi: string | null;
            edition: string | null;
            editor: string | null;
            email: string | null;
            howpublished: string | null;
            institution: string | null;
            journal: string | null;
            month: string | null;
            note: string | null;
            number: string | null;
            organization: string | null;
            pages: string | null;
            publisher: string | null;
            school: string | null;
            series: string | null;
            title: string | null;
            volume: string | null;
            type: string | null;
            year: string | null;
            numpages: string | null;
            url: string | null;
            issue: string | null;
            issn: string | null;
            abstract: string | null;
            urldate: string | null;
            keywords: string | null;
            copyright: string | null;
            added: Date;
        }) | null>;
        addBibItemTag: (input: {
            tag: string;
            bibItemId: string;
        }) => Promise<{
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
        } & {
            id: string;
            BibId: number | null;
            OwnWork: boolean;
            ColleaguesWork: boolean;
            read: boolean;
            htmlCitation: string | null;
            PdfPath: string | null;
            address: string | null;
            annote: string | null;
            author: string | null;
            booktitle: string | null;
            chapter: string | null;
            crossref: string | null;
            doi: string | null;
            edition: string | null;
            editor: string | null;
            email: string | null;
            howpublished: string | null;
            institution: string | null;
            journal: string | null;
            month: string | null;
            note: string | null;
            number: string | null;
            organization: string | null;
            pages: string | null;
            publisher: string | null;
            school: string | null;
            series: string | null;
            title: string | null;
            volume: string | null;
            type: string | null;
            year: string | null;
            numpages: string | null;
            url: string | null;
            issue: string | null;
            issn: string | null;
            abstract: string | null;
            urldate: string | null;
            keywords: string | null;
            copyright: string | null;
            added: Date;
        }>;
        removeBibEntryTag: (input: {
            tag: string;
            bibEntryId: string;
        }) => Promise<{
            id: string;
            BibId: number | null;
            OwnWork: boolean;
            ColleaguesWork: boolean;
            read: boolean;
            htmlCitation: string | null;
            PdfPath: string | null;
            address: string | null;
            annote: string | null;
            author: string | null;
            booktitle: string | null;
            chapter: string | null;
            crossref: string | null;
            doi: string | null;
            edition: string | null;
            editor: string | null;
            email: string | null;
            howpublished: string | null;
            institution: string | null;
            journal: string | null;
            month: string | null;
            note: string | null;
            number: string | null;
            organization: string | null;
            pages: string | null;
            publisher: string | null;
            school: string | null;
            series: string | null;
            title: string | null;
            volume: string | null;
            type: string | null;
            year: string | null;
            numpages: string | null;
            url: string | null;
            issue: string | null;
            issn: string | null;
            abstract: string | null;
            urldate: string | null;
            keywords: string | null;
            copyright: string | null;
            added: Date;
        }>;
        bibEntryUpsert: (input: any) => Promise<{
            id: string;
            BibId: number | null;
            OwnWork: boolean;
            ColleaguesWork: boolean;
            read: boolean;
            htmlCitation: string | null;
            PdfPath: string | null;
            address: string | null;
            annote: string | null;
            author: string | null;
            booktitle: string | null;
            chapter: string | null;
            crossref: string | null;
            doi: string | null;
            edition: string | null;
            editor: string | null;
            email: string | null;
            howpublished: string | null;
            institution: string | null;
            journal: string | null;
            month: string | null;
            note: string | null;
            number: string | null;
            organization: string | null;
            pages: string | null;
            publisher: string | null;
            school: string | null;
            series: string | null;
            title: string | null;
            volume: string | null;
            type: string | null;
            year: string | null;
            numpages: string | null;
            url: string | null;
            issue: string | null;
            issn: string | null;
            abstract: string | null;
            urldate: string | null;
            keywords: string | null;
            copyright: string | null;
            added: Date;
        }>;
        bibFilename: (input: number | void | undefined) => Promise<string | {
            filename: string;
        } | undefined>;
        getCitationGroup: (input: string) => Promise<({
            entries: ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                MdxNotes: {
                    id: number;
                    title: string;
                    summary: string | null;
                }[];
            } & {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            })[];
        } & {
            name: string;
            description: string | null;
        }) | null>;
    };
    beta: {
        parseMdxString: (input: {
            content: string;
        }) => Promise<string>;
    };
} & {
    query: <TProcedure extends {}[TPath], TPath extends never>(path: TPath, ...args: import("@trpc/server").ProcedureArgs<import("@trpc/server").inferProcedureParams<TProcedure>>) => Promise<import("@trpc/server").inferProcedureOutput<TProcedure>>;
    mutation: <TProcedure extends {}[TPath], TPath extends never>(path: TPath, ...args: import("@trpc/server").ProcedureArgs<import("@trpc/server").inferProcedureParams<TProcedure>>) => Promise<import("@trpc/server").inferProcedureOutput<TProcedure>>;
    subscription: <TProcedure extends {}[TPath], TPath extends never>(path: TPath, ...args: import("@trpc/server").ProcedureArgs<import("@trpc/server").inferProcedureParams<TProcedure>>) => Promise<import("@trpc/server").inferProcedureOutput<TProcedure>>;
};
export type UlldServerClient = typeof serverClient;
//# sourceMappingURL=serverClient.d.ts.map