import { useSelector } from "react-redux";
import { RootState } from "../store";
import seasons from "../data";

const NavBar = () => {
    const seasonId = useSelector((state: RootState) => state.season.seasonId);

    return (
        <div className="navbar bg-base-100 fixed top-0">
            <div className="flex-none">
                <label htmlFor="seasonchangeId" className="btn">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div className="flex-1">
            <p className="p-2 text-xl truncate"> { seasons[seasonId].seasonTitle } Solve Tracker</p>
            </div>
      </div>
    )
}

export default NavBar;