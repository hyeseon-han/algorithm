function solution(n) {
    let count = 0;
    
    for(let start = 1; start <= n; start++){
        let sum = 0;
        
        for(let j = 0; j <= n - start; j++){
            sum += start + j;
            if(sum === n){
                count++;
                break;
            }
            if(sum > n){
                break;
            }
        }
    }
    
    return count;
}