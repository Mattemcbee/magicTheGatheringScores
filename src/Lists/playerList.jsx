import Sauron from '../Pics/sauronblank.png'
import Land from '../Pics/land.png'
import Dragon from '../Pics/dragon.png'
import Treasure from '../Pics/bug.png'
import Black from '../Pics/black.png'
import Vamp from '../Pics/vamp2.png'
import Mercy from '../Pics/mercy.png'
import Xgreen from '../Pics/xgreen.png'
import dino from '../Pics/dino.png'
import swipe from '../Pics/swipe2.png'
import edlrazi from '../Pics/eldrazi2.jpg'
import goyf from '../Pics/goyf2.jpg'



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
      {
        killerName:'Clay',
        commander:Sauron
      },
      {
        killerName:'Andrew',
        commander:Sauron
      },
      {
        killerName:'Will',
        commander:Sauron
      },
      {
        killerName:'Andrew',
        commander:Sauron
      },
      {
        killerName:'Matt',
        commander:Sauron
      },
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
      {image: Xgreen},
      {image: Xgreen},

    ],
     killedBy: [
      {
        killerName:'Nick',
        commander:Vamp
      },
      {
        killerName:'Nick',
        commander:Vamp
      },
      {
        killerName:'Nick',
        commander:Vamp
      },
      {
        killerName:'Will',
        commander:swipe
      },
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
      {image: Black},
      {image: Mercy},

    ],
     killedBy: [
      {
        killerName:'Matt',
        commander:Black
      },
    ],

    get kills() {
      return this.kMatt + this.kNick + this.kAndrew + this.kWill + this.kClay;
    }  
  },
  {
    id: 3,
    name: 'Will',
    wins: 0,
    kMatt: 0,
    kPavle: 3,
    kAndrew: 0,
    kNick: 0,
    kClay: 0,
    winStats: [
      {image: Land},
      {image: dino},

    ],
     killedBy: [
      {
        killerName:'Andrew',
        commander:Land
      },
      {
        killerName:'Pavle',
        commander:Land
      },{
        killerName:'Matt',
        commander:Land
      },{
        killerName:'Pavle',
        commander:dino
      },{
        killerName:'Andrew',
        commander:dino
      },{
        killerName:'Nick',
        commander:dino
      },
      
      {
        killerName:'Andrew',
        commander:goyf
      },
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
  {image: Treasure},
  {image: Treasure},
  {image: edlrazi},


    ],
     killedBy: [
      {
        killerName:'Matt',
        commander:Treasure
      },
      {
        killerName:'Andrew',
        commander:Treasure
      },{
        killerName:'Nick',
        commander:Treasure
      },{
        killerName:'Pavle',
        commander:Treasure
      },

      {
        killerName:'Nick',
        commander:edlrazi
      },{
        killerName:'Pavle',
        commander:edlrazi
      },{
        killerName:'Matt',
        commander:edlrazi
      },
    ],
    get kills() {
      return this.kMatt + this.kPavle + this.kAndrew + this.kWill + this.kNick;
    }  
  },
];
