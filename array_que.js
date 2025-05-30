let city = ["Surat", "Ahmedabad", "Kolkata", "Delhi"]

for(let cities of city){
    console.log(cities.toUpperCase())
}

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    console.log("Button Is Clicked")
})