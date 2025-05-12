const URL = "https://681f1721c1c291fa6635eff8.mockapi.io/practice";

const getData = async () => {
    let res = await fetch(URL);
    console.log(res);
    let data = await res.json();
    console.log(data[1].name)
}
getData()