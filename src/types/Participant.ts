interface Participant{
    handle: string,
    name: string,
    dp: string,
    totalSolved:number,
    totalWeightedSolves:number,
    totalWeightedAvailable: number,
}

export interface ContestParticipantResponse extends Participant{
    userid: number,
    contests: { [contestId: number] : Set<number>},
}

export interface ParticipantTabularData extends Participant{
    contests: { [contestId: number] : number},
}
