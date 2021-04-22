/*
Problem Statement:
Write a program to, fetch data from the above URL and write all data into a single file 
(append mode, use URL as a separator while appending data into a single file)
*/





const fs = require('fs')
const fetch = require("node-fetch");

var url = [ "https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD",
            "https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD",
            "https://api.github.com/users/kshitiz-singhal/repos",
            "https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history",
        ]




url.forEach(urlFetch)

function urlFetch(item,i,url){
    
    fetch( url[i] )
    .then((response) => response.json())
    .then((data) => {
        
       var content = JSON.stringify(data);
        var writeHead = (String(url[i])+"\n"+content+"\n")
        //var writeHead = (String(url[i]) + "\n");


        fs.appendFile("data.txt", writeHead, err => {
     
            // Checking for errors
            if (err) throw err; 
           
            console.log("Done writing");
             // Success
        });
    })
    .catch((err) => console.log(err));

  } 

