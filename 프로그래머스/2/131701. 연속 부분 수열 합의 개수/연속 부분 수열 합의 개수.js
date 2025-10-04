function solution(elements) {
    const arr = elements.concat(elements); 
    const sumSet = new Set();
    
    function arrSubSum(k){
        let sum = 0;
        for(let i = 0; i < k; i++) sum += arr[i];
        
        for(let i = k; i < arr.length; i++){
            sum = sum - arr[i-k] + arr[i];
            sumSet.add(sum);
        }
    }
    
    for(let i = 1; i <= elements.length; i++){
        arrSubSum(i);
    }
    
    return sumSet.size;
}