function getSumOfEven(arr) {
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1,2,3,4,5,6,7,8,9,10]);

/**
What is wrong with this code? 
1. First find the line that contains the problem. Write it down.
    line 2 is returning the elements that are odd

2. Which debug method did you use to find the bug?
    checked what the return value for each element

3. Explain the bug in your own words.
    the function is returning the odd numbers

4. Fix the code and submit it all.
    changed the index

*/