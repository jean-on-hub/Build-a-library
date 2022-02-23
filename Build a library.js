class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title () {
      return this._title;
    }
  
    get isCheckedOut () {
      return this._isCheckedOut;
    }
  
    get ratings () {
      return this._ratings;
    }
  
    toggleCheckOutStatus () {
      if (this._isCheckedOut == true) {
        this._isCheckedOut = false;
      } else {
        this._isCheckedOut = true;
      }
    }
  
    getAverageRating () {
      const sum = this._ratings.reduce((previousValue, currentValue) => (previousValue + currentValue))
      return sum / this._ratings.length
    }
  
    addRating (rating) {
      return this._ratings.push(rating);
    }
  
    set isCheckedOut (checkOutStatus) {
      this._isCheckedOut = checkOutStatus;
    }
  }
  
  class Book extends Media {
    constructor (author, pages, title) {
      super(title)
      this._author = author;
      this._pages = pages;
    }
  
    get author () {
      return this._author
    }  
  
    get pages () {
      return this._pages
    }
  }
  
  class Movie extends Media {
    constructor (director, title, runTime) {
      super(title)
      this._director = director;
      this._runTime = runTime;
    }
  
    get director () {
      return this._director
    }
  
    get runTime () {
      return this._runtime
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());