import { RGB } from './interfaces/RGB';

export function RGBFromString(stringValue: string) : RGB {
    const empty = { R: 0, G: 0, B: 0 };
    if (!stringValue || stringValue === '')
    {
        return empty;
    }
    const startIndex = 4; // "rgb(" start after (
    const lengthOffset = 1; // skip closing )
    let length = stringValue.length - lengthOffset;

    let stringValues = stringValue.substring(startIndex, length).split(',');
    if (stringValues.length != 3) {
        return empty;
    }
    const rIndex = 0, gIndex = 1, bIndex = 2;
    return { R: +stringValues[rIndex], G: +stringValues[gIndex], B: +stringValues[bIndex] };
}