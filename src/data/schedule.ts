export type GameResult = 'W' | 'L' | 'T' | null;

export interface Game {
  date: string;
  opponent: string;
  location: string;
  time: string;
  result: GameResult;
  score: string | null;
}

export const games: Game[] = [
  { date: 'May 4, 2026',  opponent: 'Diamond Dogs',    location: 'Home', time: '6:00 PM', result: 'W', score: '12–7'  },
  { date: 'May 11, 2026', opponent: 'The Slidmasters', location: 'Away', time: '7:00 PM', result: 'L', score: '4–9'   },
  { date: 'May 18, 2026', opponent: 'Bat Signal',      location: 'Home', time: '6:30 PM', result: null, score: null   },
  { date: 'May 25, 2026', opponent: 'Foul Balls FC',   location: 'Away', time: '6:00 PM', result: null, score: null   },
  { date: 'Jun 1, 2026',  opponent: 'The Benchmarks',  location: 'Home', time: '7:00 PM', result: null, score: null   },
  { date: 'Jun 8, 2026',  opponent: 'Diamond Dogs',    location: 'Away', time: '6:30 PM', result: null, score: null   },
  { date: 'Jun 15, 2026', opponent: 'Run Time Errors', location: 'Home', time: '6:00 PM', result: null, score: null   },
  { date: 'Jun 22, 2026', opponent: 'The Slidmasters', location: 'Home', time: '7:00 PM', result: null, score: null   },
  { date: 'Jun 29, 2026', opponent: 'Bat Signal',      location: 'Away', time: '6:30 PM', result: null, score: null   },
  { date: 'Jul 13, 2026', opponent: 'Playoffs TBD',    location: 'TBD',  time: 'TBD',     result: null, score: null   },
];
