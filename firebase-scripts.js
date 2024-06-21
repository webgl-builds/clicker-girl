import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue, off } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDPatfpuBO7r2YSeQU41ruGVtLn1JjXjKA",
    authDomain: "fir-auth-51b42.firebaseapp.com",
    databaseURL: "https://fir-auth-51b42-default-rtdb.firebaseio.com",
    projectId: "fir-auth-51b42",
    storageBucket: "fir-auth-51b42.appspot.com",
    messagingSenderId: "143911147129",
    appId: "1:143911147129:web:c9547277598559ad65e6a8"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// write data
export function writeData(path, data, callback, fallback) {
    set(ref(db, path), data)
        .then(()=>{
            callback();
        })
        .catch((err)=>{
            fallback(err);
        })
}

// path exist
export function pathExist(path, callback, fallback) {
    get(child(ref(db), path))
        .then((snapshot)=>{
            callback(snapshot.exists());
        })
        .catch((err)=>{
            fallback(err);
        })
}

// read data
export function readData(path, callback, fallback) {
    get(child(ref(db), path))
        .then((snapshot)=>{
            if (snapshot.exists()) {
                callback(snapshot.val());
            } else {
                fallback("Path does not exist");
            }
        })
        .catch((err)=>{
            fallback(err);
        })
}

/* // add listener
export function addListner(path, callback) {
    onValue(ref(db, path), (snapshot)=>{
        callback(snapshot.val());
    })
}

// remove listener not working
export function removeListner(path, callback) {
    off(ref(db, path), "value", callback);
} */