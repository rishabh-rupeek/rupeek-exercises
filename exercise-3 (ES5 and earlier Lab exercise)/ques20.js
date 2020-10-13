const movie = {
    name:'The Dark Knight',
    cast:[],
    yearOfRelease:2007,
    boxOfficeCollection:1000,
    addToCast:function(name){
        this.cast.push(name);
    },
    addToCollection:function(amount){
        this.boxOfficeCollection+=amount;
    }

}

console.log(movie);
movie.addToCast('Christain Bale');
movie.addToCollection(100);

console.log(movie);