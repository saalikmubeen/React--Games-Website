
const base_url = 'https://api.rawg.io/api/';


const presentDate = new Date();

const currentYear = presentDate.getFullYear();
const currentMonth = presentDate.getMonth() + 1
const currentDay = presentDate.getDate();

const getCurrentDate = (y: number, m: number, d: number) : string => {
    const year = y.toString();
    let month: string;
    let day: string;

    if (m < 10) {
        month = `0${m}`;
    } else {
        month = `${m}`
    }

    if (d < 10) {
        day = `0${d}`
    } else {
        day = `${d}`
    }

    return `${year}-${month}-${day}`
}

const currentDate = getCurrentDate(currentYear, currentMonth, currentDay);
const previousYear = getCurrentDate(currentYear - 1, currentMonth, currentDay);
const nextYear = getCurrentDate(currentYear + 1, currentMonth, currentDay);


export const getPopularGamesURL = () => `${base_url}games?dates=${previousYear},${currentDate}&ordering=-rating&page_size=10`;
export const getUpcomingGamesURL = () => `${base_url}games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const getNewGamesURL = () => `${base_url}games?dates=${previousYear},${currentDate}&ordering=-released&page_size=10`;


