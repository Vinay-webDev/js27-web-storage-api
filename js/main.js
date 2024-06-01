// web storage API 
// web storage API is not a part of virtual DOM
// refers to window API
// available to javascript via global variable = window;
// we don't have to type window it is implied:

const myObject = {
    name: "jack",
    logName: function() {
        console.log(this.name);
    }
}

const myArray = ["eat", "code", "sleep"];
// sessionStorage ==>> setItem(key: string, value: string) requires a name for the storage or to store something in it 
window.sessionStorage.setItem("mySessionStorage", myObject);
const mySessionData = sessionStorage.getItem("mySessionStorage");
console.log(mySessionData);

window.sessionStorage.setItem("mySessionStorage2", myArray);
const mySessionData2 = sessionStorage.getItem("mySessionStorage2");
console.log(mySessionData2);














