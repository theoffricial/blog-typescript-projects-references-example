import { ICreature } from "./creature.interface";

export class CheshireCat implements ICreature {
    sound() {
        return 'Phhh'
    };
    get name() {
        return 'Cheshire the cat'
    };
}

console.log(3)