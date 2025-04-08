import React from 'react';

const WeatherCard = ({ data }) => {
  const {
    name,
    main: { temp, humidity },
    weather,
    wind: { speed },
  } = data;

  const icon = weather[0].icon;
  const description = weather[0].description;

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <p className="text-2xl font-bold">{temp}°C</p>
      <p className="capitalize">{description}</p>
      <div className="mt-2">
        <p>Humidity: {humidity}%</p>
        <p>Wind: {speed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
