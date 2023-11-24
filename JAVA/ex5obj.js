let calculator = {
    read: function() {
      this.a = parseFloat(prompt('Enter the a:', 0));
      this.b = parseFloat(prompt('Enter the b:', 0));
    },
  
    sum: function() {
      return this.a + this.b;
    },
  
    mul: function() {
      return this.a * this.b;
    }
  };
  
  
  calculator.read();
  alert('Sum: ' + calculator.sum());
  alert('Multiplication: ' + calculator.mul());