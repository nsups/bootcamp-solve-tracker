import seasons from "./data";
import Table from "./componenets/Table";
import "./styles/index.css"
import NavBar from "./componenets/Navbar";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { changeSeason } from "./store/seasonSlice";

const App = () => {
    
  const seasonId = useSelector((state: RootState) => state.season.seasonId);
  const status = useSelector((state: RootState) => state.season.status);
      
  const dispatch = useAppDispatch();
  const setSeasonId = (id: string) => {
    dispatch(changeSeason({seasonId: id}))
  }
  
  if(!seasonId || !seasons[seasonId] || status === "failed"){
  return (
      <div className='h-screen flex items-center justify-center'>
        <h1>Something went wrong</h1>
      </div>
    );
  }


    if(status == "loading"){
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
                <NavBar/>
                <Table />
            </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="seasonchangeId" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {Object.entries(seasons).map(([_, season]) =>(
                        <li onClick={() => setSeasonId(season.seasonId)} key={season.seasonId} > <a>{season.seasonTitle}</a></li>
                ))}
              </ul>
            </div>
        </div>
    )

};

export default App;