// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  //return lowercase drivers
  return drivers.map(lowerCaseName)
}
  
 function lowerCaseName(name) {
    return name.toLowerCase()
}

function nameToAttributes(drivers){
//return array of object, each object is a driver with a first and last name
 return drivers.map(giveAndTake)
}

function giveAndTake(fullname) {
  const splitNames = fullname.split(' ');
  const driversName = {firstName: splitNames[0], lastName: splitNames[1]};
  return driversName
}

//still working on this function(stuck lol)
function attributesToPhrase (drivers) {
  return
}


