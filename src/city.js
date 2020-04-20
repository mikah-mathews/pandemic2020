export class City{
  constructor(name, diseaseBlock){
    name = this.name;
    diseaseBlock = this.diseaseBlock;
    quarantine = false;
  }
  vaccineCounter (){
    let vaccine = 0;
    vaccine++;
    if (vaccine === 5){
      return "Congratulation! You've discovered the cure. You win!"
    } else return ("Your current vaccine total is: " + vaccine);    
  }
}