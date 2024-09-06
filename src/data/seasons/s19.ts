import { Season, Contest, Participant } from "../../types/Season";

export const participants: Participant  = {
  
};

const contests: Record<number, Contest> = {
//   627792: createContest(<contestId>, "Selection", totalProblems, target, weight),
}

const s19: Season  = {
  seasonId: "s19",
  seasonTitle: "NSUPS Bootcamp Season 19",
  participants: participants,
  contests: contests,
  eligibility: { active: true, target: 80.0 },
  elimination: { active: false, target: 15 },
}

export default s19;