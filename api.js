const URL = "https://681f1721c1c291fa6635eff8.mockapi.io/practice";
const para = document.getElementById("para");
const btn = document.querySelector("button");

const getData = async () => {
    console.log("Fetching data...");
    let res = await fetch(URL);
    console.log(res);
    let data = await res.json();
    para.innerHTML = data[1].name;
}

btn.addEventListener("click", getData);