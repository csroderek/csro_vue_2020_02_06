export default {
  translate_weather(weather) {
    var name = "晴";
    var mdi = "mdi-weather-sunny";
    var color = "yellow";
    if (weather == "clear-night") {
      name = "夜间晴朗";
      mdi = "mdi-weather-night";
      color = "blue";
    } else if (weather == "cloudy") {
      name = "多云";
      mdi = "mdi-weather-cloudy";
      color = "yellow";
    } else if (weather == "exceptional") {
      name = "特殊";
      mdi = "mdi-alert-decagram-outline";
      color = "grey";
    } else if (weather == "fog") {
      name = "雾";
      mdi = "mdi-weather-fog";
      color = "grey";
    } else if (weather == "hail") {
      name = "冰雹";
      mdi = "mdi-weather-hail";
      color = "yellow";
    } else if (weather == "lightning") {
      name = "雷电";
      mdi = "mdi-weather-lightning";
      color = "grey";
    } else if (weather == "lightning-rainy") {
      name = "雷阵雨";
      mdi = "mdi-weather-lightning-rainy";
      color = "yellow";
    } else if (weather == "partlycloudy") {
      name = "多云";
      mdi = "mdi-weather-partly-cloudy";
      color = "yellow";
    } else if (weather == "pouring") {
      name = "暴雨";
      mdi = "mdi-weather-pouring";
      color = "yellow";
    } else if (weather == "rainy") {
      name = "雨";
      mdi = "mdi-weather-rainy";
      color = "yellow";
    } else if (weather == "snowy") {
      name = "雪";
      mdi = "mdi-clear-night";
      color = "yellow";
    } else if (weather == "snowy-rainy") {
      name = "雨夹雪";
      mdi = "mdi-weather-snowy-rainy";
      color = "yellow";
    } else if (weather == "sunny") {
      name = "晴";
      mdi = "mdi-weather-sunny";
      color = "yellow";
    } else if (weather == "windy") {
      name = "有风";
      mdi = "mdi-weather-windy";
      color = "yellow";
    } else if (weather == "windy-variant") {
      name = "有风";
      mdi = "mdi-weather-windy-variant";
      color = "yellow";
    }
    return {
      name: name,
      icon: {
        mdi: mdi,
        color: color
      }
    };
  }
};
