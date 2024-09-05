import { useParams } from "react-router-dom";
import seasons from "../data";
import { getTabularData } from "../utils/tabularData";
import Table from "../componenets/Table";
import { useEffect, useState } from "react";
import ContestParticipant from "../types/Participant";
import "../styles/style.css"
const Season = () => {
    const seasonId = "s18";
    if(!seasonId || !seasons[seasonId]){
        return <h1>ERROR</h1>
    }

    const [table, setTable] = useState <ContestParticipant[]> ([]);
    
    useEffect(() => {
        (async() => {
            const t = await getTabularData(seasonId);
            setTable(t);
        })();
    }, [])

    return (
        <div>
            <Table data = { { table, seasonId }} />
        </div>
    )
};

export default Season;