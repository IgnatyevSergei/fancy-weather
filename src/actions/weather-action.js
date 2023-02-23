export const SET_WEATHER = "SET_WEATHER";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_IS_HAS_ERROR = "SET_IS_HAS_ERROR";

export const setWeatherAC = (weather) => ({ type: SET_WEATHER, payload: weather });
export const setIsLoadingAC = (setIsLoadingAC) => ({
  type: SET_IS_LOADING,
  payload: setIsLoadingAC,
});
export const setIsHasErrorAC = (err) => ({ type: SET_IS_HAS_ERROR, payload: err });

const transformWeatherData = (result) => {
  const secondDayIndex = result.list.findIndex(
    ({ dt }) => dt === result.list[0].dt + 86400
  );
  const thirdDayIndex = result.list.findIndex(
    ({ dt }) => dt === result.list[0].dt + 86400 * 2
  );
  const fourthDayIndex = result.list.findIndex(
    ({ dt }) => dt === result.list[0].dt + 86400 * 3
  );
  const dayOfTheWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return {
    city: result.city.name,
    country: result.city.country,
    latitude: result.city.coord.lat,
    longitude: result.city.coord.lon,
    toDay: {
      date: new Date((result.list[0].dt - 10800) * 1000),
      day: dayOfTheWeek[new Date((result.list[0].dt - 10800) * 1000).getDay()],
      temperature: Math.round(result.list[0].main.temp),
      weather: result.list[0].weather[0].description,
      feelLike: Math.round(result.list[0].main.feels_like) ,
      wind: result.list[0].wind.speed,
      humidity: result.list[0].main.humidity,
      icon: result.list[0].weather[0].icon
    },
    threeDays: [
      {
        date: new Date((result.list[secondDayIndex].dt - 10800) * 1000),
        day: dayOfTheWeek[
          new Date((result.list[secondDayIndex].dt - 10800) * 1000).getDay()
        ],
        temperature: Math.round(result.list[secondDayIndex].main.temp),
        weather: result.list[secondDayIndex].weather[0].description,
        icon:result.list[secondDayIndex].weather[0].icon
      },
      {
        date: new Date((result.list[thirdDayIndex].dt - 10800) * 1000),
        day: dayOfTheWeek[
          new Date((result.list[thirdDayIndex].dt - 10800) * 1000).getDay()
        ],
        temperature: Math.round(result.list[thirdDayIndex].main.temp),
        weather: result.list[thirdDayIndex].weather[0].description,
        icon:result.list[thirdDayIndex].weather[0].icon
      },
      {
        date: new Date((result.list[fourthDayIndex].dt - 10800) * 1000),
        day: dayOfTheWeek[
          new Date((result.list[fourthDayIndex].dt - 10800) * 1000).getDay()
        ],
        temperature: Math.round(result.list[fourthDayIndex].main.temp),
        weather: result.list[fourthDayIndex].weather[0].description,
        icon:result.list[fourthDayIndex].weather[0].icon
      },
    ],
  };
};

export const getWeatherForCity = (city, lang, degrees) => (dispatch) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=${degrees}&appid=1eda4925bba4dba27573fa566872cb30`;
  dispatch(setIsLoadingAC(true));
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const res = transformWeatherData(result);
      dispatch(setWeatherAC(res));
      dispatch(setIsLoadingAC(false));
    })
    .catch((err) => {
      dispatch(setIsHasErrorAC(err));
      dispatch(setIsLoadingAC(false));
    });
};

export const getCoordinate = (lang, degrees, dispatch) => {
  fetch("https://ipinfo.io/json?token=ba66afe740e93d").then(
      (response) => response.json()
  ).then(
      (jsonResponse) => dispatch(getWeatherForCity(jsonResponse.city, lang, degrees))
  ).catch((err)=> {
    dispatch(setIsHasErrorAC(err))
  })
}
