
export interface Contest {
    id: number,
    title: string,
    totalNumberOfProblems: number,
    targetForSolve: number,
    weight: number
}

export interface Participant {
    [handle: string] : string
}

export interface Season {
    season: string, 
    participants: Participant,
    contests: Record<number, Contest>,
    eligibility: { active: boolean, target: number }
    elimination: { active: boolean, target: number }
}