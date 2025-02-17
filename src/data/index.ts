import { Season } from "../types/Season"
import s18  from "./seasons/s18";
import s17 from "./seasons/s17";
import s19 from "./seasons/s19";
import s20 from "./seasons/s20";

const seasons: Record<string, Season> = {
    s17, s18, s19, s20
}

export const currentSeason = "s20";

export default seasons;
