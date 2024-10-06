import seasons from "../data"
import { ContestParticipantResponse } from "../types/Participant";
import  { ParticipantTabularData } from "../types/Participant";
import { parseSubmissions } from "./parsers";

const userInfoMap = new Map<string, ContestParticipantResponse>();
const idToHandleMap = new Map<number, string>();
const handles = new Map<string, string>();

const generateUserTable =  async (contestId: number) => {
    const response = await fetch(`https://vjudge.net/contest/rank/single/${contestId}`);
    if(!response.ok){
        return;
    }
    const json_response = await response.json();
    const participants_info = json_response['participants'];
    for (let i in participants_info) {
        const userId = Number(i);
        const [ handleLC, _, dp ]  = participants_info[i] as string[];
        const handle = handles.get(handleLC.toLocaleLowerCase());
        if(!handle){
            continue;
        }
        const user = userInfoMap.get(handle);
        if(!user){
            continue;
        }
        idToHandleMap.set(userId, handle);
        if(user.userid == 0 || user.dp == ""){
            user.userid = userId;
            user.dp = dp;
            // user.name = name;
        }
        if(!user.contests[contestId]){
            user.contests[contestId] = { solved: new Set<number>(), upsolved: new Set<number>() };
        }
        userInfoMap.set(handle, user);
    }

    const submissions = parseSubmissions(json_response);
    
    Object.entries(submissions).forEach(([ userId, userSubmissions ]) => {
        const handle = idToHandleMap.get(Number(userId)) as string;
        if(handle) {
            const user = userInfoMap.get(handle) as ContestParticipantResponse;
            userSubmissions.forEach(( { problemNo, verdict, isUpsolve}) => {
                if(verdict === 1 && !isUpsolve){
                    user.contests[contestId].solved.add(problemNo);
                }
            });
            userSubmissions.forEach(( { problemNo, verdict, isUpsolve }) => {
                if(verdict === 1 && isUpsolve && !user.contests[contestId].solved.has(problemNo)){
                    user.contests[contestId].upsolved.add(problemNo);
                }
            });

            user.contests[contestId].solved = new Set([ ... user.contests[contestId].solved,  ...user.contests[contestId].upsolved]);

        }
    })

}

export const getTabularData = async(seasonId: string) => {
    userInfoMap.clear();
    idToHandleMap.clear();
    const season = seasons[seasonId]
    Object.entries(season.participants).forEach(( [ handle, name ]) => {
        handles.set(handle.toLocaleLowerCase(), handle);
        const user: ContestParticipantResponse = {
            handle: handle,
            userid: 0,
            name: name,
            dp: "",
            contests: {},
            totalSolved: 0,
            totalWeightedSolves: 0,
            totalWeightedAvailable: 0,
            contestTimeSolved: 0, 
            upsolved: 0,
        }
        userInfoMap.set(handle, user);
    });
    await Promise.all(Object.entries(season.contests).map(async( [id, _ ])=>  {
        try {
            return generateUserTable(Number(id));
        } catch (error) {
            
        }
    }));
    userInfoMap.forEach(user => {
        Object.entries(user.contests).forEach(([ contestID, details ]) => {
            user.totalSolved += details.solved.size;
            user.totalWeightedSolves += season.contests[Number(contestID)].weight * details.solved.size;
            user.totalWeightedAvailable += season.contests[Number(contestID)].weight * season.contests[Number(contestID)].totalNumberOfProblems;

        });
    });

    const tabularData: ParticipantTabularData[] = [];
    userInfoMap.forEach(user => {
        
        const { handle, name, dp, contests, totalSolved, totalWeightedSolves, totalWeightedAvailable, contestTimeSolved, upsolved } = user;
        const solvesObj: {[id:number]: { solved: number; upsolved: number }} = {};
        Object.entries(contests).forEach(([ contestId, details ]) => {
            solvesObj[Number(contestId)] = { solved: details.solved.size, upsolved: details.upsolved.size };
        })
        tabularData.push({handle, name, dp, contests: solvesObj, totalSolved, totalWeightedSolves, totalWeightedAvailable, contestTimeSolved, upsolved});
    });
    tabularData.sort((a, b) => b.totalWeightedSolves - a.totalWeightedSolves);
    return tabularData.filter(t => !Number.isNaN(t.totalSolved) && seasons[seasonId].participants[t.handle]) 
}
