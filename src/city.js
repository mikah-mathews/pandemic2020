export class City{
  constructor(name, diseaseBlock) {
    this.name = name;
    this.diseaseBlock = diseaseBlock;
    this.quarantine = false;
  }
  createCities(){
    let seattle = {
      name: "Seattle",
      diseaseBlock: 3,
      quarantine: false
     };
    let philadelphia = {
      name: "Philadelphia",
      diseaseBlock: 2,
      quarantine: false
    };
    let bangkok = {
      name: "Bangkok",
      diseaseBlock: 1,
      quarantine: false
    };
    let wuhan = {
      name: "Wuhan",
      diseaseBlock: 0,
      quarantine: false
    };
    let rome = {
      name: "Rome",
      diseaseBlock: 0,
      quarantine: false
    };
    let venice = {
      name: "Venice",
      diseaseBlock: 0,
      quarantine: false
    };
    let paris = {
      name: "Paris",
      diseaseBlock: 0,
      quarantine: false
    };
    let cityArray = [Object.values(seattle), Object.values(philadelphia), Object.values(bangkok), Object.values(wuhan), Object.values(rome), Object.values(venice), Object.values(paris)];
    console.log(cityArray);
    return cityArray;
  };
  vaccineCounter () {
    let vaccine = 0;
    vaccine++;
    if (vaccine === 5){
      return "Congratulation! You've discovered the cure. You win!";
    } else return ("Your current vaccine total is: " + vaccine);
  };

  increaseInfection(array){
    for(let i = 0; i < array.length; i++){
      let returnArray = [];
      let city = array[i];
      let keyPairs = Object.entries(city);
      let previousCity = Object.entries()
      // let diseaseBlockValue = Object.values(city);
      console.log(diseaseBlockValue);
      if(keyPairs["2" === true] || keyPairs["1" === 3]) {
        returnArray.push(city);              
      } else if(keyPairs["1" === 2] || keyPairs["1" === 1]) {
        city[1] = diseaseBlockValue++;
        returnArray.push(city);
      } else if(keyPairs["1" === 0]) {
        let previousCity = Object.entries(returnArray[i-1]);
        if(previousCity["1" === 2] && previousCity ["2" === false]) {
          city[1] = diseaseBlockValue++;
          returnArray.push(city);
        }
      } else {
        returnArray.push(city);
      };
      //if quarantine === true .push returnArray
      // if diseaseBlock = 3 - no change
      // if diseaseBlock = 2 - increase by one to make it 3
      // if diseaseBlock = 1 - increase by one
      // if diseaseBlock = 0 - check previous city somehow??

      let infection = Object.fromEntries(
        Object.entries(city).map(([key, value]) => [key, value + 1])
      );
      infection.diseaseBlock
    }
  };
}

// Something like this for returning entry
// Object.entries(prices).map(([key, value]) => [key, value * 2]) 