angular.module('starWarsApp')
       .controller('MainController', MainController);

function MainController(swapi) {
  var main = this;
  console.log('MainController loaded');

  main.films = [];
  main.lines = [];

  console.log('about to call swapi.getFilms');
  swapi.getFilms()
       .then(function(films){
         main.films = films;
       });

  main.getFilmData = function() {
    main.lines = [];
    main.class = 'no-scroll';

    var promise = swapi.getFilmData(main.selected);
    promise.then(function(film){
      main.lines = film.opening_crawl.split('\n');
      main.class = 'scroll';
    });
  };
}
