const popular = (currentYear) => (
  `https://api.rawg.io/api/games?
    page_size=50&dates=${currentYear}-01-01,${currentYear}-12-31&
    ordering=-added&key=888f6e198d894fcdac3d561150fc3732`
);
const highestRated = (currentYear) => (
  `https://api.rawg.io/api/games?
    page_size=50dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-rating
    &key=888f6e198d894fcdac3d561150fc3732`
);

const lastReleased = (currentYear) => (
  `https://api.rawg.io/api/games?
    page_size=50&dates=2018-01-01,2018-12-31&ordering=-added
    &key=888f6e198d894fcdac3d561150fc3732`
);

const upcoming = (currentYear) => (
  `https://api.rawg.io/api/games?
    page_size=50dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-added
    &key=888f6e198d894fcdac3d561150fc3732`
);

function urlHandler(url) {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  // takes a parameter based on some state
  const RETURN_URL = {
    popular: popular(currentYear),
    highestrated: highestRated(currentYear),
    recentlyreleased: lastReleased(currentYear),
    upcoming: upcoming(currentYear),
  };
  return RETURN_URL[url];
}

export default urlHandler;
