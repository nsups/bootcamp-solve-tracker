import seasons from "./../data"
const TableHead = ( { seasonId } : { seasonId: string } ) => {
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
            <th>Rank</th>
            <th className="px-5 min-w-[230px]">Participants</th>
            <th className="max-w-[150px] min-w-[150px]">
                <div>Solved</div>
                <div>{totalProblem} [ {eligibility.target}% ] </div>
            </th>

            { 
                contests.map(([ _, contest ]) => (
                <th className="w-[110px] max-w-[110px] min-w-[110px]" key={contest.id}>
                    <div 
                        onClick={() => window.open(`https://vjudge.net/contest/${contest.id}`, '_blank')} 
                        className="truncate cursor-pointer hover:underline">{contest.title}</div>
                    <div> {contest.totalNumberOfProblems } [ {contest.weight * 100}% ] </div>
                </th>
                    ))
            }            
            </tr>
        </thead>)
}
// `https://vjudge.net/contest/${i}`
export default TableHead;