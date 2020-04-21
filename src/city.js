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
      quarantine: false,
      treat: false
     };
    let philadelphia = {
      name: "Philadelphia",
      diseaseBlock: 2,
      quarantine: false,
      treat: false
    };
    let bangkok = {
      name: "Bangkok",
      diseaseBlock: 1,
      quarantine: false,
      treat: false
    };
    let wuhan = {
      name: "Wuhan",
      diseaseBlock: 0,
      quarantine: false,
      treat: false
    };
    let rome = {
      name: "Rome",
      diseaseBlock: 0,
      quarantine: false,
      treat: false
    };
    let venice = {
      name: "Venice",
      diseaseBlock: 0,
      quarantine: false,
      treat: false
    };
    let paris = {
      name: "Paris",
      diseaseBlock: 0,
      quarantine: false,
      treat: false
    };
    let cityArray = [Object.values(seattle), Object.values(philadelphia), Object.values(bangkok), Object.values(wuhan), Object.values(rome), Object.values(venice), Object.values(paris)];
    return cityArray;
  };

  vaccineCounter(vaccine) {
    vaccine++;
    if (vaccine === 5){
      return "Congratulation! You've discovered the cure. You win!";
    } else {
      return vaccine
    };
  };

  increaseInfection(array){
    setInterval(() => {
    let returnArray = [];
    for(let i = 0; i < array.length; i++){
      let keyPairs = Object.entries(array[i]);
      let infection = Object.entries(array[i]).map(([key, value]) => [key, value + 1]);
      if((keyPairs[2][0] ===  '2' && keyPairs[2][1] === true) || (keyPairs[1][0] === '1' && keyPairs[1][1] === 3)) { // if ((keyPairs[2][0] === '2' && keyPairs[2][1] === true) || keyPairs[1][0] )
        returnArray.push(array[i]);
      } else if((keyPairs[1][1] === 2) || (keyPairs[1][1] ===  1)) {
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
    return returnArray;
    }, 1000);
  };

  treatment(cityArray){ // target specific city somehow 
    setTimeout(() => {   
      for(let i = 0; i < cityArray.length; i++) {
        let keyPairs = Object.entries(cityArray[i]);
        let treat = Object.entries(cityArray[i]).map(([key, value]) => [key, value - 1]);
        if (keyPairs[3][1] === true) {
          cityArray[i][1] = treat[1][1];
          return cityArray;
        } else {
        }
      }
    }, 2000);
  }

  timer(start){ // use to display countdown on page??
    console.log("timer has started")
    let display = 0;
    setInterval(() => {
      if(start === true) {
        for(let i = 0; i <= 120; i++) {
          display = i;
        }
      } else { };
    }, 1000);
  }

  endgame(){
    console.log("Start of endgame");
    let endMessage = "Timer has ended. Everyone is infected. You lose!";
    setTimeout(() => {
      console.log("Timer has ended");
      return endMessage;
    }, 120000);
  } 
};
 



async function endgameMessage() {
  
}