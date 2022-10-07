function add(one, two) {
    var sum = one + two;
    return sum;
}
var result = add(10, 20);
console.log(result);
console.log('l love u');
console.log(result);



function Average(math, bangla, english, totalSub) {
    var total = math + bangla + english;
    var ava = total / totalSub;
    return ava;
}
var math = 50;
var bangla = 65;
var english = 75;
var totalSub = 3;
var result = Average(math, bangla, english, totalSub);
console.log('total subject Average :', result);


var user = {
    id: 001,
    Name: 'zubi',
    class: 9,
    mark: 90
}

var mobile = {
    brand : 'apply',
    price : 200,
    camara : '10mp',
    color : 'gray'
}

console.log(mobile , user );
console.log(mobile.price , user.Name);
mobile.price = 400 ;
console.log(mobile)




