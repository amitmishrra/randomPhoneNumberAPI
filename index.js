const express = require("express");
let data = require("./data.json");
const app = express();
const cron = require("node-cron");
const PORT = process.env.PORT || 5000;


app.listen(PORT, (req, res) => {
    console.log("server is running")
})

app.get("/", (req, res) => {
    res.send("getting numbers")
})

const change = ()=>{
    let newArray = [];
    for (let i = 0; i < data.length; i++) {
        newArray.push({
            "country" : `${data[i].country.slice(0, data[i].country.indexOf('(')-1)}`,
            "code" : `${data[i].country.slice(data[i].country.indexOf('(') + 1, data[i].country.indexOf(')'))}`,
            "number" : `${data[i].number.replace("****", Math.floor(1000 + Math.random() * 9000))}`
        })
    }
    return newArray
}

app.get("/randomNumbers", (req, res) => {
    res.send(change())
})

console.log(
    
)


