import {City} from '../src/city'

describe('', () => {
  //let seattle, philadelphia, bangkok, wuhan, rome, venice, paris, virusTimer;
  beforeEach(() => {
    let cityConstruct = new City;
    let testCities = cityConstruct.createCities();
    // virusTimer = 
  });

  test('Seattle infection should be 3, Philadelphia infection should be 2, Bangkok infection should be 1, and Wuhan City, Rome, Venice, and Paris infection rates should be 0', () => {
    let cityConstruct = new City;
    let testCities = cityConstruct.createCities();
    expect(testCities[0]).toEqual(["Seattle", 3, false]);
    expect(testCities[1]).toEqual(["Philadelphia", 2, false]);
    expect(testCities[2]).toEqual(["Bangkok", 1, false]);
    expect(testCities[3]).toEqual(["Wuhan", 0, false]);
    expect(testCities[4]).toEqual(["Rome", 0, false]);
    expect(testCities[5]).toEqual(["Venice", 0, false]);
    expect(testCities[6]).toEqual(["Paris", 0, false]);
 }); 

  test('virus value increases after x time duration', () => {
    let cityConstruct = new City;
    let testCities = cityConstruct.createCities();
    
  });

//  test('new city is infected when prev. city reaches infection level 2', () => {

//  });

//  test('virus value decreases after treatment', () => {

//  });

//  test('if city is placed under quarantine, it is not infected', () => {

//  });

//  test('vaccine has a value of 0 at start', () => {

//  });

//  test('vaccine has increased value when vaccine research is run', () => {

//  });

//  test('when vaccine reaches 5, win function is run', () => {

//  });

//  test('when timer hits 0, lose function is run', () => {

//  });

 
});
