/**
 * 
 * @param {Number} N 
 * @param {Array} A 
 */


function solution (N, A) {
//solution(5, [3, 4, 4, 6, 1, 4, 4])
    let arrCounter = new Array(N).fill(0);
    let maxValue = 0;
    let whenMaxValue = 0;

    for (let i = 0; i < A.length; i++) {

        if (1 <= A[i] && A[i] <= N) {

            if (arrCounter[A[i] - 1] < whenMaxValue) {
                arrCounter[A[i] - 1] = whenMaxValue;
            }

            arrCounter[A[i] - 1] += 1;

            if (arrCounter[A[i] - 1] > maxValue) {
                maxValue = arrCounter[A[i] - 1];
            } 
            //continue;
        }

        if (A[i] == N + 1) {
            //arrCounter = new Array(N).fill(maxValue);
            whenMaxValue = maxValue;
        }

    }

    for (let j = 0; j < N ; j++) {
        if (arrCounter[j] < whenMaxValue) arrCounter[j] = whenMaxValue;
    }

    return arrCounter;

}