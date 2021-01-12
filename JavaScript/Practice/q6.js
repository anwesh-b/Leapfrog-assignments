// var input = {
//     '1': {
//       id: 1,
//       name: 'John',
//       children: [
//         { id: 2, name: 'Sally' },
//         { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
//       ]
//     },
//     '5': {
//       id: 5,
//       name: 'Mike',
//       children: [{ id: 6, name: 'Peter' }]
//     }
//   };
  
//   // To this
//   var output = {
//     '1': { id: 1, name: 'John', children: [2, 3] },
//     '2': { id: 2, name: 'Sally' },
//     '3': { id: 3, name: 'Mark', children: [4] },
//     '4': { id: 4, name: 'Harry' },
//     '5': { id: 5, name: 'Mike', children: [6] },
//     '6': { id: 6, name: 'Peter' }
//   };


var input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
      ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
  };


function normalization(objct){
    res = {}
    Object.keys(objct).forEach(function(key){
        res[key.toString()] = {id: objct[key].id, name: objct[key].name};
        if(objct[key].children){
            objct[key].children.forEach(function(child){
                childrens(res, child);
            });
        }
    });
    return res;
}

function childrens(res, child) {
    res[child.id] = {id: child.id, name: child.name};
    if(child.children){
        child.children.forEach(function(child){
            childrens(res, child);
        })
    }
}

var output = normalization(input);

console.log(output);