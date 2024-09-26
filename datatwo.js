const miles = 1500; // total distance
const fiftyfive = 30; // at 55mph = 30 miles
const sixty = 28; // at 60mph = 28 miles
const seventyfive = 23; // at 75mph = 23 miles
const budget = 175; // with a total budget 
const fuel = 3; // at 3 dollars per gallon

console.log(`How many gallons of fuel will you need for the entire trip?`)
let fivegallons = miles / fiftyfive; // 50 gallons
let sixgallons = miles / sixty; // 54 gallons
let sevengallons = miles / seventyfive; // 65 gallons
console.log(`At 55mph, I will need ${fivegallons.toFixed(0)} gallons of fuel for the entire trip.`);
console.log(`At 60mph, I will need ${sixgallons.toFixed(0)} gallons of fuel for the entire trip.`);
console.log(`At 75mph, I will need ${sevengallons.toFixed(0)} gallons of fuel for the entire trip.`);

console.log(`Will your budget be enough to cover the fuel expense?`)
let totalcost = fivegallons * fuel; // Yes, I will have enough.
let totalcosttwo = sixgallons * fuel; // Yes, I will have enough.
let totalcostthree = sevengallons * fuel; // No, I will not have enough.
console.log(`Yes, driving 55mph, I will need ${totalcost.toFixed(0)} dollars for my trip.`);
console.log(`Yes, driving 60mph, I will need ${totalcosttwo.toFixed(0)} dollars for my trip.`);
console.log(`No, driving 75mph, I will need ${totalcostthree.toFixed(0)} dollars for my trip.`);

console.log(`How long will the trip take in hours?`)
let totaltime = miles / 55; // 27 hours
let totaltimetwo = miles / 60; // 25 hours
let totaltimethree = miles / 75; // 20 hours
console.log(`It will take me ${totaltime.toFixed(0)} hours, driving at 55mph to complete my trip.`);
console.log(`It will take me ${totaltimetwo.toFixed(0)} hours, driving at 60mph to complete my trip.`);
console.log(`It will take me ${totaltimethree.toFixed(0)} hours, driving at 75mph to complete my trip.`);

console.log(`It makes more sense to drive ${totaltime.toFixed(0)} hours with ${fivegallons} gallons of fuel only spending ${totalcost} dollars.`);