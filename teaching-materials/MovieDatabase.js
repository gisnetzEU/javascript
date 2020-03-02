//https://www.teaching-materials.org/javascript/exercises/objectarguments
//https://www.teaching-materials.org/javascript/exercises/cashregister

var myFavMovie = [{
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes'],
},  {
    title: 'Hitch',
    duration: 210,
    stars: ['Will Smith', 'Eva Mendes', 'otro'],
},  {
    title: 'Batman Begins ',
    duration: 180,
    stars: ['Christian Bale', 'Michael Caine', 'Liam Neeson', 'Katie Holmes']

}];

myFavMovie.forEach(printMovie);

/*function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    var starsString = 'Stars: ';
    for (var i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i != movie.stars.length -1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}*/

// Or...

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It stars ' + movie.stars.join(', '));
}

//printMovie(myFavMovie);