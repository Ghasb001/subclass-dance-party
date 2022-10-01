
var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  this.$node.append($("<img class ='dancer' src='img/IMG_8722.PNG' >")).addClass('blinky');
};



BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function () {

  //call the original step() from Dancer
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();

  this.$node.on('click', function (event) {
    $('.dancer.bouncy').remove();

  });

};

