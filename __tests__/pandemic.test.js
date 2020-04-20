import {City} from '../src/city'

describe('', () => {
  let seattle, philadelphia, bangkok, wuhan, rome, venice, paris;
  beforeEach(() => {
    seattle = new City("Seattle", 3);
    philadelphia = new City("Philadelphia", 2);
    bangkok = new City("Bangkok", 1);
    wuhan = new City("Wuhan", 0);
    rome = new City("Rome", 0);
    venice = new City("Venice", 0);
    paris = new City("Paris", 0);
    cityArray = [seattle, philadelphia, bangkok, wuhan, rome, venice, paris]
  });
  test('should ...', () => {});


  test('Seattle infection should be 3, Philadelphia infection should be 2, Bangkok infection should be 1, and Wuhan City, Rome, Venice, and Paris infection rates should be 0', () => {
    expect(cityArray[0]).toEqual("Seattle", 3);
    expect(cityArray[1]).toEqual("Philadelphia", 2);
    expect(cityArray[2]).toEqual("Bangkok", 1);
    expect(cityArray[3]).toEqual("Wuhan", 0);
    expect(cityArray[4]).toEqual("Rome", 0);
    expect(cityArray[5]).toEqual("Venice", 0);
    expect(cityArray[6]).toEqual("Paris", 0);
 }); 

 test('new city is infected when prev. city reaches infection level 2', () => {

 });

 test('virus value increases after x time duration', () => {

 });

 test('virus value decreases after treatment', () => {

 });

 test('if city is placed under quarantine, it is not infected', () => {

 });

 test('vaccine has a value of 0 at start', () => {

 });

 test('vaccine has increased value when vaccine research is run', () => {

 });

 test('when vaccine reaches 5, win function is run', () => {

 });

 test('when timer hits 0, lose function is run', () => {

 });

 
});
