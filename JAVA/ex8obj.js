let number = {
    current: 0,
    add() {
      this.current++;
      return this;
    },
    subtract() {
      this.current--;
      return this;
    },
    showNumber() {
      console.log(this.current);
      return this;
    }
  };
  number.subtract().add().add().subtract().showNumber();

  //i think thats it?
  