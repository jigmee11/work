const fs = require('fs');
// fs.writeFile("/Users/Tserenjigmed/desktop/september/text.txt", `${b}`, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });
// writefile ni ter bagaa textiig ustgaad shuud odoo baiga utgaa oruuldag
//appendFile ni odoo baigaag nemdeg
fs.appendFile("/Users/Tserenjigmed/desktop/september/text.txt", b, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

