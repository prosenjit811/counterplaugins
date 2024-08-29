
function handleTickInit(tick) {
  var nextYear = (new Date()).getFullYear() + 1;
  
  Tick.count.down(nextYear + '-01-01').onupdate = function(value,) {
    tick.value = value;
  };
};
AOS.init({
  duration: 1200,
})
/*============jQ=========*/ 
$(document).ready(function(){
	// counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

  // countdown
var countdown = $("#rounddown").countdown360({

    radius      : 90,

    seconds     : 200,

    fontColor   :'#FFFFFF',

    autostart   :false,

    onComplete  :function () { console.log('done') }

});
  countdown.start();

  // mixitup

var mixer = mixitup('#mixbtn');
  
  // seamless content




});
    
