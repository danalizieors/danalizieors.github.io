import { decode, encode } from '../conversion'

const object = {
    null: null,
    booleans: [false, true],
    numbers: [2, 34, 567],
    strings: ['hello', 'world'],
    object: {
        field: 'value',
        nested: {
            nestedField: 'nestedValue',
        },
    },
}

describe('conversion', () => {
    test('encoded and decoded object is structurally equal to original', () => {
        const converted = decode(encode(object))
        expect(converted).toEqual(object)
    })

    test('decode should gracefully handle errors', () => {
        const converted = decode('not encoded properly')
        expect(converted).toBeUndefined()
    })
})
