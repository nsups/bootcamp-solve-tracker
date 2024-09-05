import seasons from "../data"
import ContestParticipant from "../types/Participant";

const userInfoMap = new Map<string, ContestParticipant>();
const idToHandleMap = new Map<number, string>();
const handles = new Map<string, string>();

const generateUserTable =  async (contestId: number) => {
    const response = await fetch(`https://vjudge.net/contest/rank/single/${contestId}`);
    const json_response = await response.json();
    const submissions_info = json_response['submissions'];
    const participants_info = json_response['participants'];
    for (let i in participants_info) {
        const userId = Number(i);
        const [ handleLC, name, dp ]  = participants_info[i] as string[];
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
            user.name = name;
        }
        if(!user.contests[contestId]){
            user.contests[contestId] = new Set<number>();
        }
        userInfoMap.set(handle, user);
    }

    for(let i in submissions_info){
        const [ userId, problemId, verdict ] = submissions_info[i];
        const handle = idToHandleMap.get(userId) as string;
        if(handle && verdict === 1){
            const user = userInfoMap.get(handle) as ContestParticipant;
            user.contests[contestId].add(problemId);
            userInfoMap.set(handle, user);
        }
    }
}

export const getTabularData = async(seasonId: string) => {
    userInfoMap.clear();
    idToHandleMap.clear();
    const season = seasons[seasonId]
    Object.entries(season.participants).forEach(( [ handle, name ]) => {
        handles.set(handle.toLocaleLowerCase(), handle);
        const user: ContestParticipant = {
            handle: handle,
            userid: 0,
            name: name,
            dp: "",
            contests: {},
            totalSolved: 0,
            totalWeightedSolves: 0,
            totalWeightedAvailable: 0,
        }
        userInfoMap.set(handle, user);
    });
    await Promise.all(Object.entries(season.contests).map(async( [id, _ ])=>  await generateUserTable(Number(id)) ));
    userInfoMap.forEach(user => {
        Object.entries(user.contests).forEach(([ contestID, solved ]) => {
            user.totalSolved += solved.size;
            user.totalWeightedSolves += season.contests[Number(contestID)].weight * solved.size;
            user.totalWeightedAvailable += season.contests[Number(contestID)].weight * season.contests[Number(contestID)].totalNumberOfProblems;

        });
    });
    
    const table:ContestParticipant[] = [];
    userInfoMap.forEach(user => table.push(user));
    table.sort((a, b) => b.totalWeightedSolves - a.totalWeightedSolves);
    return table.filter(t => !Number.isNaN(t.totalSolved) && seasons[seasonId].participants[t.handle]) 
}
