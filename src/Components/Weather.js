import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: "38.9, -77" },
      headers: {
        "X-RapidAPI-Key": "af44821071mshdf210640051eb33p19ee85jsn455a82df0526",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((theseHands) => console.log(theseHands));
  }, []);

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          <td>{weather?.current?.condition?.text}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather?.current?.temp_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather?.current?.feelsLike_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather?.current?.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>
            {weather?.current?.wind_mph} mph{" "}
            {weather?.current?.wind_dir}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
