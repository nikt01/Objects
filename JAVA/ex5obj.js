let calculator = {
    read: function() {
      this.a = parseFloat(prompt('Enter the first value:', 0));
      this.b = parseFloat(prompt('Enter the second value:', 0));
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