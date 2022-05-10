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