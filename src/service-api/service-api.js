class ServiceApi {

    getWeatherData = async (city) =>{
       try{
           const url =
               `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=1eda4925bba4dba27573fa566872cb30`;
           const response = await fetch(url)

           if (!response.ok) {
               throw new Error(`No connection: Status response ${response.status}`)
           }
           return await response.json()
       } catch (e) {
           console.log(e)
       }

    }

    getWeatherForCity = async (city) =>{
    const result = await this.getWeatherData(city)
        console.log(result)
        return this._transformWeatherData(result)
    }

    _transformWeatherData = (result) => {
        const secondDayIndex = result.list.findIndex(({dt})=> dt===result.list[0].dt+86400)
        const thirdDayIndex = result.list.findIndex(({dt})=> dt===result.list[0].dt+(86400*2))
        const fourthDayIndex = result.list.findIndex(({dt})=> dt===result.list[0].dt+(86400*3))
        const dayOfTheWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

        return {
            city: result.city.name,
            country: result.city.country,
            latitude: result.city.coord.lat,
            longitude: result.city.coord.lon,
            toDay:{
                date: new Date((result.list[0].dt-10800)*1000),
                day: dayOfTheWeek[new Date((result.list[0].dt-10800)*1000).getDay()],
                temperature: result.list[0].main.temp,
                weather: result.list[0].weather[0].description,
                feelLike: result.list[0].main.feels_like,
                wind: result.list[0].wind.speed,
                humidity: result.list[0].main.humidity
            },
            secondDay:{
                date: new Date((result.list[secondDayIndex].dt-10800)*1000),
                day: dayOfTheWeek[new Date((result.list[secondDayIndex].dt-10800)*1000).getDay()],
                temperature: result.list[secondDayIndex].main.temp,
                weather: result.list[secondDayIndex].weather[0].description,
            },
            thirdDay:{
                date: new Date((result.list[thirdDayIndex].dt-10800)*1000),
                day: dayOfTheWeek[new Date((result.list[thirdDayIndex].dt-10800)*1000).getDay()],
                temperature: result.list[thirdDayIndex].main.temp,
                weather: result.list[thirdDayIndex].weather[0].description,
            },
            fourthDay:{
                date: new Date((result.list[fourthDayIndex].dt-10800)*1000),
                day: dayOfTheWeek[new Date((result.list[fourthDayIndex].dt-10800)*1000).getDay()],
                temperature: result.list[fourthDayIndex].main.temp,
                weather: result.list[fourthDayIndex].weather[0].description,
            }

        }
    }

}

export default ServiceApi
