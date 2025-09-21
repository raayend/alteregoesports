// Local data structures for Alter Ego Esports CS Division

export interface Player {
  id: number;
  nickname: string;
  fullName: string;
  role: string;
  status: string;
  description: string;
  photo: string;
  skills?: {
    name: string;
    level: number; // 1-5
    description: string;
  }[];
}

export interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  placement?: string;
  prize?: string;
  image?: string; // Trophy image URL
}

// Local MDL Division Data
export const mdlPlayers: Player[] = [
  {
    id: 1,
    nickname: "aldoo",
    fullName: "Aldoo",
    role: "Gold Lane",
    status: "Active",
    description: "Aldoo is an Indonesian player who is currently playing as a Gold Laner for Alter Ego X.",
    photo: "/assets/players/MLBB/MDL/aldoo.png",
    skills: [
      { name: "Farming", level: 4, description: "Efficient farming in the gold lane" },
      { name: "Team Fighting", level: 3, description: "Good contribution in team fights" },
      { name: "Map Awareness", level: 4, description: "Good understanding of map situations" }
    ]
  },
  {
    id: 2,
    nickname: "bqsyaii",
    fullName: "Muhammad Biqqi Syaifullah",
    role: "EXP Laner",
    status: "Active",
    description: "Muhammad \"Bq syaii\" Syaifullah is an Indonesian player who is currently playing as an EXP Laner for Alter Ego X.",
    photo: "/assets/players/MLBB/MDL/bqsyaii.png",
    skills: [
      { name: "Split Push", level: 4, description: "Good split push and wave management" },
      { name: "Team Fighting", level: 3, description: "Solid contribution in team fights" },
      { name: "Map Awareness", level: 4, description: "Good map awareness and gank timing" }
    ]
  },
  {
    id: 3,
    nickname: "fadlyy",
    fullName: "Fadlyy",
    role: "Mid Laner",
    status: "Active",
    description: "Fadlyy is an Indonesian player who is currently playing as a Mid Laner for Alter Ego X.",
    photo: "/assets/players/MLBB/MDL/fadlyy.png",
    skills: [
      { name: "Mechanical Skill", level: 4, description: "Precise skill execution and combos" },
      { name: "Map Control", level: 3, description: "Consistent mid lane pressure" },
      { name: "Roam Support", level: 3, description: "Good roaming support to other lanes" }
    ]
  },
  {
    id: 4,
    nickname: "gann",
    fullName: "Gann",
    role: "Jungler",
    status: "Active",
    description: "Gann is an Indonesian player who is currently playing as a Jungler for Alter Ego X.",
    photo: "/assets/players/MLBB/MDL/gann.png",
    skills: [
      { name: "Ganking", level: 4, description: "Good gank timing and execution" },
      { name: "Vision Control", level: 3, description: "Solid team vision control" },
      { name: "Objective Control", level: 4, description: "Good turtle and lord control" }
    ]
  },
  {
    id: 5,
    nickname: "kaiser",
    fullName: "Kaiser",
    role: "Jungler",
    status: "Active",
    description: "Kaiser is an Indonesian player who is currently playing as a Jungler for Alter Ego X.",
    photo: "/assets/players/MLBB/MDL/kaiser.png",
    skills: [
      { name: "Farming", level: 4, description: "Efficient jungle farming" },
      { name: "Initiation", level: 3, description: "Good team fight initiation" },
      { name: "Adaptability", level: 4, description: "Quick adaptation to meta changes" }
    ]
  },
  {
    id: 6,
    nickname: "kyuzaz",
    fullName: "Kyuzaz",
    role: "Roamer",
    status: "Active",
    description: "Kyuzaz is an Indonesian player who is currently playing as a Roamer for Alter Ego X.",
    photo: "/assets/players/MLBB/MDL/kyuzaz.png",
    skills: [
      { name: "Vision Control", level: 4, description: "Good team vision control" },
      { name: "Initiation", level: 3, description: "Good team fight initiation timing" },
      { name: "Support Play", level: 4, description: "Solid support for teammates" }
    ]
  },
  {
    id: 7,
    nickname: "kzuki",
    fullName: "Kzuki",
    role: "Mid Laner",
    status: "Active",
    description: "Kzuki is an Indonesian player who is currently playing as a Mid Laner for Alter Ego X.",
    photo: "/assets/players/MLBB/MDL/kzuki.png",
    skills: [
      { name: "Farm Efficiency", level: 4, description: "Good farming efficiency" },
      { name: "Late Game Carry", level: 4, description: "Solid late game carry potential" },
      { name: "Team Fighting", level: 3, description: "Good team fight contribution" }
    ]
  },
  {
    id: 8,
    nickname: "magma",
    fullName: "Muhammad Hakim",
    role: "Roamer",
    status: "Active",
    description: "Muhammad \"Magma\" Hakim (born January 2, 2006) is an Indonesian player who is currently playing as a Roamer for Alter Ego X.",
    photo: "/assets/players/MLBB/MDL/magma.png",
    skills: [
      { name: "Experience", level: 3, description: "Growing gameplay experience" },
      { name: "Leadership", level: 3, description: "Developing team leadership in-game" },
      { name: "Game Sense", level: 4, description: "Good understanding of game situations" }
    ]
  }
];

