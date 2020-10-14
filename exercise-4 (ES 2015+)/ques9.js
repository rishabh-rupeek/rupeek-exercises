class Movie{
    constructor(name,cast,year,collection){
        this.name=name;
        this.cast=cast;
        this.year=year;
        this.collection=collection;
    }
    addToCast(castName) {
        this.cast.push(castName);
    }

    addToCollection(collection) {
        this.collection+=collection;
    }
    
}

let movie1 = new Movie('Dark Knight',[],2007,0);
movie1.addToCast('Abc');
movie1.addToCollection(100);

console.log(movie1);
