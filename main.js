// fetch('test.txt').then(function(response) {
//     return response.text();
// }).then(function(data) {
//     console.log(data);
// })

// import fs from 'filesaver';
var file = new File(["70000"], "text.txt", { type: "text/plain;charset=utf-8" });

import fs from '/filesaver/src/Filesaver';