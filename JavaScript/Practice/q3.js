// Write a function that searches for an object by a specific key value in an array of objects:
// var fruits = [
//     {id: 1, name: 'Banana', color: 'Yellow'},
//     {id: 2, name: 'Apple', color: 'Red'}
// ]

// searchByName(fruits, 'apple');
// Should return: {id: 2, name: 'Apple', color: 'Red'}

// Also try searchByKey(fruits, 'name', 'apple');

var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]


function searchByName(obj, fruitname){
    var length = obj.length;
    for (var i=0; i<length; i++){
        if (obj[i].name.toLowerCase() === fruitname.toLowerCase()){
            return obj[i];
        }
    }
}

function searchByKey(obj, findinKey, valueToSearch){
    var length = obj.length;
    for(var i=0; i<length; i++){
        if (obj[i][findinKey].toLowerCase() === valueToSearch.toLowerCase()){
            return obj[i];
        }
    }
}


console.log(searchByName(fruits, 'apple'));
console.log(searchByKey(fruits, 'name', 'apple'));
