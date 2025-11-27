function solution(n, k) {
    let count = 0;
    const arr = n.toString(k).split('0');
    
    function isPrime(num){
        if(num === 2){
            return true;
        }
        if(num <= 1 || num % 2 === 0){
            return false;
        }
        const sqrt = parseInt(Math.sqrt(num));
        for(let i = 3; i <= sqrt; i+=2){
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ''){
            continue;
        }
        const num = Number(arr[i]);
        
        if(isPrime(num)){
            count++;
        }
    }
    return count ?? -1;
}