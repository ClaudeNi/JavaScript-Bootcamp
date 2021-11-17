function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
        if ( str . charAt ( i ) === char ){
            counter += 1 ;
        }
    }
    return counter ;
}
countOccurrences ( "ini mini miny moe" , "n" );

/*
What is wrong with this code? 
1. First find the line that contains the problem. Write it down.
    line 5, we arent changed counter to add 1 to it

2. Which debug method did you use to find the bug?
    i debugged the counter variable

3. Explain the bug in your own words.
    counter wasnt getting an addition of 1

4. Fix the code and submit it all
    changed counter + 1 to counter += 1

*/