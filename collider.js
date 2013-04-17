//(function() {

  // Initialize variables
  var gameOptions = {
    width: 700,
    height: 400,
    numOfEnemies: 10
  };

  var axes = {
    x: d3.scale.linear().domain([0, 100]).range([0, gameOptions.width]),
    y: d3.scale.linear().domain([0, 100]).range([0, gameOptions.height])
  };

  // Create the board as an svg element and append to DOM
  var gameboard = d3.select('div.container').append('svg:svg')
    .attr('width', gameOptions.width)
    .attr('height', gameOptions.height);

  // Create enemies and append to DOM
  // var createEnemies = function() {
  //   var svg = d3.select('svg');
  //   for(var i = 0; i < gameOptions.numOfEnemies; i++) {
  //     svg.append('circle')
  //       .attr('r', gameOptions.enemyRadius)
  //       .attr('cx', function() {
  //         return Math.random() * gameOptions.width;
  //       })
  //       .attr('cy', function() {
  //         return Math.random() * gameOptions.height;
  //       });
  //   }
  // };

  // Create player and append to DOM

  // Make the enemies move randomly
  var generateEnemyPositions = function() {
    return _.range(gameOptions.numOfEnemies).map(function(i) {
      return {
        id: i,
        x: Math.random() * gameOptions.width,
        y: Math.random() * gameOptions.height
      };
    });
  };

  var createEnemies = function(enemy_data) {
    var enemies = gameboard.selectAll('circle').data(enemy_data, function(d) {
      return d.id;
    });
    enemies.enter()
      .append('svg:circle')
      .attr('r', 10);

    enemies.transition()
      .duration(2000)
      .ease('sine')
      .attr('class', 'enemy')
      .attr('cx', function(d) {return d.x;})
      .attr('cy', function(d) {return d.y;});

    enemies.exit()
      .remove();
    // return enemies.transition().duration(500).attr('cx') //.attr('r', 10); //.transition(); //.duration(2000);
  };

  var play = function() {
    var gameTurn = function() {
      // createEnemies(generateEnemyPositions());
      return createEnemies(generateEnemyPositions());
    };

    gameTurn();
    setInterval(gameTurn, 1000);
  };

  play();
// }).call(this);
