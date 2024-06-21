import { writeData, pathExist, readData } from "./firebase-scripts.js";

const btnWrite = document.getElementById("btnWrite");
btnWrite.addEventListener("click", btn_write);

const path = document.getElementById("path");
path.addEventListener("click", btn_pathExist);

const read = document.getElementById("read");
read.addEventListener("click", btn_read);


function btn_write() {
    console.log("btn pressed");
    writeData("data/uid01", {"name":"anik", "coin": 123}, ()=>{
        console.log("data write done");
    }, (err)=>{
        console.log(err);
    })
}

function btn_pathExist() {
    pathExist("data/uid01/", (res)=>{
        console.log("path exist: " + res);
    })
}

function btn_read() {
    readData("data/uid01/name", (res)=>{
        console.log("read data result: " + res);
    })
}
