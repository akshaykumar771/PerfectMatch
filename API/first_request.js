//const request = require("request");
const rp = require("request-promise")
//request("https://jsonplaceholder.typicode.com/users/1", (error, response, body)=>{
rp("https://jsonplaceholder.typicode.com/users/1")
.then((htmlstring)=>{
   console.log(htmlstring); 
})
.catch((err)=>{
    console.log("Error", err);
    
});
    // if(!error && response.statusCode == 200){
    //     const parsedData = JSON.parse(body);
    //     console.log(`${parsedData.name} lives in ${parsedData.address.city}`);// Show the HTML for Google homepage
    // } 
//});