const cool = require("cool-ascii-faces");
cool();

const express = require("express"); 

var app = express();

app.get("\cool",(request,response) => {
	response.send("<html>"+cool()+"</html>");
});

app.listen(80);



function main(){
	console.log("Hello goorm!");
}

main();
console.log(cool());
console.log("server ready");