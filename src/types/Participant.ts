interface ContestParticipant {
    handle: string,
    userid: number,
    name: string,
    dp: string,
    contests: { [contestId: number] : Set<number> },
    totalSolved:number,
    totalWeightedSolves:number,
    totalWeightedAvailable: number,
}
export default ContestParticipant;