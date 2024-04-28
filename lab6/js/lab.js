/*
Lab ^ JavaScript program
Angie and Artem 
*/

//Declare variables
let myTransport = ['car', 'bike', 'bus', 'train',];

let myMainRide = {
    make: 'Toyota',
    model: 'Prius',
    year: '2010',
    color: 'blue'
};

//Output arrays and objects using document.writeln()
document.writeln("Getting around:" + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
