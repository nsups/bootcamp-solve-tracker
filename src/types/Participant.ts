interface Participant{
    handle: string,
    name: string,
    dp: string,
    totalSolved:number,
    totalWeightedSolves:number,
    totalWeightedAvailable: number,

    contestTimeSolved: number;
    upsolved: number;

}

export interface ContestParticipantResponse extends Participant{
    userid: number,
    contests: { [contestId: number] : { solved: Set<number>, upsolved: Set<number> }},
}

export interface ParticipantTabularData extends Participant{
    contests: { [contestId: number] : { solved: number; upsolved: number }},
}
