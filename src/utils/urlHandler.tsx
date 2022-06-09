const popular = (currentYear: string) => (
  `https://api.rawg.io/api/games?page_size=24&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-added&key=888f6e198d894fcdac3d561150fc3732`
);
const highestRated = (currentYear: string) => (
  `https://api.rawg.io/api/games?page_size=24&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-rating&key=888f6e198d894fcdac3d561150fc3732`
);

const lastReleased = (currentYear: string, currentMonth: string) => (
  `https://api.rawg.io/api/games?page_size=24&dates=${currentYear}-${currentMonth}-01,${currentYear}-${currentMonth}-30&key=888f6e198d894fcdac3d561150fc3732`
);

const upcoming = (currentYear: string, currentMonth: string, nextMonth: string, today: string) => (
  `https://api.rawg.io/api/games?page_size=24&dates=${currentYear}-${currentMonth}-${today},${currentYear}-${nextMonth}-${today}&ordering=-added&key=888f6e198d894fcdac3d561150fc3732`
);

const search = (searchTerm: string | HTMLInputElement) => {
  const formattedSearchTerm = (searchTerm as string).split(' ').join('-').toLowerCase();
  return `https://rawg.io/api/games?search=${formattedSearchTerm}&ordering=-added&key=888f6e198d894fcdac3d561150fc3732`;
};

function urlHandler(url: string | HTMLInputElement) {
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

  const returnedURL = RETURN_URL[url as keyof typeof RETURN_URL];

  if (!returnedURL) return search(url);

  return returnedURL;
}

export default urlHandler;
