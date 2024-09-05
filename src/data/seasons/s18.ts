
import { createContest } from "../../utils/createContest";
import { Season, Contest, Participant } from "../../types/Season";

export const participants: Participant  = {
  "Micycle_Bobert": "Aoutul Nabi Purna",
  "12_34": "Fatema Hossain",
  "salma987": "Salma Hossain",
  "Sium02": "Md. Abdul Wadud",
  "Isharaq_200q": "Ishraq Hossain Rodro",
  "ahsanul7haque": "Ahsanul Haque",
  "abdullahxsalim": "Abdullah Salim",
  "so_what_": "Sowad Hossain",
  "myself_tanvir805": "Md. Tanvir Islam",
  "flying_neuron": "Sumon Das",
  "jaima23": "Jaima Islam Sadia",
  "itachi47": "Farhin Ahmed Pranto",
  "Megh_AbdulAhad": "Md. Abdul Ahad",
  "far_hana": "Farhana Akter",
  "reptile": "Tamjid Islam",
  "norizz_codes": "rizwan arif",
  "junayed_02": "Md. Shakib Shahariar Junayed",
  "ahnaf2002": "Ahnaf Akib Ahmed",
  "CRYOGEN": "Nabigah Bin Sayeed",
  "nafis7002": "Nafis Hasnat",
  "Tirtha123": "Pranesh Majumder Tirtha",
};

const contests: Record<number, Contest> = {
  627792: createContest(627792, "Selection", 10, 10, 0.5),
  629334: createContest(629334, "Week - 1", 26, 23, 1),
  630239: createContest(630239, "Indi - 1", 8, 8, 1),
  630604: createContest(630604, "Week - 2", 26, 23, 1),
  635309: createContest(635309, "Indi - 2", 8, 8, 1),
  635532: createContest(635532, "Week - 3", 26, 23, 1),
  636693: createContest(636693, "Indi - 4", 8, 8, 1),
  637113: createContest(637113, "Week - 4", 20, 20, 1),
}

const s18: Season  = {
  season: "s18",
  participants: participants,
  contests: contests,
  eligibility: { active: true, target: 80.0 },
  elimination: { active: false, target: 15 },
}

export default s18;