export const mdlAchievements: Achievement[] = [
  {
    id: 1,
    title: "MDL Indonesia Season 11",
    date: "2025-06-01",
    description: "MDL Indonesia Season 11",
    placement: "1st",
    prize: "$6,000",
    image: "/assets/images/ourdivisions/divisions/mlbb/mdl/achievments/MDL_Indonesia_2025_allmode.png"
  },
  {
    id: 2,
    title: "MDL Indonesia Season 10",
    date: "2024-10-18",
    description: "MDL Indonesia Season 10",
    placement: "5th - 8th",
    prize: "$2,584.92",
    image: "/assets/images/ourdivisions/divisions/mlbb/mdl/achievments/MDL_Indonesia_2025_allmode.png"
  },
  {
    id: 3,
    title: "DGWIB Season 15",
    date: "2024-06-28",
    description: "DGWIB Season 15",
    placement: "1st",
    prize: "$915.67",
    image: "/assets/images/ourdivisions/divisions/mlbb/mdl/achievments/DGWIB_allmode.png"
  },
  {
    id: 4,
    title: "Kohai SEA Championship Season 2",
    date: "2023-12-31",
    description: "Kohai SEA Championship Season 2",
    placement: "3rd",
    prize: "$1,500",
    image: "/assets/images/ourdivisions/divisions/mlbb/mdl/achievments/Kohai_SEA_Championship_Season_2_allmode.png"
  },
  {
    id: 5,
    title: "Piala Ketum Kadin Esports 2023",
    date: "2023-09-23",
    description: "Piala Ketum Kadin Esports 2023",
    placement: "4th",
    prize: "$1,300.81",
    image: "/assets/images/ourdivisions/divisions/mlbb/mdl/achievments/Piala_Ketum_Kadin_Esports_allmode.png"
  },
  {
    id: 6,
    title: "Piala Bung Karno Esports 2023",
    date: "2023-07-04",
    description: "Piala Bung Karno Esports 2023",
    placement: "2nd",
    prize: "$1,332.19",
    image: "/assets/images/ourdivisions/divisions/mlbb/mdl/achievments/Piala_Bung_Karno_2023_allmode.png"
  }
];

