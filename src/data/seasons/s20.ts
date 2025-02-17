import { Season, Contest, Participant } from "../../types/Season";
import { createContest } from "../../utils/createContest";

export const participants: Participant  = {
    'zidankhan': 'Md Zidan Khan',
    'Abd_Muhim': 'Abdullah Al Muhim',
    'Ebnesamit': 'Ebne Samit Chowdhury',
    'isharaq_200q': 'Ishraq Hossain Rodro',
    'RArefin20': 'Ratul Arefin',
    'eusra03': 'Eusra Amreen',
    'Aariba109': 'Aariba Huq',
    'shamim88': 'Shamim',
    'hell37': 'Mir Mutasim Hossain',
    'arabaaarrrrrr': 'Abrar Rahman',
    'awwasee': 'Abrar Wahid Wasee',
    'Tamim2002': 'Rafiqul Islam Tamim',
    'Rayan_Chowdhury': 'Rayan Chowdhury',
    'K4Z1M_UnkWn': 'Kazim Hasan',
    'mariam7575': 'Maryam Islam',
    'nihal_solver': 'Nafis Alam Nihal',
    'ayman1122': 'Ahnaf Ayman',
    'cursed_child': 'Md Ataur Rahman Ahad',
};

const contests: Record<number, Contest> = {
    688224: createContest(688224, "Selection", 11, 11, 0.7),
    689687: createContest(689687, "Indi - 1", 7, 7, 0.8),
    689810: createContest(689810, "Week - 1", 26, 26, 0.8),
    691448: createContest(691448, "Indi - 2", 7, 7, 1),
    691698: createContest(691698, "Week - 2", 20, 20, 1),
    693348: createContest(693348, "Indi - 3", 5, 5, 1),
    693725: createContest(693725, "Week- 3", 16, 16, 1),
}

const s19: Season  = {
  seasonId: "s19",
  seasonTitle: "NSUPS Bootcamp Season 20",
  participants: participants,
  contests: contests,
  eligibility: { active: true, target: 90.0 },
  elimination: { active: true, target: 50 },
}

export default s19;