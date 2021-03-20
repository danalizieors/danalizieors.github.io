import {
    deflateSync,
    inflateSync as decompress,
    strFromU8 as decodeUint8Array,
    strToU8 as encodeUint8Array,
} from 'fflate'
import {
    fromUint8Array as encodeBase64,
    toUint8Array as decodeBase64,
} from 'js-base64/base64'

const { stringify, parse } = JSON
const compress = (data: Uint8Array) => deflateSync(data, { level: 9 })

export const encode = (object: any) => {
    const string = stringify(object)
    const uint8Array = encodeUint8Array(string)
    const compressed = compress(uint8Array)
    const base64 = encodeBase64(compressed, true)

    return base64
}

export const decode = (base64: string) => {
    try {
        const compressed = decodeBase64(base64)
        const uint8Array = decompress(compressed)
        const string = decodeUint8Array(uint8Array)
        const object = parse(string)

        return object
    } catch {
        return undefined
    }
}