// Local CS Division Data
export const csPlayers: Player[] = [
  {
    id: 1,
    nickname: "b1lal",
    fullName: "Bilal Chehab",
    role: "In-game leader",
    status: "Active",
    description: "Bilal \"b1lal\" Chehab (born December 4, 2000) is a Lebanese professional Counter-Strike 2 player and a former Counter-Strike: Global Offensive player.",
    photo: "/assets/players/CS2/B1lal.png",
    skills: [
      { name: "Leadership", level: 5, description: "Excellent tactical leadership and decision making" },
      { name: "Game Sense", level: 5, description: "Exceptional understanding of game mechanics" },
      { name: "Communication", level: 5, description: "Clear and effective communication" }
    ]
  },
  {
    id: 2,
    nickname: "tomiko",
    fullName: "Tomasz Uroda",
    role: "Rifler",
    status: "Active",
    description: "Tomasz \"tomiko\" Uroda (born March 22, 2004) is a Polish professional Counter-Strike 2 player and a former Counter-Strike: Global Offensive player.",
    photo: "/assets/players/CS2/tomiko.jpg",
    skills: [
      { name: "Aiming", level: 5, description: "Precise aim and accuracy" },
      { name: "Game Sense", level: 4, description: "Good understanding of game mechanics" },
      { name: "Reflexes", level: 4, description: "Quick reaction time" }
    ]
  },
  {
    id: 3,
    nickname: "BnTeT",
    fullName: "Hansel Ferdinand",
    role: "In-game leader and Rifler",
    status: "Active",
    description: "Hansel \"BnTeT\" Ferdinand (born August 28, 1995) is an Indonesian professional Counter-Strike 2 player and former Counter-Strike: Global Offensive player. He is well known for being the best player from Indonesia and is also regarded as one of the best in Asia.",
    photo: "/assets/players/CS2/BnTeT.jpg",
    skills: [
      { name: "Strategy", level: 5, description: "Excellent tactical planning" },
      { name: "Leadership", level: 5, description: "Strong team leadership" },
      { name: "Experience", level: 5, description: "Years of professional gameplay experience" }
    ]
  },
  {
    id: 4,
    nickname: "rate",
    fullName: "Tengis Boldbaatar",
    role: "Rifler",
    status: "Active",
    description: "Tengis \"rate\" Boldbaatar (born October 2, 2002) is a Mongolian professional Counter-Strike 2 player and former Counter-Strike: Global Offensive player.",
    photo: "/assets/players/CS2/Rate.jpg",
    skills: [
      { name: "Aiming", level: 5, description: "Precise aim and accuracy" },
      { name: "Clutching", level: 4, description: "Performs well under pressure" },
      { name: "Map Knowledge", level: 4, description: "Good understanding of map layouts" }
    ]
  },
  {
    id: 5,
    nickname: "Gratisfaction",
    fullName: "Sean Kaiwai",
    role: "AWPer",
    status: "Active",
    description: "Sean \"Gratisfaction\" Kaiwai (born March 6, 1996) is a New Zealand professional Counter-Strike 2 player and a former professional Counter-Strike: Global Offensive player.",
    photo: "/assets/players/CS2/Gratisfaction.png",
    skills: [
      { name: "Sniping", level: 5, description: "Exceptional long-range accuracy" },
      { name: "Patience", level: 4, description: "Good at waiting for the right moment" },
      { name: "Positioning", level: 5, description: "Excellent positioning skills" }
    ]
  },
  {
    id: 6,
    nickname: "bali",
    fullName: "Andrew Joseph",
    role: "Coach",
    status: "Active",
    description: "Andrew \"bali\" Joseph (born March 19, 1987) is an Indonesian professional Counter-Strike 2 coach, a former Counter-Strike: Global Offensive coach and player, and a former Counter-Strike player.",
    photo: "/assets/players/CS2/Bali.jpg",
    skills: [
      { name: "Strategy", level: 5, description: "Excellent tactical planning and game analysis" },
      { name: "Coaching", level: 5, description: "Effective mentor and teacher" },
      { name: "Experience", level: 5, description: "Years of professional CS experience" }
    ]
  }
];

