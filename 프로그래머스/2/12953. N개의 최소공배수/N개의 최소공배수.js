function solution(arr) {
    const answer = arr.reduce((acc, cur)=> acc*cur /gcd(acc,cur));
    
    function gcd(a,b){
        let i = 1;
        let gcd = 0;
        while(true){
            if(a % i ===0 && b % i ===0){
                gcd = i;
            }
            if(a <= i || b <= i){
                break;
            }
            i++;
        }
        return gcd;
    }
    
    return answer;
}