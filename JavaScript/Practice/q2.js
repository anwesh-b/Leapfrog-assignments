// Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.
// Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
// Name: ABC School of Schoolery, Date: 2000
// Name: BCD School of Trickery, Date: 2006

var myInfo = {
    'name':'Anwesh Budhathoki',
    'address': 'Kathmandu',
    'emails': 'anweshb@gmail.com',
    'interests': ['Hiking','Anime','Video Games','Cricket'],
    'education': [
        {'name':'ABCD School','enrolledDate':2006},
        {'name':'MNOP High School','enrolledDate':2016},
        {'name':'WXYZ College','enrolledDate':2019}
    ]
}

if( Object.keys(myInfo).indexOf('education') != -1){
    for (var i=0; i<myInfo['education'].length; i++){
        console.log(
            'Name: ' + 
            myInfo['education'][i].name +
            ', Date: ' +
            myInfo['education'][j].enrolledDate
        );
    }
}
