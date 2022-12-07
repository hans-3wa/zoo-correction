export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const generateRandom = (max, excepted) => {
    const number = Math.floor(Math.random() * max)
    return (number === excepted) ? generateRandom(max, excepted) : number;
}