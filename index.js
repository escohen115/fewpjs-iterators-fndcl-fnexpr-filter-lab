// Code your solution here








function findMatching (driversArray, driverName){
    return driversArray.filter(name => name.toLowerCase() === driverName.toLowerCase())
     
}

function fuzzyMatch(source, testString) {
  return source.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}

function matchName (driversArray, driverName){
    return driversArray.filter(driver => driver.name === driverName)
}