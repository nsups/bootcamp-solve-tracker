export function getColor(percent: number) {
    percent = Math.min(100, Math.max(0, percent));
    var red = percent < 50 ? 255 : Math.round(255 - (percent - 50) * 5.1);
    var green = percent > 50 ? 255 : Math.round((percent * 5.1));
    var color = 'rgb(' + red + ',' + green + ', 0)';
    return color;
}

export function getColorMatte(percent: number) {
    percent = Math.min(100, Math.max(0, percent));
    var red = percent < 50 ? 255 : Math.round(255 - (percent - 50) * 5.1);
    var green = percent > 50 ? 255 : Math.round((percent * 5.1));
    var color = 'rgba(' + red + ',' + green + ',0, 0.3)';
    return color;
}