(function() {
  // Initialize variables
  var gameOptions = {
    width: 700,
    height: 400,
    numOfEnemies: 10,
    enemyRadius: 20
  };

  // Create the board as an svg element and append to DOM
  d3.select('div.container').append('svg:svg').attr('width', gameOptions.width).attr('height', gameOptions.height);

  // Create enemies and append to DOM
  var createEnemies = function() {
    var svg = d3.select('svg');
    for(var i = 0; i < gameOptions.numOfEnemies; i++) {
      svg.append('circle')
        .attr('r', gameOptions.enemyRadius)
        .attr('cx', function() {
          return Math.random() * gameOptions.width;
        })
        .attr('cy', function() {
          return Math.random() * gameOptions.height;
        });
    }
  };

  // Create player and append to DOM

  // Make the enemies move randomly
  var generateEnemyPositions = function() {

  };

  var moveEnemies = function() {
    var enemies = d3.selectAll('circle').each(function() {
      // console.log(this);
      // this.attr('cx', function() { return Math.random() * gameOptions.width; })
        // .attr('cy', function() { return Math.random() * gameOptions.height; });
    });
  };

  createEnemies();
  setInterval(moveEnemies, 2000);

}).call(this);