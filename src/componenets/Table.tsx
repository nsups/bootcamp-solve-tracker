import TableHead from "./TableHead";
import TableBody from "./TableBody";
const Table = () => {
    return (
    <div className="w-full h-screen pt-16">
        <div className="h-full overflow-scroll">
            <table className="">
                <TableHead/>
                <TableBody/>
            </table>
        </div>
    </div>
      
    )
}

export default Table; 