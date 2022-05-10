// link to kata: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript


/*
Instructions:
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/


//My first answer
function expandedForm(num) {
    //place everything in an array
    let arrOfNums = num.toString().split("");
    //variable to track how many zeros to add
    let zerosToAdd = "0";
    //go in reverse and add zeros to each number
    for (let i = arrOfNums.length - 2; i >= 0; i--) {
      //this is to remove any zeros so you dont get '70000 + 0000 + 300'
      if(arrOfNums[i] !== "0") {
      arrOfNums[i] += zerosToAdd;
      zerosToAdd+= "0"
      }
      //if it is a zero, we still want to update our zerosToAdd variable
      else{
        zerosToAdd+= "0"
      }
    }
    //we are filtering so that we dont get '70000 + 0 + 300'
    return arrOfNums.filter(x => x !== "0").join(" + ");
  }


  //Best methods from answers: 
  const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
// This method uses map() and raises each item to the power of 10 from its index. It then filters out the zeros.


function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }
// This method uses "0",repeat() and repeats the zeros equal to the length of the array minus current index -1. The -1 in the end
// is because index starts at 0 and length starts at 1

function expandedForm(num) {
    num = String(num);
    let result = [];
    for (var i = 0; i < num.length; i++) {
      if (num[i] == 0) continue;
      else result.push(num[i] + "0".repeat(num.length -i -1))
    }
    return result.join(" + ")
  }
  //Added this one just to show the "continue" keyword in a for loop that will go to next iteration