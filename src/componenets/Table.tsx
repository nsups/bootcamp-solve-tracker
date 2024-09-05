import ContestParticipant from "../types/Participant";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
const Table = ({ data }: { data: { table:ContestParticipant[], seasonId: string } } ) => {
    return (
    <div className="w-full h-screen pt-16">
        <div className="h-full overflow-scroll">
            <table className="">
                <TableHead seasonId={data.seasonId} />
                <TableBody data={data} />
            </table>
        </div>
    </div>
      
    )
}

export default Table; 