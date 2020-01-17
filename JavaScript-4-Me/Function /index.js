var array = [1999, 1998, 2000, 2001];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}


var ages = arrayCalc(array, calcAge);



console.log(ages); 