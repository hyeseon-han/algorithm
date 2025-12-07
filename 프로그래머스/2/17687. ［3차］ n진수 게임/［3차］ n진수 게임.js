function solution(n, t, m, p) {
    let answer = '';
    let str = '';
    
    let i = 0;
    while(str.length <= t * m){
        const converted = i.toString(n);
        str += converted.toUpperCase();
        i++;
    }
    
    for(let i =0; i < t; i++){
        const order = p + (m*i);
        answer+= str[order-1];
    }
    
    return answer;
}