import chalk from 'chalk'
import {CheshireCat,WhiteRabbit} from '../creatures'
import {formatNameAndSound} from '../formatting';
const cheshire = new CheshireCat()
const whiteRabbit = new WhiteRabbit()

function initialWonderland() {
    console.log(chalk.bgBlue(chalk.whiteBright("This is Wonderland!")))
    console.log(chalk.bgMagenta("Now all creatures introduce themselves:"))
    // creatures say hello
    console.log(chalk.bgGreen(chalk.black(`1. ${formatNameAndSound(cheshire)}`)))
    console.log(chalk.bgWhite(chalk.black(`2. ${formatNameAndSound(whiteRabbit)}`)))
    console.log(chalk.bgWhite(chalk.black(`2. ${formatNameAndSound(whiteRabbit)}`)))
    console.log(chalk.bgWhite(chalk.black(`2. ${formatNameAndSound(whiteRabbit)}`)))
    console.log(chalk.bgWhite(chalk.black(`2. ${formatNameAndSound(whiteRabbit)}`)))
}

initialWonderland()
