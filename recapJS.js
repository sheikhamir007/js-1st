// 1 variable 

var myName = 'amir';
console.log(myName);

// 2 array 
var friend = ['abul' , 'babul' , 'ami' , 'tumi'];

var friendName = friend[2];
var frLen = friend.length; 
var indexOf = friend.indexOf('babul');

console.log(friendName);
console.log(frLen);
console.log(indexOf);

// 3 condition  

if (frLen < 3) {
    console.log('true');
}else if(frLen <= 4){
    console.log('true 2nd');
}
else{
    console.log('false')
}

// loop 
var num = 1;
while(num <= 6){
    console.log( num ,'hello');
    num++
}

for(var i = 1 ; i < 6 ; i++){
    console.log( i ,'hello world');
}

// function

function age(data){
    if(data > 20){
       return 'ready for marriage'
    }else{
        return ' chill '
    }
}

// object 

var amir = {
    age : 25,
    data : 'study',
    color : 'pink',
    car : 'nissan'
}

// console.log(amir.car);
var ready = amir.age ;
var result = age(ready);
console.log(result)

// math  + - * / % 
// shothand ++ , -- ,