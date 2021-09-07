import fruits from './foods'
import {choice,remove} from './helpers'


let fruit = choice(fruits)
let newFruits = remove(fruits, fruit)

console.log(`I would like one ${fruit} please!`)
console.log(`Here you go:${fruit}`)
console.log('Delicious may I have another?')
console.log(`sorry we are all out, we have ${newFruits.length} left`)