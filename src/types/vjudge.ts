export type Submissions = {
    [userId: number]: [
        {
            problemNo: number;
            verdict: number;
            submissionTime: number;
            isUpsolve: boolean;
        }
    ];
};
