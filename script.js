const table = document.getElementById("table");
let row;
let userNunber;
let multiplyer;
let result;

document.getElementById("button").addEventListener("click", () => {
    table.innerHTML = "";
    let number = document.getElementsByTagName("input")[0].value;
    for(let i = 0; i < 11; i++){
        row = document.createElement("tr")
        userNunber = document.createElement("td")
        multiplyer = document.createElement("td")
        result = document.createElement("td")
    
        userNunber.innerHTML = number;
        multiplyer.innerHTML = i;
        result.innerHTML = number * i;
        
        row.appendChild(userNunber);
        row.appendChild(multiplyer);
        row.appendChild(result);
        table.appendChild(row)
    }
});





