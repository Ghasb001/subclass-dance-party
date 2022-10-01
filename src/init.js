$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // need to add "new" !!!
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    // add generated dancer ti dancers array
    //window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });



  $('.lineUp').on('click', function (event) {
    // find how to reference the positions of each dancer
    //  then, make each dancer's top position match

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.animate({ top: 200 });
    }
  });

  /*
   var closest = window.dancer[0]
     for (var i = 0; i < window.dancers.length; i++) {
       var pythag = Math.sqrt(Math.abs(window.dancers[i].top - closest.top) - Math.abs(window.dancers[i].left - closest.left));
       if (pythag !== 0 && pythag < 500) {
         closest.css({border:yellow})
       }
     }



    // $(".blinky").mouseenter(function () {
    //   $(this).find('blinky').hide();
    // })
    //   .mouseleave(function () {
    //     $(this).find('blinky').show();
    //   })

  var distanceElements = function (elementOne, elementTwo) {
  var distance = -1;

  var x1 = elementOne.offset().top;
  var y1 = elementOne.offset().left;
  var x2 = elementTwo.offset().top;
  var y2 = elementTwo.offset().left;
  var xDistance = x1 - x2;
  var yDistance = y1 - y2;

  distance = Math.sqrt(
    (xDistance * xDistance) + (yDistance * yDistance)
  );

  return distance;
  }

  */

});


