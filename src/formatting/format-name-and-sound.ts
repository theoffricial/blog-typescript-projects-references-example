import type {ICreature} from '../creatures'
export function formatNameAndSound(creature: ICreature) {
    return `${creature.sound()}, it's ${creature.name}!`
}