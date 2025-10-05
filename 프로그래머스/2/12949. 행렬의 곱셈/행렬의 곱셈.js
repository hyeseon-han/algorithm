function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        const inner1 = arr1[i];
        const temp = [];
        for(let j = 0; j < arr2[0].length; j++){
            let value = 0;
            for(let k = 0; k < arr1[0].length; k++){
                value += arr1[i][k] * arr2[k][j];
            }
            temp.push(value);
        }
        answer.push(temp);
    }
    
    return answer;
    
}