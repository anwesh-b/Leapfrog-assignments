// Write a function to render the following pattern in the console:
// * * * * *
// * * * *
// * * *
// * * 
// *
// The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.


function asterisk(n){
    for(i = 0; i<n; i++){
        var temp ='';
        for (j=0;j<n-i;j++){
            temp += '*'
        }
        console.log(temp);
    }
}

asterisk(10);
