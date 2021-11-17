function calcAverage (arr){
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
        sum += arr [ i ];
    }
    return sum / arr.length;
}
calcAverage ([ 85 , 90 , 92 ]);

/*
What is wrong with this code? 
1. First find the line that contains the problem. Write it down.
    line 2, we arent telling sum to start at 0, thus making line 4 not be able to add up values.
    line 6, we arent dividing sum by the length of the array and thus not getting the average.

2. Which debug method did you use to find the bug?
    running the code and seeing checking if sum was getting bigger.

3. Explain the bug in your own words.
    sum wasnt getting bigger with each addition and we werent going to get the average because we werent dividing at the end by the length

4. Fix the code and submit it all.
    made sum = 0 and divided the sum in return by arr.length

*/