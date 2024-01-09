import React, { useState } from "react";
import search from "../assets/search-line.svg";
import img1 from "../assets/1a.png";
import img2 from "../assets/1b.png";
import img3 from "../assets/2a.png";
import img4 from "../assets/2b.png";
import img5 from "../assets/3.png";
import img6 from "../assets/4.png";
import img7 from "../assets/5.png";
import img8 from "../assets/6.png";
import img9 from "../assets/7.png";
import img10 from "../assets/8.png";
import img11 from "../assets/9.png";

const Home = () => {
  const [city, setCity] = useState("");
  const [cityEmpty, setCityEmpty] = useState(false);
  const [data, setData] = useState(null);
  const [loader2, setLoader2] = useState(false);

  const getWeather = async () => {
    setLoader2(true);
    const key = import.meta.env.VITE_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    setLoader2(false);
  };

  const handleClick = () => {
    if (!city) {
      setCityEmpty(true);
    } else {
      setCityEmpty(false);

      getWeather();
    }

    setCity("");
  };
  return (
    <>
      <h1 className="display-3 text-center py-5">Simple Weather App</h1>

      <div className="input col-10 mx-auto d-flex gap-2 align-items-center justify-content-center ">
        <input
          className="fs-5 px-3 py-1 border-0 border-bottom"
          type="text"
          autoComplete="off"
          name="cityName"
          placeholder="city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <img
          className="search"
          src={search}
          alt="search-icon"
          height={30}
          onClick={handleClick}
        />
      </div>

      {cityEmpty && (
        <p className="fs-5 text-center text-danger pt-3">Enter City Name</p>
      )}

      {loader2 && (
        <>
          <div className="loaderContainer">
            <div className="loader2"></div>
          </div>
        </>
      )}

      {data != undefined && (
        <div className="d-flex flex-column  align-items-center justify-content-center my-5">
          <p className="fs-1">{data.name}</p>
          <div className="d-flex flex-column gap-2">
            {data.weather[0].icon == "01d" ? (
              <img src={img1} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "01n" ? (
              <img src={img2} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "02a" ? (
              <img src={img3} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "02n" ? (
              <img src={img4} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "03d" ||
              data.weather[0].icon == "03n" ? (
              <img src={img5} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "04d" ||
              data.weather[0].icon == "04n" ? (
              <img src={img6} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "09d" ||
              data.weather[0].icon == "09n" ? (
              <img src={img7} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "10d" ||
              data.weather[0].icon == "10n" ? (
              <img src={img8} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "11d" ||
              data.weather[0].icon == "11n" ? (
              <img src={img9} alt="weather-icon" height={150} />
            ) : data.weather[0].icon == "13d" ||
              data.weather[0].icon == "13n" ? (
              <img src={img10} alt="weather-icon" height={150} />
            ) : (
              <img src={img11} alt="weather-icon" height={150} />
            )}
            <p className="fs-1 text-center">
              {data.main.temp} <span className="ps-1">&#8451;</span>
            </p>
            <p className="fs-4 pt-1 text-capitalize text-center">
              {data.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
