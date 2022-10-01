var Dancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
  this.step();

};


Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this),
    this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  console.log('dancer',top, left);
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
