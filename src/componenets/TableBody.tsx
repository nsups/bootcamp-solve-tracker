import ContestParticipant from "../types/Participant";
import seasons from "../data/index";
import { getColor, getColorMatte } from "../utils/colorGenerator";
const TableBody = ({ data }: { data: { table:ContestParticipant[], seasonId: string } }) => {
    let { table, seasonId } = data;
    const contests = Object.entries(seasons[seasonId].contests);

    let totalProblem = 0;
    let totalWeightedProblem = 0;
    
    contests.forEach(([ _, contest ]) => {
        totalProblem += contest.totalNumberOfProblems;
        totalWeightedProblem += contest.totalNumberOfProblems * contest.weight;
    });
    
    const getPercentOfContest = (id:number, totalSolves: number) => {
        const tot = seasons[seasonId].contests[Number(id)].totalNumberOfProblems;
        return Math.round((totalSolves * 100) / tot);
    }

    const getPercentWeightedSolved = (totalWeightedSolves:number) => {
        return Math.round((totalWeightedSolves * 100) / totalWeightedProblem);
    }


    return (  
    <tbody>
        {
            table.map( (user, index) => (
                <tr key={user.handle} className="py-2">
                    <td className="text-center px-5 ">{index + 1}</td>
                        <td className="px-2">
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-8 w-8">
                                        <img
                                        src={user.dp}
                                        alt="dp" />
                                    </div>
                                </div>
                                <div>
                                    <div
                                        onClick={() => window.open(`https://vjudge.net/user/${user.handle}`, '_blank')}  
                                        className="font-bold cursor-pointer hover:underline"
                                        >{user.handle}</div>
                                    <div className="text-sm opacity-75">{user.name}</div>
                                </div>

                            </div>
                        </td>
                   
                        <td className="text-center"
                        style={{
                            backgroundColor: getColor(getPercentWeightedSolved(user.totalWeightedSolves))
                        }}
                         >
                            {user.totalSolved} [ {getPercentWeightedSolved(user.totalWeightedSolves)}% ]
                            </td>
                        
                        {contests.map(([ _, { id } ]) => (
                            <td key={`${id}-${user.userid}`} className="text-center"
                            style={{
                                backgroundColor: getColorMatte(getPercentOfContest(id, user.contests[id] ? user.contests[id].size : 0))
                            }}
                            >
                                { user.contests[id] ? user.contests[id].size : '' }
                            </td>
                        ))}
                </tr>
            ))
        }
    </tbody>)
}

export default TableBody;