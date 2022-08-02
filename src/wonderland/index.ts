import {CheshireCat,WhiteRabbit} from '../creatures'
import {formatNameAndSound} from '../shared'
const cheshire = new CheshireCat()
const whiteRabbit = new WhiteRabbit()

console.log("This is Wonderland!")
console.log("Now all creatures introduce themselves:")
console.log(formatNameAndSound(cheshire))
console.log(formatNameAndSound(whiteRabbit))