import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getIcon, getC } from "./utilities/helper";
import ajax from "./utilities/ajax";
import {cities} from './constants/cities'

function App() {
  const [city, setCity] = useState(cities[0])
  const [current, setCurrent] = useState({});
  const [fiveDays, setFiveDays] = useState({});

  useEffect(() => {
    fetchData(city)
  }, [city])

  // post city name to backend to get weather information
  const fetchData = city => {
    ajax({
      method: "get",
      url: `http://127.0.0.1:8000/api/current_weather?country=au&city=${city}`
    })
      .then(res => res.data)
      .then(res => {
        setCurrent(res);
      });

    ajax({
      method: "get",
      url: `http://127.0.0.1:8000/api/weather?country=au&city=${city}`
    })
      .then(res => res.data)
      .then(res => {
        setFiveDays(res);
      });
  };

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
        <select
          onChange={(e) => setCity(e.target.value)}
          className="ring-8 ring-white ring-opacity-40 p-10 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md max-w-screen-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {cities.map(city => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
        <div className="w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-6xl font-bold">
                {getC(current?.temp)}°C
              </span>
              <span className="font-semibold mt-1 text-gray-500">
                {current?.name},{current?.country}
              </span>
            </div>
            <img
              className="h-24 w-24 fill-current text-yellow-400"
              alt={current?.description}
              src={getIcon(current?.icon)}
            />
          </div>
          <div className="flex justify-between mt-12">
            {fiveDays.list &&
              fiveDays?.list[0]?.map((dayInfo, index) => {
                return (
                  <div className="flex flex-col items-center" key={index}>
                    <span className="font-semibold text-lg">
                      {getC(dayInfo.temp)}°C
                    </span>
                    <img
                      className="h-10 w-10 fill-current text-gray-400 mt-3"
                      alt={dayInfo?.description}
                      src={getIcon(dayInfo?.icon)}
                    />
                    <span className="font-semibold mt-1 text-sm">
                      {dayjs(dayInfo.dt_txt).format("HH:mm")}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
          {fiveDays.list &&
            fiveDays.list.map(([currentDay = {}], index) => {
              if (index === 0) {
                return false;
              }
              return (
                <div className="flex justify-between items-center" key={index}>
                  <span className="font-semibold text-lg w-1/4">
                    {dayjs(currentDay.dt_txt).format("ddd, MMM D")}
                  </span>
                  <div className="flex items-center justify-end w-1/4 pr-10">
                    <span className="font-semibold">
                      {currentDay?.humidity}%
                    </span>
                    <svg
                      className="w-6 h-6 fill-current ml-1"
                      viewBox="0 0 16 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="matrix(1,0,0,1,-4,-2)">
                        <path
                          d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z"
                          style={{ fillRule: "nonzero" }}
                        />
                      </g>
                    </svg>
                  </div>
                  <img
                    className="h-8 w-8 fill-current w16"
                    alt={currentDay?.description}
                    src={getIcon(currentDay?.icon)}
                  />
                  <span className="font-semibold text-lg w-1/4 text-right">
                    {getC(fiveDays.min_max[index].min)}°C /{" "}
                    {getC(fiveDays.min_max[index].max)}°C
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
