function binarySearch(arr, num, start=0, end=(arr.length-1)) {
    let mid = Math.floor((end - start) / 2 + start) ;
    if(arr[mid] === num) {
        return mid;
    }
    if (end - start == 0) {
        return -1;
    }
    if (arr[mid] > num) {
        return binarySearch(arr, num, start, mid);
    }
    return binarySearch(arr, num, mid+1, end);
}