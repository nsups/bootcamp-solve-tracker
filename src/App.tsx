import seasons from "./data";
import { getTabularData } from "./utils/tabularData";
import Table from "./componenets/Table";
import React, { useEffect, useState } from "react";
import "./styles/style.css"
import NavBar from "./componenets/Navbar";
const App = () => {
    
  const [ seasonId, setSeasonId ] = useState("s19");
  
  if(!seasonId || !seasons[seasonId]){
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
            const table = await getTabularData(seasonId);
            setTableNode(<Table data = {{ table, seasonId }} />);
            setLoading(false);
        })();
    }, [seasonId])

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
                <NavBar seasonId = {seasonId} />
               {tableNode}
            </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="seasonchangeId" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {
                    Object.entries(seasons).map(([season, _]) =>(
                        <li onClick={() => setSeasonId(season)} key={season} > <a>NSUPS Bootcamp {season}</a></li>
                    ))
                }
              </ul>
            </div>
        </div>
    )

};

export default App;