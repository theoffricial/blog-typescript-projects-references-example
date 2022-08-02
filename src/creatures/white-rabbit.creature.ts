import { ICreature } from "./creature.interface";

export class WhiteRabbit implements ICreature {
    sound() {
        return 'Aloha'
    };
    get name() {
        return 'White Rabbit'
    };
}