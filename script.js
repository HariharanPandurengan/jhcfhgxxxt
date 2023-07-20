// console.log("hi");

const array = ["hari","abhi","naveen","jithan","nithesh"];
// array.map((list)=>{
//     console.log(list)
// })

array.filter((item)=>{
  console.log(item.includes("a"))
 })
//  .map((item)=>{
//     console.log(item)
// })

// console.log(filter)


function display(){
    if(document.getElementById("p").style.display == "none"){
        document.getElementById("p").style.display = "block";
    }
    else{
        document.getElementById("p").style.display = "none";
    }
    
}

fetch("http://localhost:8070/api/employee")
.then((res)=>res.json())
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})