// Local MLBB Division Data
export const mlbbPlayers: Player[] = [
  {
    id: 1,
    nickname: "Nino",
    fullName: "Syauki Fauzan Sumarno",
    role: "EXP Laner",
    status: "Active",
    description: "Syauki \"Nino\" Sumarno (born April 30, 2004) is an Indonesian player who is currently playing as an EXP Laner for Alter Ego.",
    photo: "/assets/players/MLBB/MPL/nino.png",
    skills: [
      { name: "Split Push", level: 5, description: "Exceptional split push and wave management" },
      { name: "Team Fighting", level: 4, description: "Good contribution in team fights" },
      { name: "Map Awareness", level: 5, description: "Excellent map awareness and gank timing" }
    ]
  },
  {
    id: 2,
    nickname: "Rinee",
    fullName: "Syahrul Ramadhan",
    role: "Jungler",
    status: "Active",
    description: "Syahrul \"Rinee\" Ramadhan (born November 5, 2004) is an Indonesian player who is currently playing as a Jungler for Alter Ego.",
    photo: "/assets/players/MLBB/MPL/rinee.png",
    skills: [
      { name: "Ganking", level: 5, description: "Precise gank timing and execution" },
      { name: "Vision Control", level: 4, description: "Good team vision control" },
      { name: "Objective Control", level: 5, description: "Excellent turtle and lord control" }
    ]
  },
  {
    id: 3,
    nickname: "Yazukee",
    fullName: "Muhammad Affan Wahyudi",
    role: "Jungler",
    status: "Active",
    description: "Muhammad \"Yazukee\" Affan Wahyudi is an Indonesian player who is currently playing as a Jungler for Alter Ego.",
    photo: "/assets/players/MLBB/MPL/yazukee.png",
    skills: [
      { name: "Farming", level: 4, description: "Efficient jungle farming" },
      { name: "Initiation", level: 4, description: "Good team fight initiation" },
      { name: "Adaptability", level: 5, description: "Quick adaptation to meta changes" }
    ]
  },
  {
    id: 4,
    nickname: "Hijumee",
    fullName: "Dalvin Ramadhana Putra",
    role: "Mid Laner",
    status: "Active",
    description: "Dalvin \"Hijumee\" Putra (born November 23, 2002) is an Indonesian player who is currently playing as a Mid Laner for Alter Ego.",
    photo: "/assets/players/MLBB/MPL/hijumee.png",
    skills: [
      { name: "Mechanical Skill", level: 5, description: "Precise skill execution and combos" },
      { name: "Map Control", level: 4, description: "Consistent mid lane pressure" },
      { name: "Roam Support", level: 4, description: "Good roaming support to other lanes" }
    ]
  },
  {
    id: 5,
    nickname: "Cyruz",
    fullName: "Muhammad Halim",
    role: "Mid Laner",
    status: "Active",
    description: "Muhammad \"Cyruz\" Halim is an Indonesian player who is currently playing as a Mid Laner for Alter Ego.",
    photo: "/assets/players/MLBB/MPL/cyruz.png",
    skills: [
      { name: "Farm Efficiency", level: 5, description: "Excellent farming efficiency" },
      { name: "Late Game Carry", level: 5, description: "High late game carry potential" },
      { name: "Team Fighting", level: 4, description: "Consistent team fight contribution" }
    ]
  },
  {
    id: 6,
    nickname: "Arfy",
    fullName: "Arifudin Dingarai",
    role: "Gold Laner",
    status: "Active",
    description: "Arifudin \"Arfy\" Dingarai is an Indonesian player who is currently playing as a Gold Laner for Alter Ego.",
    photo: "/assets/players/MLBB/MPL/arfy.png",
    skills: [
      { name: "Farming", level: 5, description: "Exceptional farming efficiency" },
      { name: "Late Game Carry", level: 5, description: "High late game carry potential" },
      { name: "Team Fighting", level: 4, description: "Consistent team fight contribution" }
    ]
  },
  {
    id: 7,
    nickname: "Alekk",
    fullName: "Alexander Owen",
    role: "Roamer",
    status: "Active",
    description: "Alexander \"Alekk\" Owen (born September 20, 2004) is an Indonesian player who is currently playing as a Roamer for Alter Ego.",
    photo: "/assets/players/MLBB/MPL/alekk.png",
    skills: [
      { name: "Vision Control", level: 4, description: "Good team vision control" },
      { name: "Initiation", level: 4, description: "Good team fight initiation timing" },
      { name: "Support Play", level: 5, description: "Excellent support for teammates" }
    ]
  },
  {
    id: 8,
    nickname: "Ivann",
    fullName: "Vincentsius Ivan Adrianto",
    role: "Roamer",
    status: "Active",
    description: "Vincentsius \"Ivann\" Adrianto (born September 24, 2000) is an Indonesian player who is currently playing as a Roamer for Alter Ego.",
    photo: "/assets/players/MLBB/MPL/ivann.png",
    skills: [
      { name: "Experience", level: 5, description: "Years of professional gameplay experience" },
      { name: "Leadership", level: 4, description: "Good team leadership in-game" },
      { name: "Game Sense", level: 5, description: "Excellent understanding of game situations" }
    ]
  },
  {
    id: 9,
    nickname: "Xepher",
    fullName: "Kenny Deo",
    role: "Coach",
    status: "Active",
    description: "Kenny \"Xepher\" Deo (born June 27, 1996) is an Indonesian Coach who is currently working for Alter Ego as a Coach.",
    photo: "/assets/players/MLBB/MPL/xepher.png",
    skills: [
      { name: "Strategy", level: 5, description: "Excellent tactical planning and game analysis" },
      { name: "Coaching", level: 5, description: "Effective mentor and teacher" },
      { name: "Meta Knowledge", level: 5, description: "Deep understanding of current meta" }
    ]
  },
  {
    id: 10,
    nickname: "Styx",
    fullName: "Michael Abraham",
    role: "Ast.Coach",
    status: "Active",
    description: "Michael \"Styx\" Abraham is an Indonesian Ast.Coach who is currently working for Alter Ego as a Ast.Coach.",
    photo: "/assets/players/MLBB/MPL/styx.png",
    skills: [
      { name: "Analysis", level: 5, description: "Excellent game analysis and review" },
      { name: "Support", level: 5, description: "Strong support for head coach" },
      { name: "Communication", level: 4, description: "Clear communication with players" }
    ]
  }
];

