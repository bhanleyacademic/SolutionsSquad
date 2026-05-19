export interface Player {
  name: string;
  number: number;
  position: string;
  bio: string;
  photo: string;
  objectPosition: string;
}

export const players: Player[] = [
  {
    number: 1,  name: 'Alex Rivera',    position: 'Pitcher',
    bio: 'Our ace on the mound. Fierce competitor with a killer rise ball.',
    photo: '/images/photos/IMG_0143.JPG',
    objectPosition: '38% 28%',
  },
  {
    number: 7,  name: 'Jordan Kim',     position: 'Catcher',
    bio: 'The backbone behind the plate. Calls a smart game every night.',
    photo: '/images/photos/IMG_0300.JPG',
    objectPosition: '72% 38%',
  },
  {
    number: 12, name: 'Sam Torres',     position: '1st Base',
    bio: 'Reliable glove and a power bat that keeps rallies alive.',
    photo: '/images/photos/IMG_0395.JPG',
    objectPosition: '50% 22%',
  },
  {
    number: 4,  name: 'Morgan Hayes',   position: '2nd Base',
    bio: 'Quick hands and quicker feet — turns double plays in a flash.',
    photo: '/images/photos/IMG_0330.JPG',
    objectPosition: '68% 28%',
  },
  {
    number: 9,  name: 'Casey Nguyen',   position: 'Shortstop',
    bio: 'The heart of the infield. Nothing gets past this one.',
    photo: '/images/photos/IMG_0340.JPG',
    objectPosition: '62% 22%',
  },
  {
    number: 22, name: 'Taylor Brooks',  position: '3rd Base',
    bio: 'Hot corner guardian with a cannon for an arm.',
    photo: '/images/photos/IMG_0315.JPG',
    objectPosition: '60% 28%',
  },
  {
    number: 17, name: 'Drew Patel',     position: 'Left Field',
    bio: 'Tracks down everything in the gap and leads off with speed.',
    photo: '/images/photos/IMG_0235.JPG',
    objectPosition: '30% 32%',
  },
  {
    number: 5,  name: 'Quinn Flores',   position: 'Center Field',
    bio: 'Fleet-footed center fielder and team captain for three seasons.',
    photo: '/images/photos/IMG_0285.JPG',
    objectPosition: '36% 30%',
  },
  {
    number: 33, name: 'Reese Lawson',   position: 'Right Field',
    bio: 'Big bat off the bench or in the lineup — always clutch.',
    photo: '/images/photos/IMG_0163.JPG',
    objectPosition: '38% 24%',
  },
  {
    number: 10, name: 'Blake Okafor',   position: 'Utility',
    bio: 'Can play anywhere on the field. The team\'s Swiss Army knife.',
    photo: '/images/photos/IMG_0260.JPG',
    objectPosition: '50% 28%',
  },
  {
    number: 21, name: 'Avery Sinclair', position: 'Pitcher',
    bio: 'Change-up specialist who keeps hitters guessing all game long.',
    photo: '/images/photos/IMG_0375.JPG',
    objectPosition: '36% 32%',
  },
  {
    number: 8,  name: 'Sage Williams',  position: 'Designated Hitter',
    bio: 'Pure slugger. Steps up when the game is on the line.',
    photo: '/images/photos/IMG_0222.JPG',
    objectPosition: '28% 18%',
  },
];
