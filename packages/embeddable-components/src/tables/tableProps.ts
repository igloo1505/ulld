
interface TableChildren<T> {
    '$$typeof': any,
    type: T,
    key: null,
    ref: null,
    props: [Object],
    _owner: null,
    _store: {}
}

export interface TableProps {
    "children": [
        {
            "type": "thead",
            "key": null,
            "ref": null,
            "props": {
                "children": {
                    "type": "tr",
                    "key": null,
                    "ref": null,
                    "props": {
                        "children": {
                            "type": "th",
                            "key": null,
                            "ref": null,
                            "props": {
                                "align": "left" | "center" | "right",
                                "children": string
                            },
                            "_owner": null,
                            "_store": {}
                        }[]
                    },
                    "_owner": null,
                    "_store": {}
                }
            },
            "_owner": null,
            "_store": {}
        },
        {
            "type": "tbody",
            "key": null,
            "ref": null,
            "props": {
                "children": {
                    "type": "tr",
                    "key": null,
                    "ref": null,
                    "props": {
                        "children": {
                            "type": "td",
                            "key": null,
                            "ref": null,
                            "props": {
                                "align": "left" | "center" | "right",
                                "children": string
                            },
                            "_owner": null,
                            "_store": {}
                        }[]
                    },
                    "_owner": null,
                    "_store": {}
                }[]
            },
            "_owner": null,
            "_store": {}
        }
    ]
}