export const csAchievements: Achievement[] = [
  {
    id: 1,
    title: "CS Asia Championships 2025: Asian Qualifier",
    date: "2025-09-16",
    description: "2nd Place - Runner-up",
    placement: "2nd",
    prize: "TBD",
    image: "/assets/images/ourdivisions/divisions/cs/achievments/CS_Asia_Championships_2025.png"
  },
  {
    id: 2,
    title: "BLAST Asia Risings Ulaanbaatar 2025",
    date: "2025-08-01",
    description: "5th - 8th Place",
    placement: "5th - 8th",
    prize: "TBD",
    image: "/assets/images/ourdivisions/divisions/cs/achievments/BLAST_Asia_Risings_Ulaanbaatar_lightmode.png"
  },
  {
    id: 3,
    title: "ESL Pro League Season 22: Asian Qualifier",
    date: "2025-07-11",
    description: "9th - 16th Place",
    placement: "9th - 16th",
    prize: "TBD",
    image: "/assets/images/ourdivisions/divisions/cs/achievments/ESL_Pro_League_Season_22_darkmode.png"
  },
  {
    id: 4,
    title: "Perfect World Shanghai Major 2024: Asia-Pacific RMR",
    date: "2024-11-12",
    description: "7th - 8th Place",
    placement: "7th - 8th",
    prize: "TBD",
    image: "/assets/images/ourdivisions/divisions/cs/achievments/Perfect_World_Shanghai_Major_2024_APAC_RMR_lightmode.png"
  },
  {
    id: 5,
    title: "ESEA Season 50: Open Division - Asia",
    date: "2024-09-21",
    description: "2nd Place",
    placement: "2nd",
    prize: "$300",
    image: "/assets/images/ourdivisions/divisions/cs/achievments/ESEA_League_2024_lightmode.png"
  },
  {
    id: 6,
    title: "Rise of Legion: Summer 2019 Season 1",
    date: "2019-04-18",
    description: "3rd Place",
    placement: "3rd",
    prize: "$100",
    image: "/assets/images/ourdivisions/divisions/cs/achievments/Rise_of_Legion.png"
  }
];

