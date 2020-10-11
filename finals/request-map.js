const request = require('request');
const rl = require('readline');
let a,b,c;
const read = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});
const cool = (d)=>{
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${d}.json?access_token=pk.eyJ1IjoiamlnbWVlIiwiYSI6ImNrZzNnYmU0NTBhaTgyc3A2bHp5b2s4ZzMifQ.N6cdtrf0YgANyvUUsZMVyw`, (err,res,body)=>{
        if(JSON.parse(body).features.length != 0 ){
        a = JSON.parse(body).features[0].geometry.coordinates[1];
        b = JSON.parse(body).features[0].geometry.coordinates[0];
        request(`https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${a},${b}?units=auto`, (err, res, body)=>{
            return console.log(JSON.parse(body).currently.temperature);
        })
        }
        else{
            console.log("Wrong address");
        }
    })
}
read.question('Address:', (name)=>{
    c=name;
    cool(name);
    read.close();
})  