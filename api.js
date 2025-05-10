fetch("https://jsonplaceholder.typicode.com/users",{
    method: "GET"
})
.then((res)=> {
    return res.json()
})
.then((data)=>{
    console.log(data)
    for (let user of data) {
        console.log(user.username)
    }
})