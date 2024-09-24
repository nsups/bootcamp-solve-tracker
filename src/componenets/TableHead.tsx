import { useSelector } from "react-redux";
import seasons from "./../data"
import { RootState } from "../store";
const TableHead = ( ) => {
    
    const seasonId = useSelector((state: RootState) => state.season.seasonId);
    const contests = Object.entries(seasons[seasonId].contests);
    
    const { eligibility } = seasons[seasonId];

    let totalProblem = 0;
    let totalWeightedProblem = 0;
    contests.forEach(([ _, contest ]) => {
        totalProblem += contest.totalNumberOfProblems;
        totalWeightedProblem += contest.totalNumberOfProblems * contest.weight;
    });

    return ( <thead>
        <tr >
            <th className="px-5">Rank</th>
            <th className="px-5 min-w-[230px]">Participants</th>
            {eligibility.active&&(
                <th className="px-2">{eligibility.target}%
                </th>
            )}
            <th className="max-w-52 min-w-52 px-4">
                <div>Solved</div>
                <div className="w-full flex justify-around">
                    <span></span>
                    <span>{totalProblem}</span>
                    <span>{totalWeightedProblem}</span>
                </div>
            </th>
          

            { 
                contests.map(([ _, contest ]) => (
                <th className="w-32 max-w-32 min-w-32" key={contest.id}>
                    <div 
                        onClick={() => window.open(`https://vjudge.net/contest/${contest.id}`, '_blank')} 
                        className="truncate cursor-pointer hover:underline text-primary ">{contest.title}</div>
                    <div> {contest.totalNumberOfProblems } [ 1 : {contest.weight} ] </div>
                </th>
                    ))
            }            
            </tr>
        </thead>)
}
export default TableHead;