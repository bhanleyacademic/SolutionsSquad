export interface Player {
  name: string;
  number: number;
  position: string;
  bio: string;
  photo: string;
}

export const players: Player[] = [
  { number: 1,  name: 'Alex Rivera',    position: 'Pitcher',       bio: 'Our ace on the mound. Fierce competitor with a killer rise ball.',        photo: '/SolutionsSquad/images/our-team/pic1.jpg' },
  { number: 7,  name: 'Jordan Kim',     position: 'Catcher',       bio: 'The backbone behind the plate. Calls a smart game every night.',          photo: '/SolutionsSquad/images/our-team/pic2.jpg' },
  { number: 12, name: 'Sam Torres',     position: '1st Base',      bio: 'Reliable glove and a power bat that keeps rallies alive.',                photo: '/SolutionsSquad/images/our-team/pic3.jpg' },
  { number: 4,  name: 'Morgan Hayes',   position: '2nd Base',      bio: 'Quick hands and quicker feet — turns double plays in a flash.',          photo: '/SolutionsSquad/images/our-team/pic4.jpg' },
  { number: 9,  name: 'Casey Nguyen',   position: 'Shortstop',     bio: 'The heart of the infield. Nothing gets past this one.',                  photo: '/SolutionsSquad/images/our-team/pic5.jpg' },
  { number: 22, name: 'Taylor Brooks',  position: '3rd Base',      bio: 'Hot corner guardian with a cannon for an arm.',                          photo: '/SolutionsSquad/images/our-team/pic6.jpg' },
  { number: 17, name: 'Drew Patel',     position: 'Left Field',    bio: 'Tracks down everything in the gap and leads off with speed.',            photo: '/SolutionsSquad/images/our-team/pic7.jpg' },
  { number: 5,  name: 'Quinn Flores',   position: 'Center Field',  bio: 'Fleet-footed center fielder and team captain for three seasons.',        photo: '/SolutionsSquad/images/our-team/pic8.jpg' },
  { number: 33, name: 'Reese Lawson',   position: 'Right Field',   bio: 'Big bat off the bench or in the lineup — always clutch when it counts.', photo: '/SolutionsSquad/images/our-team/pic1.jpg' },
  { number: 10, name: 'Blake Okafor',   position: 'Utility',       bio: 'Can play anywhere on the field. The team\'s Swiss Army knife.',          photo: '/SolutionsSquad/images/our-team/pic2.jpg' },
  { number: 21, name: 'Avery Sinclair', position: 'Pitcher',       bio: 'Change-up specialist who keeps hitters guessing all game long.',         photo: '/SolutionsSquad/images/our-team/pic3.jpg' },
  { number: 8,  name: 'Sage Williams',  position: 'Designated Hitter', bio: 'Pure slugger. Steps up when the game is on the line.',               photo: '/SolutionsSquad/images/our-team/pic4.jpg' },
];
