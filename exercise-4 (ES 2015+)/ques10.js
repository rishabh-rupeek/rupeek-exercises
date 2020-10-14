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

class SequelMovie extends Movie{
    constructor(earlierMovies){
        super();
        this.earlierMovies = earlierMovies;
    }
    getLifeTimeEarnings(){
        let sum=0;
        for(let i=0;i<this.earlierMovies.length;i++){
            sum+=this.earlierMovies[i].collection;
        }
        return sum;
    }
}

let movie1 = new Movie('Batman1',['a'],2000,100);
let movie2 = new Movie('Batman2',['a'],2001,110);
let movie3 = new Movie('Batman3',['a'],2002,120);


let allMovies = [
    movie1,
    movie2,
    movie3
]

let sequels = new SequelMovie(allMovies);
console.log(sequels.getLifeTimeEarnings());