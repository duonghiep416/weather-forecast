const $ = document.querySelector.bind(document);
const searchBtn = document.querySelector(".search-btn");
const container = document.querySelector(".container");
const notFound = document.querySelector(".not-found");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const apiKey = "a88b2ac75c093534b557335875694103";

searchBtn.addEventListener("click", () => {
    const location = document.querySelector(".location").value;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    )
        .then((res) => res.json())
        .then((data) => {
            if (data.cod === "404") {
                container.style.height = "590px";
                weatherBox.style.display = "none";
                weatherDetails.style.display = "none";
                notFound.style.display = "block";
                notFound.classList.add("fade-in");
            } else {
                notFound.style.display = "none";
                notFound.classList.remove("fade-in");
                container.style.height = "590px";
                weatherBox.classList.add("fade-in");
                weatherDetails.classList.add("fade-in");
                weatherBox.style.display = "block";
                weatherDetails.style.display = "flex";

                const weatherStatus = document.querySelector(
                    ".weather-status__img"
                );
                const temp = document.querySelector(".temperature");
                const desc = document.querySelector(".description");
                const humidityPercent =
                    document.querySelector(".humidity-percent");
                const windSpeed = document.querySelector(".wind-speed");

                temp.innerHTML = `${parseInt(data.main.temp)} <span>°C</span>`;
                desc.innerHTML = data.weather[0].description;
                humidityPercent.innerHTML = `${data.main.humidity}%`;
                windSpeed.innerHTML = `${data.wind.speed} m/s`;

                switch (data.weather[0].main) {
                    case "Clear":
                        weatherStatus.src = "./images/clear.png";
                        break;
                    case "Clouds":
                        weatherStatus.src = "./images/cloud.png";

                        break;
                    case "Rain":
                        weatherStatus.src = "./images/rain.png";
                        break;
                    case "Snow":
                        weatherStatus.src = "./images/snow.png";
                        break;
                    case "Haze":
                        weatherStatus.src = "./images/mist.png";
                        break;
                    default:
                        image.src = "";
                }
            }
        });
});
