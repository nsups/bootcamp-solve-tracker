import seasons from "../data/index";
import { getDarkmodeColor, getDarkmodeColorMatte } from "../utils/colorGenerator";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Avater from "./Avater";
import { FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { ReactNode } from "react";
import { IoCheckbox } from "react-icons/io5";
import { ImCross } from "react-icons/im";
const TableBody = () => {

    const participants = useSelector((state: RootState) => state.season.participants);
    const seasonId = useSelector((state: RootState) => state.season.seasonId);
    const contests = Object.entries(seasons[seasonId].contests);
    const { eligibility } = seasons[seasonId];
    const { elimination } = seasons[seasonId];

    let totalProblem = 0;
    let totalWeightedProblem = 0;
    
    contests.forEach(([ _, contest ]) => {
        totalProblem += contest.totalNumberOfProblems;
        totalWeightedProblem += contest.totalNumberOfProblems * contest.weight;
    });
    
    const getPercentOfContest = (id:number, solveDetails: { solved: number; upsolved: number } | undefined) => {
        if(!solveDetails) return 0;
        const tot = seasons[seasonId].contests[Number(id)].totalNumberOfProblems;
        return Math.round((solveDetails.solved * 100) / tot);
    }

    const getPercentWeightedSolved = (totalWeightedSolves:number) => {
        return Math.round((totalWeightedSolves * 100) / totalWeightedProblem);
    }
    const getPercentSolved = (totalSolved:number) => {
        return Math.round((totalSolved * 100) / totalProblem);
    }
    
    const getSolveCountCell = (solveDetails: { solved: number; upsolved: number } | undefined, contestId: number):ReactNode => {
        const indx = contests.findIndex( ( [_, contest] ) => contest.id === contestId);
        if(indx === -1 || solveDetails === undefined){
            return <></>
        }
        
        if(solveDetails.solved === contests[indx][1].totalNumberOfProblems && solveDetails.upsolved === 0){
            return <span className="w-full text-center flex justify-center items-center"><FaCheckCircle /></span>
        }
        return (
        <div className="flex gap-2 w-full justify-center items-center">
            <span>{solveDetails.solved === contests[indx][1].totalNumberOfProblems? <FaCheck /> : <>{solveDetails.solved }</> }</span>
            {solveDetails.upsolved > 0 && (<span className="text-xs">{ solveDetails.upsolved  }</span>)}
        </div>)
    };

    return (  
    <tbody>
        {
            participants.map( (user, index) => (
                <tr key={user.handle} className="py-2 border-primary-content border hover:skeleton">
                    <td className="text-center px-5 ">{index + 1}</td>
                        <td className="px-2">
                            <div className="flex items-center gap-3">
                                <Avater handle={user.handle}/>
                                <div>
                                    <div
                                        onClick={() => window.open(`https://vjudge.net/user/${user.handle}`, '_blank')}  
                                        className={`font-bold cursor-pointer hover:underline ${ elimination.active&&elimination.target > getPercentWeightedSolved(user.totalWeightedSolves) ? "text-error" : "" }`}
                                        >{user.handle}</div>
                                    <div className="text-sm opacity-75">{user.name}</div>
                                </div>

                            </div>
                        </td>
                        {eligibility.active&&(
                            <th className="px-2 ">
                                <div className="flex items-center justify-center">{
                                    getPercentWeightedSolved(user.totalWeightedSolves) >= eligibility.target ? 
                                    <IoCheckbox className="text-success text-2xl"/> : <ImCross className="text-error text-xl"/>
                                }</div>
                            </th>
                        )}
                        <td className="text-center text-primary-content font-bold px-4" style={{ backgroundColor: getDarkmodeColor(getPercentWeightedSolved(user.totalWeightedSolves)) }} >
                            <div className="w-full flex justify-around">
                                <span>{user.totalSolved}</span>
                                <span>{getPercentSolved(user.totalSolved)}% </span>
                                <span>{getPercentWeightedSolved(user.totalWeightedSolves)}% </span>
                            </div>
                        </td>
                         
                        {contests.map(([ _, { id } ]) => (
                            <td key={`${id}-${user.handle}`} className="border-primary-content border text-center text-primary-content font-bold" style={{ backgroundColor: getDarkmodeColorMatte(getPercentOfContest(id, user.contests[id])) }} >
                                { (getSolveCountCell(user.contests[id], id))}
                            </td>
                        ))}
                </tr>
            ))
        }
    </tbody>)
}

export default TableBody;