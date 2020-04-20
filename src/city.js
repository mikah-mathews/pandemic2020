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
    for(i = 0; i < array.length; i++){
      //if diseaseBlock >= 2 {increment i+1}
      if 
    }
  };
}