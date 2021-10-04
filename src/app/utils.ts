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

export function calculateRGBColorDistance(colorA: RGB, colorB: RGB) : number {
    // https://en.wikipedia.org/wiki/Color_difference Euclidean

    if (!colorA || !colorB) {
        throw new Error('null');
    }
    let rDelta = colorB.R - colorA.R;
    let gDelta = colorB.G - colorA.G;
    let bDelta = colorB.B - colorA.B;
    let squaredDeltaSums = Math.pow(rDelta, 2) + Math.pow(gDelta, 2) + Math.pow(bDelta, 2);
    return Math.sqrt(squaredDeltaSums);
}