// Local MLBB Division Achievements
export const mlbbAchievements: Achievement[] = [
  {
    id: 1,
    title: "MPL Indonesia Season 15",
    date: "2025-06-13",
    description: "4th Place - Semifinalists",
    placement: "4th",
    prize: "$27,915",
    image: "/assets/images/ourdivisions/divisions/mlbb/achievments/MPL_Indonesia_2025_allmode.png"
  },
  {
    id: 2,
    title: "MPL Indonesia Season 14",
    date: "2024-10-23",
    description: "5th - 6th Place",
    placement: "5th - 6th",
    prize: "$20,961",
    image: "/assets/images/ourdivisions/divisions/mlbb/achievments/MPL_Indonesia_2025_allmode.png"
  },
  {
    id: 3,
    title: "Johor All Star Esports Championship 2023",
    date: "2023-10-22",
    description: "1st Place - Champions",
    placement: "1st",
    prize: "$6,282",
    image: "/assets/images/ourdivisions/divisions/mlbb/achievments/Johor_All_Star_Esports.png"
  },
  {
    id: 4,
    title: "MPL Indonesia Season 11",
    date: "2023-04-08",
    description: "3rd Place - Bronze Medalists",
    placement: "3rd",
    prize: "$25,816",
    image: "/assets/images/ourdivisions/divisions/mlbb/achievments/MPL_Indonesia_2025_allmode.png"
  },
  {
    id: 5,
    title: "M2 World Championship",
    date: "2021-01-23",
    description: "4th Place - Semifinalists",
    placement: "4th",
    prize: "$16,800",
    image: "/assets/images/ourdivisions/divisions/mlbb/achievments/M2_World_allmode.png"
  },
  {
    id: 6,
    title: "ONE Esports MPL Invitational 2020",
    date: "2020-12-06",
    description: "1st Place - Champions",
    placement: "1st",
    prize: "$35,000",
    image: "/assets/images/ourdivisions/divisions/mlbb/achievments/ONE_Esports_MPLI_allmode.png"
  }
];

// Local PUBG Mobile Division Achievements
export const pubgAchievements: Achievement[] = [
  {
    id: 1,
    title: "PUBG Mobile World Cup 2025",
    date: "2025-08-03",
    description: "PUBG Mobile World Cup 2025",
    placement: "8th",
    prize: "$150,000",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/PUBG_Mobile_World_Cup_lightmode.png"
  },
  {
    id: 2,
    title: "PUBG Mobile Super League - Southeast Asia Summer 2025",
    date: "2025-06-22",
    description: "PUBG Mobile Super League - Southeast Asia Summer 2025",
    placement: "2nd",
    prize: "$27,850",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/1200px-PUBG_Mobile_Super_League_Southeast_Asia_lightmode.png"
  },
  {
    id: 3,
    title: "PUBG Mobile Super League - Southeast Asia Spring 2025",
    date: "2025-03-16",
    description: "PUBG Mobile Super League - Southeast Asia Spring 2025",
    placement: "9th",
    prize: "$4,900",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/1200px-PUBG_Mobile_Super_League_Southeast_Asia_lightmode.png"
  },
  {
    id: 4,
    title: "PUBG Mobile Global Championship 2024",
    date: "2024-11-10",
    description: "PUBG Mobile Global Championship 2024",
    placement: "41st - 43rd",
    prize: "$21,000",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/PUBG_Mobile_Global_Championship_2024_lightmode.png"
  },
  {
    id: 5,
    title: "PUBG Mobile Super League - Southeast Asia Summer 2024",
    date: "2024-06-02",
    description: "PUBG Mobile Super League - Southeast Asia Summer 2024",
    placement: "7th",
    prize: "$13,250",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/1200px-PUBG_Mobile_Super_League_Southeast_Asia_lightmode.png"
  },
  {
    id: 6,
    title: "PUBG Mobile Super League - Southeast Asia Spring 2024",
    date: "2024-03-17",
    description: "PUBG Mobile Super League - Southeast Asia Spring 2024",
    placement: "2nd",
    prize: "$23,700",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/1200px-PUBG_Mobile_Super_League_Southeast_Asia_lightmode.png"
  },
  {
    id: 7,
    title: "PUBG Mobile Global Championship 2023",
    date: "2023-11-24",
    description: "PUBG Mobile Global Championship 2023",
    placement: "33rd",
    prize: "$27,500",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/1200px-PUBG_Mobile_Global_Championship_lightmode.png"
  },
  {
    id: 8,
    title: "PUBG Mobile Super League - Southeast Asia Fall 2023",
    date: "2023-08-27",
    description: "PUBG Mobile Super League - Southeast Asia Fall 2023",
    placement: "1st",
    prize: "$49,500",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/1200px-PUBG_Mobile_Super_League_Southeast_Asia_lightmode.png"
  },
  {
    id: 9,
    title: "PUBG Mobile World Invitational 2023",
    date: "2023-07-16",
    description: "PUBG Mobile World Invitational 2023",
    placement: "5th",
    prize: "$112,500",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgmobile/1200px-PUBG_Mobile_World_Invitational_lightmode.png"
  }
];

