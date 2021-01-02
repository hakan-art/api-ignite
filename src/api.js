// Base URL

const base_url = "https://api.rawg.io/api/";

//Getting the Date

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1

    if (month < 10) {
        return ` 0${month}`
    } else {
        return month
    }

};

const getCurrentDay = () => {
    const day = new Date().getDate()


    if (day < 10) {
        return ` 0${day}`
    } else {
        return day
    }

};



// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDateSplit = `${currentYear}-${currentMonth}-${currentDay}`
const lastYearSplit = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYearSplit = `${currentYear + 1}-${currentMonth}-${currentDay}`
const lastYear = lastYearSplit.split(" ").join("");
const currentDate = currentDateSplit.split(" ").join("");
const nextYear = nextYearSplit.split(" ").join("");


console.log(lastYear)





// Popular Games

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&oedering=-addes&page_site=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;

//Game Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`;
//Searched Game
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=10`;