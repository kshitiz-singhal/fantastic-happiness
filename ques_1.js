/*
Problem Statement: 
Write a program in node js, as per above diagram, if Promise A resolve then only B & C will be
called and once (B+C) resolve, then D -> E if any error occurred in E then again D will be called
till E is resolved.

*/

let promiseA = new Promise((resolve, reject) => {   //Promise A
    setTimeout(resolve, 500, 'promiseA Resolved')
});

let promiseB = new Promise((resolve, reject) => {  //Promise B
    setTimeout(resolve, 500, 'promiseB Resolved')
});

let promiseC = new Promise((resolve, reject) => {   //Promise C
    setTimeout(resolve, 500, 'promiseC Resolved')
});

let promiseD = new Promise((resolve, reject) => {  //Promise D
    setTimeout(resolve, 500, 'promiseD Resolved')
});

let promiseE = new Promise((resolve, reject) => {   //Promise E
    setTimeout(resolve, 500, 'promiseE Resolved')
    setTimeout(reject, 500, 'promiseE Rejected')
});


promiseA.then(promiseAMsg =>{
    console.log(promiseAMsg);                                           //resolving Promise A
    return Promise.all([promiseB,promiseC]).then(promiseBCMsg => {      //since Promise A resolved all handling BnC promise
        console.log(promiseBCMsg)                                       //BC promise resolved
        
        let resolvepromiseD = () =>{                                    //handling D promise within function for recalling at catch handling promise E
            return promiseD.then(promiseDMsg => {
                console.log(promiseDMsg);
            })
        }
        
        resolvepromiseD().then(x =>{                
            return promiseE                                            //resolving promise E
        })
        .then(y =>{
            console.log(y);                                             //Promise E resolved
        })
        promiseE.catch(err => {                                         //Catching Promise E
            console.log(err);
            resolvepromiseD();
        })
    })
})
