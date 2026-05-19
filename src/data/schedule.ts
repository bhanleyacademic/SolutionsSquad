export type GameResult = 'W' | 'L' | 'T' | null;

export interface Game {
  date: string;
  opponent: string;
  field: string;
  time: string;
  result: GameResult;
  ssScore: number | null;
  oppScore: number | null;
}

export const games: Game[] = [
  // Week 1 — Apr 12
  { date: 'Apr 12',  opponent: 'Bats Hit Crazy',                  field: 'F3', time: '6:15 PM', result: 'L', ssScore: 3,  oppScore: 14 },
  // Week 2 — Apr 26 (Apr 19 postponed to Jul 12)
  { date: 'Apr 26',  opponent: 'Proper Bunts',                     field: 'F4', time: '6:15 PM', result: 'L', ssScore: 2,  oppScore: 12 },
  // Week 3 — May 3 (double-header)
  { date: 'May 3',   opponent: 'Lotus Volunteers',                 field: 'F2', time: '5:10 PM', result: 'L', ssScore: 3,  oppScore: 8  },
  { date: 'May 3',   opponent: 'North Central Church of Christ',   field: 'F2', time: '6:15 PM', result: 'L', ssScore: 1,  oppScore: 10 },
  // Week 4 — May 10: No Games (Mother's Day)
  // Week 5 — May 17
  { date: 'May 17',  opponent: 'Tailgaters',                       field: 'F4', time: '7:20 PM', result: 'L', ssScore: 2,  oppScore: 12 },
  // Week 6 — May 24: No Games (Memorial Day Weekend)
  // Week 7 — May 31
  { date: 'May 31',  opponent: 'Splatter-Up',                      field: 'F4', time: '6:15 PM', result: null, ssScore: null, oppScore: null },
  // Week 8 — Jun 7
  { date: 'Jun 7',   opponent: 'Hot Diggity Dashers',              field: 'F4', time: '7:20 PM', result: null, ssScore: null, oppScore: null },
  // Week 9 — Jun 14
  { date: 'Jun 14',  opponent: 'Bru Crew',                         field: 'F4', time: '5:10 PM', result: null, ssScore: null, oppScore: null },
  // Week 10 — Jun 21: No Games (Father's Day)
  // Week 11 — Jun 28
  { date: 'Jun 28',  opponent: 'Dewey Decimators',                 field: 'F4', time: '7:20 PM', result: null, ssScore: null, oppScore: null },
  // Makeup game — Jul 12 (postponed from Apr 19)
  { date: 'Jul 12',  opponent: 'Mad Batters',                      field: 'F4', time: '5:10 PM', result: null, ssScore: null, oppScore: null },
];

export interface TeamStanding {
  team: string;
  w: number;
  l: number;
  runsFor: number;
  runsAgainst: number;
}

export const standings: TeamStanding[] = [
  { team: 'Tailgaters',                      w: 5, l: 0, runsFor: 59, runsAgainst: 9  },
  { team: 'Bru Crew',                        w: 4, l: 0, runsFor: 58, runsAgainst: 5  },
  { team: 'North Central Church of Christ',  w: 4, l: 0, runsFor: 49, runsAgainst: 15 },
  { team: 'Lotus Volunteers',                w: 3, l: 1, runsFor: 39, runsAgainst: 16 },
  { team: 'Bats Hit Crazy',                  w: 3, l: 2, runsFor: 49, runsAgainst: 43 },
  { team: 'Proper Bunts',                    w: 2, l: 2, runsFor: 17, runsAgainst: 47 },
  { team: 'Splatter-Up',                     w: 2, l: 3, runsFor: 27, runsAgainst: 40 },
  { team: 'Sunday Starters',                 w: 1, l: 3, runsFor: 31, runsAgainst: 31 },
  { team: 'Mad Batters',                     w: 1, l: 3, runsFor: 25, runsAgainst: 36 },
  { team: 'Dewey Decimators',                w: 1, l: 3, runsFor: 14, runsAgainst: 45 },
  { team: 'Hot Diggity Dashers',             w: 0, l: 4, runsFor: 14, runsAgainst: 50 },
  { team: 'Solutions Squad',                 w: 0, l: 5, runsFor: 11, runsAgainst: 56 },
];
