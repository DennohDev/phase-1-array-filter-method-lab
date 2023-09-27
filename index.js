// Code your solution here
function findMatching(names, nameToFind) {
    const matchingNames = names.filter( (name) => {
      const lowercaseName = name.toLowerCase();
      const lowercaseNameToFind = nameToFind.toLowerCase();
      return lowercaseName.includes(lowercaseNameToFind);
    });
  
    return matchingNames;
  }


function fuzzyMatch (names, lettersToMatch){
    const matchingNames = names.filter((name)=>{
        return name.slice(0,2) == lettersToMatch
    })
    return matchingNames;
}

function matchName(drivers, name) {
    const matchingNames = drivers.filter((driver)=>{
        return driver.name == name
    })
    return matchingNames;
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  

console.log(matchName(drivers,Bobby))