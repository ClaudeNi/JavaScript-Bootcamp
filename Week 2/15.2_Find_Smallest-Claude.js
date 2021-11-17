function findSmallest(a, b, c) {
  if (a < b && a < c) {
    return c;
  } else if (b < a && c > b) {
    return b;
  } else {
    return c;
  }
}
console.log(findSmallest(52, 66, 2));

/*
What is wrong with this code? 
1. First find the line that contains the problem. Write it down.
    line 2, it checks if a is bigger than b first and gives us a true or false and then checks the value of true and false with c
    line 4, it checks if a is bigger than c first and gives us a true or false and then checks the value of true and false with b
    line 10, function name was written incorrectly. "findSmalest" instead of "findSmallest".

2. Which debug method did you use to find the bug?
    checked the return value by playing with the inputs
    checked the if statments

3. Explain the bug in your own words.
    function calling was incorrect.

4. Fix the code and submit it all.
    fixed the if statements
    fixed the function calling.

*/
