import {City} from '../src/city'

describe('', () => {
  jest.useFakeTimers();
  //let seattle, philadelphia, bangkok, wuhan, rome, venice, paris, virusTimer;
  let cityConstruct
  let testCities
  beforeEach(() => {
    cityConstruct = new City;
    testCities = cityConstruct.createCities();
    
    // virusTimer = 
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('Seattle infection should be 3, Philadelphia infection should be 2, Bangkok infection should be 1, and Wuhan City, Rome, Venice, and Paris infection rates should be 0', () => {
    expect(testCities[0]).toEqual(["Seattle", 3, false, false]);
    expect(testCities[1]).toEqual(["Philadelphia", 2, false, false]);
    expect(testCities[2]).toEqual(["Bangkok", 1, false, false]);
    expect(testCities[3]).toEqual(["Wuhan", 0, false, false]);
    expect(testCities[4]).toEqual(["Rome", 0, false, false]);
    expect(testCities[5]).toEqual(["Venice", 0, false, false]);
    expect(testCities[6]).toEqual(["Paris", 0, false, false]);
 }); 

  test('virus value increases Philadelphia, Bangkok, and Wuhan', () => {
    cityConstruct.increaseInfection(testCities);
    jest.advanceTimersByTime(1001)
    expect(testCities[0]).toEqual(["Seattle", 3, false, false]);
    expect(testCities[1]).toEqual(["Philadelphia", 3, false, false]);
    expect(testCities[2]).toEqual(["Bangkok", 2, false, false]);
    expect(testCities[3]).toEqual(["Wuhan", 1, false, false]);
    expect(testCities[4]).toEqual(["Rome", 0, false, false]);
    expect(testCities[5]).toEqual(["Venice", 0, false, false]);
    expect(testCities[6]).toEqual(["Paris", 0, false, false]);
  });

  test('virus value increases after 3 seconds time duration', () => {
    cityConstruct.increaseInfection(testCities);
    jest.advanceTimersByTime(2001)
    expect(testCities[0]).toEqual(["Seattle", 3, false, false]);
    expect(testCities[1]).toEqual(["Philadelphia", 3, false, false]);
    expect(testCities[2]).toEqual(["Bangkok", 3, false, false]);
    expect(testCities[3]).toEqual(["Wuhan", 2, false, false]);
    expect(testCities[4]).toEqual(["Rome", 1, false, false]);
    expect(testCities[5]).toEqual(["Venice", 0, false, false]);
    expect(testCities[6]).toEqual(["Paris", 0, false, false]);
  });

  test('virus value decreases after treatment', () => {   
    cityConstruct.increaseInfection(testCities);
    testCities[4][3] = true;
    cityConstruct.treatment(testCities);
    jest.advanceTimersByTime(2001);
    expect(testCities[0]).toEqual(["Seattle", 3, false, false]);
    expect(testCities[1]).toEqual(["Philadelphia", 3, false, false]);
    expect(testCities[2]).toEqual(["Bangkok", 3, false, false]);
    expect(testCities[3]).toEqual(["Wuhan", 2, false, false]);
    expect(testCities[4]).toEqual(["Rome", 0, false, true]);
    expect(testCities[5]).toEqual(["Venice", 0, false, false]);
    expect(testCities[6]).toEqual(["Paris", 0, false, false]);
  });

 test('if city is placed under quarantine, it is not infected', () => {
    testCities[1][2] = true;
    cityConstruct.increaseInfection(testCities);
    jest.advanceTimersByTime(2001);
    expect(testCities[0]).toEqual(["Seattle", 3, false, false]);
    expect(testCities[1]).toEqual(["Philadelphia", 2, true, false]);
    expect(testCities[2]).toEqual(["Bangkok", 3, false, false]);
    expect(testCities[3]).toEqual(["Wuhan", 2, false, false]);
    expect(testCities[4]).toEqual(["Rome", 1, false, false]);
    expect(testCities[5]).toEqual(["Venice", 0, false, false]);
    expect(testCities[6]).toEqual(["Paris", 0, false, false]);
 });

 test('vaccine has increased value when vaccine research is run', () => {
    let vaccineCount = 0;
    let vaccine = cityConstruct.vaccineCounter(vaccineCount);
    expect(vaccine).toEqual(1);
 });

 test('when vaccine reaches 5, win function is run', () => {
  let vaccineCount = 4;
  let vaccine = cityConstruct.vaccineCounter(vaccineCount);
  expect(vaccine).toEqual("Congratulation! You've discovered the cure. You win!");
 });

 test('when timer hits 0, lose function is run', () => {
  let endgame = cityConstruct.endgame();
  jest.advanceTimersByTime(120001);
  expect(endgame).toEqual("Timer has ended. Everyone is infected. You lose!");
 });

 
});
