interface EquationItemData {
    id: number;
    title: string;
    desc?: string | null;
    content: string;
    asPython?: string | null;
    relatedValues: {
        id: number
        input: any;
        output: number;
    }[];
    variableLegend: any;
    variables: string[];
    keywords: string[];
    tags: string[];
}

export interface JsonSerializedBackupData {
    data: EquationItemData[];
}
