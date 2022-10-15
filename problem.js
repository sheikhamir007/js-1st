//  1 foot = 12 in

function foot(data) {
    result = data * 12;
    return result;
}

var feet = 5;
var resultOne = foot(feet);
console.log('my inches', resultOne);


var data = 11;
var result = data % 2;
console.log(result)

// even and odd number 
// 303 is it even or 

// 100 / 2 = 50 -> 0
// 3 / 2 = 1 -> 1

function evenOrOdd(number) {

    var test = number % 2;

    if(test == 0){
        return true;
    }else{
        return false;
    }

}

var num = 330;
var oddEven = evenOrOdd(num);
console.log(oddEven);

// > < <= >= ==  , === , != 


