export const LIFE = 'Life'
export const ENERGY = 'Energy'
export const ENTERTAINMENT = 'Entertainment'

const BUTTONLIFE = 'EAT'
const BUTTONENERGY = 'SLEEP'
const BUTTONENTERTAINMENT = 'PLAY'

export const config = [
  { name: LIFE, buttonName: BUTTONLIFE, decreaseValue: 50 },
  { name: ENERGY, buttonName: BUTTONENERGY, decreaseValue: 50 },
  { name: ENTERTAINMENT, buttonName: BUTTONENTERTAINMENT, decreaseValue: 50 }
]