// Local PUBG PC Division Data
export const pubgpcPlayers: Player[] = [
  {
    id: 1,
    nickname: "Chibiritt",
    fullName: "Risky Junaidi Putra",
    role: "Support",
    status: "Active",
    description: "Risky \"Chibiritt\" Junaidi Putra (born June 9, 2000) is an Indonesian player.",
    photo: "/assets/players/pubg/pubgpc/unknownplayer.png",
    skills: [
      { name: "Support", level: 4, description: "Good at supporting teammates" },
      { name: "Healing", level: 5, description: "Efficient use of medical items" },
      { name: "Reviving", level: 4, description: "Quick and safe revives" }
    ]
  },
  {
    id: 2,
    nickname: "Ma4nn",
    fullName: "Zalman Al-Farizi",
    role: "Rifler",
    status: "Active",
    description: "Zalman \"Ma4nn\" Al-Farizi (born December 2, 2000) is an Indonesian player who is currently playing for From the Future.",
    photo: "/assets/players/pubg/pubgpc/Ma4nn.png",
    skills: [
      { name: "Aiming", level: 4, description: "Accurate shooting and target acquisition" },
      { name: "Game Sense", level: 4, description: "Good understanding of game situations" },
      { name: "Positioning", level: 4, description: "Strategic positioning in combat" }
    ]
  },
  {
    id: 3,
    nickname: "tRycK",
    fullName: "Faitric Marsan Sawzi",
    role: "Fragger",
    status: "Active",
    description: "Faitric \"tRycK\" Marsan Sawzi is an Indonesian player who is currently playing for From the Future.",
    photo: "/assets/players/pubg/pubgpc/unknownplayer.png",
    skills: [
      { name: "Aiming", level: 5, description: "Precise aim and accuracy" },
      { name: "Clutching", level: 4, description: "Performs well under pressure" },
      { name: "Map Knowledge", level: 4, description: "Good understanding of map layouts" }
    ]
  },
  {
    id: 4,
    nickname: "YOM1C",
    fullName: "Fakhri Adha",
    role: "TBD",
    status: "Active",
    description: "Fakhri \"YOM1C\" Adha (born March 15, 2000) is an Indonesian player who is currently playing for From the Future.",
    photo: "/assets/players/pubg/pubgpc/unknownplayer.png",
    skills: [
      { name: "Aiming", level: 4, description: "Precise aim and accuracy" },
      { name: "Game Sense", level: 4, description: "Good understanding of game situations" },
      { name: "Positioning", level: 4, description: "Strategic positioning in combat" }
    ]
  },
  {
    id: 5,
    nickname: "RDK",
    fullName: "Ridho Dwiki Sena",
    role: "Coach",
    status: "Active",
    description: "Ridho \"RDKboss\" Dwiki Sena is an Indonesian player who is currently playing for From the Future.",
    photo: "/assets/players/pubg/pubgpc/RDK.png",
    skills: [
      { name: "Strategy", level: 5, description: "Excellent tactical planning and game analysis" },
      { name: "Coaching", level: 5, description: "Effective mentor and teacher" },
      { name: "Communication", level: 4, description: "Clear communication of strategies" }
    ]
  }
];

// Local PUBG PC Division Achievements
export const pubgpcAchievements: Achievement[] = [
  {
    id: 1,
    title: "PUBG Master Series 2025 Phase 2",
    date: "2025-09-07",
    description: "1st Place - Champions",
    placement: "1st",
    prize: "$7,500",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgpc/PUBG_Master_Series_lightmode.png"
  },
  {
    id: 2,
    title: "Esports World Cup 2025: APAC Qualifier",
    date: "2025-06-29",
    description: "13th Place",
    placement: "13th",
    prize: "TBD",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgpc/1200px-Esports_World_Cup_2024_lightmode.png"
  },
  {
    id: 3,
    title: "DESports PUBG SEA Invitational",
    date: "2022-09-11",
    description: "14th Place",
    placement: "14th",
    prize: "$567",
    image: "/assets/images/ourdivisions/divisions/pubg/pubgpc/DEsports_PUBG_SEA_Invitational_allmode.png"
  }
];

export default {};