const key = "00c6cccdf21220d91f2568a81e29690e";
const input = document.getElementById("input");
let motherBox = document.getElementById("mother-box");
let forecast = document.querySelectorAll(".weathertext");
let img = document.querySelectorAll(".icon");
let counter = 0


input.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        motherBox.style.visibility = "visible";
        getWeather();
    }
});


async function getWeather() {
    let city = input.value;
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&mode=json&APPID=${key}`;
    let response = await axios.get(api);

    for (let i = 0; i < 40; i += 8) {
        let icon = response.data.list[i].weather[0].icon;
        let temp = Math.floor(response.data.list[i].main.temp);
        let hi = Math.floor(response.data.list[i].main.temp_max);
        let lo = Math.floor(response.data.list[i].main.temp_min);
        
        // same as    forecast[i].innerHTML = temp + '<br>' + hi + '<br>' + lo + '<br>';
        forecast[counter].innerHTML = `${temp}<br> HI: ${hi}<br> LO: ${lo}`;

        let iconsUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        img[counter].src = iconsUrl;

        forecast[counter].appendChild(img[counter]);
        console.log(img[counter].src);
        // counter += 8;
        // console.log(img[i].src)
        counter++
    }
}