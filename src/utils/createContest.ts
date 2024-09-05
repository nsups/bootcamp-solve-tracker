import { Contest } from "../types/Season";
export const createContest = (id: number, title: string, totalNumberOfProblems: number, targetForSolve:number, weight:number  ):Contest => {
    return { id, title, totalNumberOfProblems, targetForSolve, weight };
}