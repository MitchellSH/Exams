/* jshint unused:false */

var Food = (function(){

  'use strict';

  function Food(name){
    this.name = name;
    this._calories = 100;
  }

  Object.defineProperty(Food.prototype, 'caloriesPerServing', {
    get: function(){return this._calories;}
  });

  return Food;
})();
