import { ICreature } from '../../creatures'
import {formatNameAndSound} from '../format-name-and-sound'

describe('formatNameAndSound', () => {
    it('should format the hello message of a given creature', () => {
        expect(
            formatNameAndSound({
                name: 'test', 
                sound: () => 'hello' 
            } as ICreature)).toBe('hello, it\'s test!')
    })
})
    