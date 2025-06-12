// const cn="rakesh";
// console.log(cn);


//defining a promisified function
function setTImeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}
// function callback(){
//     console.log("this will print after duration");
// }

// //calling a promisied function
// setTImeoutPromisified(1000).then(callback);


//this looks ugly syntax

//call back hell 
// setTimeout(function(){
//     console.log("1 sec");
//     setTimeout(function(){
//         console.log("after 3 sec");
//         setTimeout(function(){
//             console.log("after 5 sec");
//         },5000);
//     },3000);
// },1000);
// console.log("after everything");


//special type of promises and callbacks but still uglt
// setTImeoutPromisified(1000).then(function(){
//     console.log("1 sec");
//     setTImeoutPromisified(3000).then(function(){
//         console.log("3 sec");
//         setTImeoutPromisified(5000).then(function(){
//             console.log("5 sec");
//         });

//     });
// });

//promise chaining 

// setTImeoutPromisified(1000).then(function(){
//     console.log("after 1");
//     return setTImeoutPromisified(3000);
// }).then(function(){
//         console.log("after 3");
//         return setTImeoutPromisified(5000);
//     }).then(function(){
//         console.log("after 5");
//     });

//syntactical sugar
// async function solve(){
//     await setTImeoutPromisified(1000);
//     console.log("after 1");
//     await setTImeoutPromisified(3000);
//     console.log("after 3");
//     await setTImeoutPromisified(5000);
//     console.log("after 5");

// }

// solve();

// console.log("after solve");


const { isUtf8 } = require("buffer");
const fs = require("fs");

function readfileAsyn(){
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf8",function(err,data){
            resolve(data);
        })
    })
}
readfileAsyn().then(function(x){
    console.log(x);
}).catch(function(e){
    console.log(e);
})