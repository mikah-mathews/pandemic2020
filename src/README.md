# _Pandemic_

#### _A 2020 simulator_

#### By _**Jason Macie & Mikah Mathews**_

## Description

_The year is 2020. A virus has started to sweep the globe and it is your job to stop it. Using quarantine, scientists, and _

## Specs
Have Virus timer
-------
As timer goes down, virus count goes up
As virus count goes up, so do deaths
Deaths are calculated as a percentage of infected number
Fatality of virus is randomly picked at start of game by generator

List of cities
----------
* Seattle
* Philadelphia
* Bangkok
* Wuhan City
* Rome
* Venice
* Paris

Ways to fight virus
------
Quarantine (able to select city to quarantine)
> Stops city from being infected or from spreading to other cities
Treat Disease (able to select city to treat)
> Removes one virus block from city
Vaccine (one way to end game)
> Have to level it up to win amount

Loss Conditions
------
> Timer runs out (everyone is infected)
> All cities are infected
> Death toll reaches certain amount (extra feature)

Win Conditions
------
> 4/7 cities are cured
> Vaccine is finished


How to play game
------
Start game button is pressed
3 cities are infected
Each infected city has 2 disease blocks??
Disease blocks can be treated and then are subtracted from city disease count
Per turn player is able to make 2 moves
> move 1 - quarantine city
> move 2 - treat city

select a city (treated like a radio button [able to only select one but able to change selection before submiting])
select action (treated like a submit button(calls function and updates data))

City
disease-block = 0-3
*player clicks treat disease*
disease-block = disease-block - 1

## Minimum Viable Product
* There is a timer counting down
* Infection cubes spread to new cities
* If quarantine is used, city cannot be infected or stops infecting other cities
* If treat disease is used, infection cubes in selected city go down by one
* If vaccine treatment is selected, vaccine count goes up by one
* If vaccine is finished before loss conditions: player wins (corresponding message pops up)
* If infection timer finishes: the game ends in a loss.


## Setup/Installation Requirements

* Clone this repository.
* Navigate to the root directory.
* Make sure you have npm installed. Then run npm install. And npm run build.

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Technologies Used

* JavaScript
* NPM
* Jest

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **_{Jason Macie & Mikah Mathews}_**
