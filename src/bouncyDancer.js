var BouncyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node.addClass('bouncy');

  this.$node.append($("<img class='dancer' src = 'img/IMG_8724.PNG' >")).addClass('bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  var newTop = ($('body').height() - 50) * Math.random();
  var newLeft = ($('body').width() - 50) * Math.random();

  // this.$node
  //   // .animate(
  //   //   {
  //   //     top: newTop,
  //   //     left: newLeft
  //   //   },
  //   //   { duration: 2000 }
  //   // )
  //   .effect("bounce");

};
