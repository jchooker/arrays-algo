var testArr = [6,3,5,1,2,4]
var accrual = 0;

for (var i=0; i < testArr.length; i++) {
    accrual += testArr[i];
    console.log("Num "+testArr[i]+", Sum "+accrual)
}