
const startDate = new Date(2022, 1 - 1, 17).getTime();

export default function week(): number {
    const currentDate = Date.now();
    const difference = currentDate - startDate;
    const weeks = difference / (1000 * 3600 * 24 * 7);
    return 1 + Math.max(0, Math.floor(weeks));
}
