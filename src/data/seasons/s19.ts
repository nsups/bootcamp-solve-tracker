import { Season, Contest, Participant } from "../../types/Season";
import { createContest } from "../../utils/createContest";

export const participants: Participant  = {
  'alifbinturjo': 'Md. Alif Bin Turjo',
  'so_what_': 'Sowad Hossain',
  'Ahtaj_imty_': 'Ahtaj Jahan Imty ',
  'piyal12066': 'Piyal Chowdhury',
  'shamim88': 'Shamim',
  'thercube': 'Rayed Riasat Rabbi ',
  'thecrazyscorp': 'Faheema Shaheed Tamanna',
  'Gopal': 'Mohan Dev Roy',
  'arabaaarrrrrr': 'Abrar Rahman',
  'Walid_Bin_Reza': 'Walid Bin Reza',
  'MirMdAsif ': 'Mir Mohammad Asif Abdullah ',
  'AzimBiswas': 'Azim Biswas Tazbee',
  'howl_codes': 'Moniruzzaman Mahadi',
  'Dead__man': 'Sumayer Khan Sajid',
  'Mehbur': 'Mehbur Rahman',
  'abdullahxsalim': 'Abdullah Salim',
  'itachi47': 'Farhin Ahmed Pranto',
  'eusra03': 'Eusra Amreen ',
  'Isharaq_200q': 'Ishraq Hossain rodro',
  'Tirtha123': 'Pranesh Majumder Tirtha',
  'SHA139': 'Shahran Hossain',
  'Badmin10x': 'Azowad Islam',
  'PY7HAGORAS': 'Md. Nafiul Alam Chowdhury',
  'unexist_exe': 'Rafiul Omar Rafi',
  'rubayet_22': 'MD Rubayet Alam',
  'Nobi_Kaha': 'Sayeed Mortuza',
  'terracoder': 'anik barua',
  'far_hana': 'Farhana Akter',
  'tasin49': 'Muhtadina Serniabat Tasin',
  '_cookies_': 'Rodela Chowdhury',
  'technobyte': 'Yousra Amin',
  'pushpita_241': 'Ilhum Rahman Pushpita',
  'Captain_A': 'Ahidul Hasan Dipu',
  'RIDI2322': 'Meherin Ahmmed',
  'talha_muammar': 'Talha Muammar',
};

const contests: Record<number, Contest> = {
//   627792: createContest(<contestId>, "Selection", totalProblems, target, weight),
    656719: createContest(656719, "Indi - 1", 6, 6, 1),
    656823: createContest(656823, "Week - 1", 26, 26, 1),

}

const s19: Season  = {
  seasonId: "s19",
  seasonTitle: "NSUPS Bootcamp Season 19",
  participants: participants,
  contests: contests,
  eligibility: { active: true, target: 70.0 },
  elimination: { active: true, target: 15 },
}

export default s19;