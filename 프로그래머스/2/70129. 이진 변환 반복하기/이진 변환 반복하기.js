function solution(s) {
    let zeroCount = 0;
    let count = 0;
   
    while(s !== '1'){
        zeroCount +=  s.split('0').length -1;
        const c = s.split('1').length -1;
        s = c.toString(2);
        count ++;
    }
    
    return [count, zeroCount];
}