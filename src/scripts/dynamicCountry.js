

// export default function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
// }


// swapping country names

const countries = [
    "Czech Republic",
    "Ireland",
    "Slovak Republic",
    "Bulgaria",
    "Denmark",
    "Austria",
    "Estonia",
    "South Africa",
    "Finland",
    "Australia",
    "France",
    "Chile",
    "Hungary",
    "Canada",
    "Italy",
    "Switzerland",
    "Lithuania",
    "Germany",
    "Costa Rica",
    "Korea",
    "Argentina",
    "Latvia",
    "Poland",
    "United States",
    "Luxembourg",
    "Greece",
    "Mexico",
    "Romania",
    "Iceland",
    "Brazil",
    "Netherlands",
    "Croatia",
    "Israel",
    "Spain",
    "Portugal",
    "Russia",
    "Slovenia",
    "Japan",
    "Belgium",
    "Sweden",
    "Türkiye",
    "United Kingdom",
    "Colombia",
    "Peru",
]

let i = 0;
let text = "United States";
export function _getChangedText() {
    i = (i + 1) % countries.length;
    return text.replace(/United States/, countries[i]);
}
export function _changeText() {
    let txt = _getChangedText();
    document.querySelector("#corgi").innerHTML = txt;
}
