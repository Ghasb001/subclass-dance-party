var GrowDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('grow');
  this.$node.append($("<img class = 'grow' src = 'img/IMG_8726.PNG' >"));

};

GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;

GrowDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.animate({ height: 75, width: 75 }, 1000);
  // this.$node.animate({ height: 1, width: 1 }, 1000);

};