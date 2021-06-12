// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedMph = 175000
let distanceMarsKm = 225000000
let distanceMoonKm = 384400
let milesPerKm = .621

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceMarsKm)
console.log(typeof distanceMoonKm)
console.log(typeof milesPerKm)

// Code your solution to exercises 3 and 4 here:

// a.
let milesToMars = distanceMarsKm * milesPerKm

// b. 
let hoursToMars = milesToMars / shuttleSpeedMph

// c. 
let daysToMars = hoursToMars / 24

console.log(shuttleName + " will take " + daysToMars + " days to reach Mar.")

// Code your solution to exercise 5 here:

let milesToMoon = distanceMoonKm * milesPerKm
let hoursToMoon = milesToMoon / shuttleSpeedMph
let daysToMoon = hoursToMoon / 24

console.log("Miles to Moon: " + milesToMoon + " miles")
console.log("Hours to Moon: " + hoursToMoon + " hours")
console.log("Days to Moon: " + daysToMoon + " days")
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")