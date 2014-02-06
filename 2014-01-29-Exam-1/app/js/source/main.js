(function(){

  'use strict';

  $(document).ready(initialize);


  function initialize(){
    $('#go').click(go);
  }

  
  function go(){
    window.setTimeout(go, 1000);
    var preamble = new Array(' We ', ' people ', ' United ', ' States ', ' in ', ' order ', ' to ', ' form ', ' a ', ' more ', ' perfect ', ' union ', ' establish ', ' justice ', ' insure ', ' domestic ', ' tranquility ', ' provide ', ' common ', ' defense ', ' promote ', ' general ', ' welfare ', ' secure ', ' blessings ', ' liberty ', ' to ', ' ourselves ', ' our ', ' posterity ', ' do ', ' ordain ', ' and ', ' establish ',' is ', ' Constitution ', ' for ', ' the ', ' United ', ' States ', ' of ', ' America ');
    var rn = preamble[Math.floor(Math.random() * preamble.length)];
    $('#odd').css( 'background-color', 'green');
    $('#even').css( 'background-color', 'blue');
    $('#odd').append(rn);
    $('#even').append(rn);
  }

})();

