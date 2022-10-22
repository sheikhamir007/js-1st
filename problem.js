//  1 foot = 12 in

// function foot(data) {
//     result = data * 12;
//     return result;
// }

// var feet = 5;
// var resultOne = foot(feet);
// console.log('my inches', resultOne);


// var data = 11;
// var result = data % 2;
// console.log(result)

// even and odd number 
// 303 is it even or 

// 100 / 2 = 50 -> 0
// 3 / 2 = 1 -> 1

// function evenOrOdd(number) {

//     var test = number % 2;

//     if(test == 0){
//         return true;
//     }else{
//         return false;
//     }

// }

// var num = 330;
// var oddEven = evenOrOdd(num);
// console.log(oddEven);

// > < <= >= ==  , === , != 


function max(number) {
    let bigNum = number[0];
    for(let x = 0; x < number.length; x++){
        let index = x;
        let data = number[index];
        if(data > bigNum){
            bigNum = data;
        }
        
        return bigNum;
    }
}

const value = [100 , 20 , 25 , 44 , 600];
const bigdata = max(value);
console.log(bigdata);