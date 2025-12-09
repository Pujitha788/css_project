async function getdata(){
    try{
        let res = await fetch("https://fakestoreapi.com/products");
        if(!res.ok){
            throw new Error("somethhing wrong")
        }
        let data = await res.json()
        console.log(data)
        fetchData(data)
    }
    catch(Error){
        console.log(Error.message)
    }
}
function fetchData(data){
    let div=document.getElementById("main")
    data.forEach(obj=>{
        let child = document.createElement("div")
        child.innerHTML=`
        <img src=${obj.image}>
        <h3>${obj.title}</h3>
        <p>Category : ${obj.category}</p>
        <p>Price : ${obj.price}</p>
        <p>Rating : ${obj.rating.rate}</p>
        `
        div.appendChild(child)
    })
}
getdata()