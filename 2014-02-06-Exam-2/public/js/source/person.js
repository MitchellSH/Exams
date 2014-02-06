/* jshint unused:false */

var Person = (function(){

  'use strict';

  function Person(name, gender, age, weight){
    this.name = name;
    this._gender = gender;
    this._age = age;
    this._weight = weight;
    this._foods = [];
  }

  Object.defineProperty(Person.prototype, 'foods', {
    get: function(){return this._foods;}
  });
  
  Object.defineProperty(Person.prototype, 'gender', {
    get: function(){return this._gender;}
  });
  
  Object.defineProperty(Person.prototype, 'age', {
    get: function(){return this._age;}
  });

  Object.defineProperty(Person.prototype, 'weight', {
    get: function(){return this._weight;}
  });

  Person.prototype.eat = function(input){
    this._foods = this._foods.concat(input);
  };



  return Person;
})();
