var BouncyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {

  // Dancer.prototype.step.call(this, this.top, this.left);
  //setTimeout(this.$node.css({ color: 'blue' }).bind(this), 10);

  Dancer.prototype.step.call(this);

  // this.$node.animate({'top': '-= this.top*Math.cos(this.left/30000)', 'left': '+=10px',},'slow')

  // if(this.top < $(window).height()) {this.$node.animate({ 'top': '-= 10px', 'left': '+=10px'}, 'slow');}
  // this.$node.effect("bounce", { times: 3 }, "slow");
  this.$node.effect("bounce",{ times: 3 }, "slow");



};
