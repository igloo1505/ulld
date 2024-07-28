import { client } from "@ulld/api/client";
import React, { useState, useEffect } from "react";

const gatherOptions = async (_type: "tag" | "topic" | "subject") => {
    let opts = await client.search.getUniqueTagTopicAndSubjects.query(_type);
    return Array.isArray(opts) ? opts : opts[`${_type}s`];
};

export const useExistingTags = () => {
    const [options, setOptions] = useState<string[]>([]);
    const getItems = async () => {
        let opts = await gatherOptions("tag");
        setOptions(opts);
    };
    useEffect(() => {
        getItems();
    }, []);
    return options;
};

export const useExistingSubjects = () => {
    const [options, setOptions] = useState<string[]>([]);
    const getItems = async () => {
        let opts = await gatherOptions("subject");
        setOptions(opts);
    };
    useEffect(() => {
        getItems();
    }, []);
    return options;
};

export const useExistingTopics = () => {
    const [options, setOptions] = useState<string[]>([]);
    const getItems = async () => {
        let opts = await gatherOptions("topic");
        setOptions(opts);
    };
    useEffect(() => {
        getItems();
    }, []);
    return options;
};

export const useExistingTaggables = () => {
    let existingTags = useExistingTags();
    let existingSubjects = useExistingSubjects();
    let existingTopics = useExistingTopics();

    return {
        existingTags,
        existingSubjects,
        existingTopics,
    };
};
