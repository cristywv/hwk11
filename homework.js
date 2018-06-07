class dj {
    constructor (name, genre) {
    this._name = name;
    this._genre = genre;
    this._topSingles = 5;
    this._timesPlayed = 0; 
    }
    get name(){
        
        console.log(`I am going to miss ${this._name}!`);
        return this._name;
    }
    get genre(){
        
        console.log(`His ${this._genre} music is awesome!`);
        return this._genre;
    }

    meetAndGreet (mg) {
        this._timesPlayed += mg;
        console.log(`After meet and greet, the times played went up by ${this._timesPlayed}`);
    }

    concert (con) {
        this._topSingles += con;
        console.log(`After concert, the single increased by ${this._topSingles}`);
    }
}

var avicii = new dj ("Avicii", "Electronic");
console.log( avicii.name);
console.log(avicii.genre);
avicii.meetAndGreet(10);
avicii.concert(26);



