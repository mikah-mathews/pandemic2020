# _Pandemic_

#### _A 2020 simulator_

#### By _**Jason Macie & Mikah Mathews - 4/20/2020**_

## Description

_The year is 2020. A virus has started to sweep the globe and it is your job to stop it. Using quarantine, vaccine scientists, and universal healthcare to treat infected people, you are able to strategize and save the planet._

## Specs

* There is a timer counting down\
  Input: Start Button\
  Output: Timer starts counting down\
* If infection timer finishes: the game ends in a loss.\
  Input: Timer = 00:00\
  Output: The virus has felled society. Play again?\
* New city is infected when previous city reaches 2 infection\
  Input: city1Infection = 2\
          city2Infection = 0\
  Output: city1Infection = 3\
          city2Infection = 1\
* If quarantine is used, city cannot be infected or stops infecting other cities\
  Input: Quarantine(City) Button Clicked\
  Output: City: Quarantine = True\
* If treat disease is used, infection cubes in selected city go down by one\
  Input: Treat(City) Clicked\
  Output: cityInfection = cityInfection - 1\
* If vaccine research is selected, vaccine count goes up by one\
  Input: Vaccine Research Button Clicked\
  Output: vaccineRearch = vaccineResearch + 1\
* Vaccine is completed when it reaches level 5\
  Input: vaccineResearch = 5\
  Output: You win! Play again?\

List of cities
------
* Seattle (Starting infection city) (disease block: 3)
* Philadelphia (Starting infection city) (disease block: 2)
* Bangkok (Starting infection city) (disease block: 1)
* Wuhan City (disease block: 0)
* Rome (disease block: 0)
* Venice (disease block: 0)
* Paris (disease block: 0)

Ways to fight virus
------
>* Quarantine (able to select city to quarantine)\
>> * Stops city from being infected or from spreading to other cities\  
>* Treat Disease (able to select city to treat)\
>> Removes one virus block from city\  
>* Vaccine (one way to end game)\
>> Have to level it up to win amount \ 

Loss Conditions
------
> * Timer runs out (everyone is infected)\  
> * All cities are infected\  
> * Death toll reaches certain amount (extra feature)\  

Win Condition
------
> Vaccine is finished\  

How to play game
------
Start game button is pressed
3 cities are infected
Each infected city has 2 disease blocks??
Disease blocks can be treated and then are subtracted from city disease count
* option one - quarantine city\  
* option two - treat city\ 
* option three - vaccine research\  
Each button/action has a disabled time
After click, button is disabled for varied time

## Extras
* Randomize starting cities
* Randomize infected cities
* Have to test cities to find out infection rate
* Add fatality rate
* Randomize virus fatality
* Add loss if fatalities reach certain number
* Difficulty level (rate at which disease spreads or fatality level)

## Setup/Installation Requirements

* Clone this repository.
* Navigate to the root directory.
* Make sure you have npm installed. Then run npm install. And npm run build.

## Known Bugs

_There are no known bugs_

## Technologies Used

* JavaScript
* NPM
* Jest

### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_{Jason Macie & Mikah Mathews}_**
