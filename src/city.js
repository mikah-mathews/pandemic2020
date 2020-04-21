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
    let returnArray = [];
    for(let i = 0; i < array.length; i++){
      let keyPairs = Object.entries(array[i]);
      let infection = Object.entries(array[i]).map(([key, value]) => [key, value + 1]);
      console.log(infection);
      if((keyPairs[2][0] ===  '2' && keyPairs[2][1] === true) || (keyPairs[1][0] === '1' && keyPairs[1][1] === 3)) { // if ((keyPairs[2][0] === '2' && keyPairs[2][1] === true) || keyPairs[1][0] )
        console.log( array[i] + " inside first if");
        returnArray.push(array[i]);
      } else if((keyPairs[1][1] === 2) || (keyPairs[1][1] ===  1)) {
          console.log(array[i] + " Inside second if");
          console.log(infection[1]); // set number to value
          array[i][1] = infection[1][1]
          returnArray.push(array[i]);
      } else if(keyPairs[1][0] === '1' && keyPairs[1][1] === 0) {
          let previousCity = Object.entries(array[i-1]);
          if((previousCity[1][0] === '1' && previousCity[1][1] === 2) && (previousCity[2][0] === '2' && previousCity[2][1] === false)) {
            array[i][1] = infection[1][1]
            returnArray.push(array[i]);            
          } else {
            returnArray.push(array[i]);
          }
      }   
    }
    console.log(returnArray);
    return returnArray;
  };
}


// Something like this for returning entry
// Object.entries(prices).map(([key, value]) => [key, value * 2]) 