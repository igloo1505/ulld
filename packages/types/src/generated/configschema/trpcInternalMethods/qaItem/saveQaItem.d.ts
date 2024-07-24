import type { qaInputSchemaTrpc } from "../../schemas/qaItem/main";
import { output } from 'zod';
export declare const saveQaItem: (v: output<typeof qaInputSchemaTrpc>) => Promise<{
    id: string;
    question: string;
    answer: string;
    description: string | null;
    secondaryLabel: string | null;
    correctCount: number;
    inCorrectCount: number;
}>;
//# sourceMappingURL=saveQaItem.d.ts.map