const popular = (currentYear) => (
  `https://api.rawg.io/api/games?page_size=24&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-added&key=888f6e198d894fcdac3d561150fc3732`
);
const highestRated = (currentYear) => (
  `https://api.rawg.io/api/games?page_size=24&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-rating&key=888f6e198d894fcdac3d561150fc3732`
);

const lastReleased = (currentYear, currentMonth) => (
  `https://api.rawg.io/api/games?page_size=24&dates=${currentYear}-${currentMonth}-01,${currentYear}-${currentMonth}-30&key=888f6e198d894fcdac3d561150fc3732`
);

const upcoming = (currentYear, currentMonth, nextMonth, today) => (
  `https://api.rawg.io/api/games?page_size=24&dates=${currentYear}-${currentMonth}-${today},${currentYear}-${nextMonth}-${today}&ordering=-added&key=888f6e198d894fcdac3d561150fc3732`
);

const search = (searchTerm) => {
  console.log(searchTerm);
  const formattedSearchTerm = searchTerm.split(' ').join('-').toLowerCase();
  return `https://rawg.io/api/games?search=${formattedSearchTerm}&ordering=-added&key=888f6e198d894fcdac3d561150fc3732`;
};

function urlHandler(url) {
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
  const nextMonth = (new Date().getMonth() + 2).toString().padStart(2, '0');
  const today = (new Date().getDate()).toString().padStart(2, '0');

  const RETURN_URL = {
    popular: popular(currentYear),
    highestrated: highestRated(currentYear),
    recentlyreleased: lastReleased(currentYear, currentMonth),
    upcoming: upcoming(currentYear, currentMonth, nextMonth, today),
  };
  console.log(search(url));
  if (!RETURN_URL[url]) return search(url);

  return RETURN_URL[url];
}

export default urlHandler;
