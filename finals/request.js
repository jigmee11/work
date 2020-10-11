const request = require('request');
const { setTimeout } = require('timers');
const a = () =>{
     request("https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/47.9188,106.9176?units=auto", (err, res, body)=>{
        // res=JSON.parse(res);
        // console.log(res.body.currently);
        console.log(JSON.parse(body).currently.temperature);
    })
    return b();
}
const b = ()=>{
    setTimeout(()=>{
        a();
    },1000)
}
b();