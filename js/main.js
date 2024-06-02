// web storage API 
// web storage API is not a part of virtual DOM
// refers to window API
// available to javascript via global variable = window;
// we don't have to type window it is implied:
/*
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
console.log(mySessionData2);*/
/*
const myArray = ["eat", "code", "sleep"];
const myObject = {
    name: "jack bulwark",
    hobbies: ["eat", "fight", "sleep"],
    logName: function () {
        console.log(this.name);
    }
}

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const sessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(sessionData); */
/*
const myArray1 = ["eat", "fight", "sleep"];

sessionStorage.setItem("mySessionStore1", myArray1);
const sessionData1 = sessionStorage.getItem("mySessionStore1");
console.log(sessionData1);
/////////////////////////////////////////////////
const myArray = ["eat", "fight", "sleep"];

sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const sessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(sessionData); */
/////////////////////////////////////////////////////////////////////
const myArray = ["eat", "code", "sleep"];
const myObject = {
    name: "jack",
    hobbies: ["eat", "code", "sleep"],
    logName: function () {
        console.log(this.name);
    }
}
// localStorage = is a persistant storage means whenever we close the web app the data is still available when we open the web app again
// sessionStorage = is a temporary storage which will be gone if close out the web app 
localStorage.setItem("myLocalStore", JSON.stringify(myObject));

const localData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(localData);
console.log( typeof localData);





