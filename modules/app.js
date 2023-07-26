//TASK 1

stringLength = (text) => {return text.length;}

//TASK 2

reverseString = (string) => {
 return string.split('').reverse().join('');
}

//TASK 3

class Calculator {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    // add, subtract, divide, and multiply.
    add = () => {
        return this.a + this.b;
    }

    subtract = () => {
        return this.a - this.b;
    }

    divide = () => {
        return this.a / this.b;
    }

    multiply = () => {
        return this.a * this.b;
    }

}

//TASK 4

const capitalize = (string) => {
    const charArray = string.split('');
    const newCharArray = charArray.map((char, i) => {
      if (i === 0) {
        return char.toUpperCase();
      }
      return char;
    });
  
    const newString = newCharArray.join('');
    return newString;
  };

module.exports = {
    stringLength,
    reverseString,
    Calculator,
    capitalize
};