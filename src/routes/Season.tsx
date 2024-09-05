import seasons from "../data";
import { getTabularData } from "../utils/tabularData";
import Table from "../componenets/Table";
import React, { useEffect, useState } from "react";
import "../styles/style.css"
const Season = ({ seasonId }: { seasonId:string }) => {
    const [ currentSeason, setCurrentSeason ] = useState(seasonId);
    if(!currentSeason || !seasons[currentSeason]){
        return (
            <div className='h-screen flex items-center justify-center'>
              <h1>Something went wrong</h1>
            </div>
          )
    }

    const [ loading, setLoading ] = useState(false);
    const [ tableNode, setTableNode ] = useState<React.ReactNode>();
    
    useEffect(() => {
        (async() => {
            setLoading(true);
            const table = await getTabularData(currentSeason);
            setTableNode(<Table data = { { table:table, seasonId:currentSeason }} />);
            setLoading(false);
        })();
    }, [currentSeason])

    if(loading){
        return (
          <div className='h-screen flex items-center justify-center'>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )
      }

    return (
        <div className="drawer">
            <input id="seasonchangeId" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            <div>
               {tableNode}
            </div>
              <label htmlFor="seasonchangeId" className="fixed left-0 top-0 bg-black  px-5 py-2 text-white cursor-pointer text-3xl opacity-[1] hover:opacity-[1]">=</label>
            </div>
            <div className="drawer-side">
              <label htmlFor="seasonchangeId" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {
                    Object.entries(seasons).map(([season, _]) =>(
                        <li onClick={() => setCurrentSeason(season)} key={season} > <a>NSUPS Bootcamp {season}</a></li>
                    ))
                }
              </ul>
            </div>
        </div>
    )

};

export default Season;