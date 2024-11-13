const fiftyToHundred = (value: number) => {
    const r = 256 - (((256 - 8) / 50) * value);
    const g = 188 - (((188 - 172) / 50) * value);
    const b = 4 + (((108 - 4) / 50) * value);
    return { r, g, b };
}

const zeroToFifty = (value: number) => {
    const r = 256;
    const g = (((188 - 92) / 50) * value) + 92;
    const b = 100 - (((100 - 4) / 50) * value);
    return { r, g, b };
}

// { r: number, g: number, b: number }
export const getDarkmodeColor = (percent: number):string => {
    if(percent < 0 || percent > 100){
        // throw new Error("Invalid percent value");
        percent = 0;
    }
    if(percent >= 50){
        var color   = fiftyToHundred(percent - 50);
    }else{
        color = zeroToFifty(percent);
        
    }
    const { r, g, b } = color;
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

export const getDarkmodeColorMatte = (percent: number):string => {
    if(percent < 0 || percent > 100){
        // throw new Error("Invalid percent value");
        percent = 0;
    }
    if(percent >= 50){
        var color   = fiftyToHundred(percent - 50);
    }else{
        color = zeroToFifty(percent);
        
    }
    let { r, g, b } = color;
    const op = 10;
    return `rgba(${Math.min(256, r + op)}, ${Math.min(256, g + op)}, ${Math.min(256, b + op)}, 0.75)`;
}

// rgb(256,92,100) red
//rgb(256,188,4) yellow
// rgb(8,172,108) green
