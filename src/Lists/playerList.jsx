import Sauron from '../Pics/sauronblank.png'
import Land from '../Pics/land.png'
import Dragon from '../Pics/dragon.png'

export const PLAYERS = [
  {
    id: 0,
    name: 'Nick',
    kMatt: 0,
    kPavle: 0,
    kAndrew: 0,
    kWill: 0,
    kClay: 0,
    winStats: [
      {image: Sauron},

    ],
     killedBy: [
    ],
    get kills() {
      return this.kMatt + this.kPavle + this.kAndrew + this.kWill + this.kClay;
    }  
   },
  {
    id: 1,
    name: 'Matt',
    kNick: 0,
    kPavle: 0,
    kAndrew: 0,
    kWill: 1,
    kClay: 0,
    winStats: [
      {image: Land},
      {image: Land},

    ],
     killedBy: [
    ],
    get kills() {
      return this.kNick + this.kPavle + this.kAndrew + this.kWill + this.kClay;
    }  
   
  },
  {
    id: 2,
    name: 'Pavle',
    kMatt: 0,
    kNick: 0,
    kAndrew: 2,
    kWill: 0,
    kClay: 0,
    winStats: [
    ],
     killedBy: [
    ],

    get kills() {
      return this.kMatt + this.kNick + this.kAndrew + this.kWill + this.kClay;
    }  
  },
  {
    id: 3,
    name: 'Will',
    wins: 0,
    pic: Land,
    kMatt: 0,
    kPavle: 3,
    kAndrew: 0,
    kNick: 0,
    kClay: 0,
    winStats: [
    ],
     killedBy: [
    ],
    get kills() {
      return this.kMatt + this.kPavle + this.kAndrew + this.kNick + this.kClay;
    }  
  },
  {
    id: 4,
    name: 'Andrew',
    kMatt: 0,
    kPavle: 0,
    kNick: 0,
    kWill: 0,
    kClay: 4,
winStats: [
      {image: Dragon},

    ],
     killedBy: [
    ],
    get kills() {
      return this.kMatt + this.kPavle + this.kNick + this.kWill + this.kClay;
    }  
  },
  {
    id: 5,
    name: 'Clay',
    kMatt: 1,
    kPavle: 0,
    kAndrew: 0,
    kWill: 0,
    kNick: 5,
winStats: [
    ],
     killedBy: [
    ],
    get kills() {
      return this.kMatt + this.kPavle + this.kAndrew + this.kWill + this.kNick;
    }  
  },
];
