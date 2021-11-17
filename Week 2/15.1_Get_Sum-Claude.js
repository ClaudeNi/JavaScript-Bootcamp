function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1, 2, 3],[5, 66, 23]));

/*
What is wrong with this code? 
1. First find the line that contains the problem. Write it down.
    line 2, it had const sum which would mean its a constant and would not even be able to change it.
    line 9, had no return.
    line 11, didnt have a coma between the 2 arrays.

2. Which debug method did you use to find the bug?
    running the code and seeing checking if sum was getting bigger.

3. Explain the bug in your own words.
    sum was a constant and so we couldnt use it to add up the numbers

4. Fix the code and submit it all.
    added return and fixed the sum to become a let variable.

*/