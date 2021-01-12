// Write a program to sort an array of object by a target key. The original array should remain unchanged.
var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];



//Space Complexity
function sortBy(array, key) {
    var sorted_arr = []
    var length = array.length;
    var lastsort = ''
    var highest = array[0];
    for(var i = 0; i<length;i++){
        var lowest = highest;
        for (var j = 0; j< length; j++){
            highest = highest[key] > array[j][key]? highest : array[j];
            if( array[j][key] > lastsort){
                if (array[j][key] < lowest[key]){
                    lowest = array[j];
                }
            }             
        }
        lastsort = lowest[key];
        sorted_arr[i] = lowest;
    }
    return (sorted_arr);
}

//Time Complexity

function sortByTime(array, key) {
    var length = array.length;
    var array = array
    for(var i = 0; i<length-1;i++){
        for (var j=1; j<length-i;j++){
            if (array[j-1][key] > array[j][key]){
                var tempObj = array[j-1];
                array[j-1] =array[j]
                array[j] =tempObj;
            }
        }
    }
    return (array);
}


var sorted = sortBy(arr, 'name');
var sortedTime = sortByTime(arr, 'name');

console.log(sorted);
console.log(sortedTime);